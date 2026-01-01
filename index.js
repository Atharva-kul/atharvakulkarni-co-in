const BACKGROUND = '#050705ff';
const FOREGROUND = '#4239f9ff';

game.style.width = '100%';
game.style.height = '100%';

const fontSize = 20;
const ctx = game.getContext('2d');

function resize() {

    const dpr = window.devicePixelRatio || 1;

    game.width = window.innerWidth * dpr;
    game.height = window.innerHeight * dpr;

    ctx.scale(dpr, dpr);

    columns = Math.floor(window.innerWidth / fontSize);
    for(let i = 0; i<columns;i++) {
        if(drops[i] === undefined) {
            drops[i] = Math.floor(Math.random() * window.innerHeight / fontSize);
        }
    }
}

let columns = 2
let drops = []

columns = Math.floor(window.innerWidth / fontSize);

for(let i = 0; i<columns;i++) {
    drops[i] = Math.floor(Math.random() * window.innerHeight / fontSize);
}

window.addEventListener('resize', resize);

resize(); 

function clear() {
    ctx.fillStyle = BACKGROUND;

    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
}

function point({x, y}) {
    const s = 20;
    ctx.fillStyle = FOREGROUND;
    ctx.fillRect(x - s/2, y - s/2, s, s);
}

function line(p1, p2) {
    ctx.lineWidth = 3;
    ctx.strokeStyle = FOREGROUND;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
}

function screen(p) {

    return {

        x: (p.x + 1) / 2 * window.innerWidth,
        y: (1 - (p.y + 1) / 2) * window.innerHeight,
    }
}

function project({x, y, z}) {

    return {

        x:x/z,
        y:y/z,
    }
}

function translate_z({x, y, z}, dz) {

    return {x, y, z: z+dz};

}

function rotate_xz({x, y, z}, angle) {

    const c = Math.cos(angle);
    const s = Math.sin(angle);

    return {

        x: x*c-z*s,
        y: y,
        z: x*s+z*c,
    }
}

let dz = 5;
let angle = 0;

const cubes = [];
const spacing = 1.8; 
const offset = 1; 

for (let x of [-offset, offset]) {
    for (let y of [-offset, offset]) {
        for (let z of [-offset, offset]) {

            cubes.push({

                x: x * spacing,
                y: y * spacing,
                z: z * spacing

            });
        }
    }
}

let lastTime = 0;

function frame(time) {

    if (!lastTime) lastTime = time;
    const dt = (time - lastTime) / 1000; 
    lastTime = time;
    angle += dt; 

    clear();

    let minx = Infinity;
    let maxx = -Infinity;
    const padding = 20;

    for (const cube of cubes) {
        for(const f of fs) {
            for(let i=0; i<f.length; i++) {

                const base_a = vs[f[i]];
                const base_b = vs[f[(i+1)%f.length]];

                const a = { x: base_a.x + cube.x, y: base_a.y + cube.y, z: base_a.z + cube.z };
                const b = { x: base_b.x + cube.x, y: base_b.y + cube.y, z: base_b.z + cube.z };

                const p1 = screen(project(translate_z(rotate_xz(a, angle), dz)));
                const p2 = screen(project(translate_z(rotate_xz(b, angle), dz)));

                minx = Math.min(minx, p1.x, p2.x)
                maxx = Math.max(maxx, p1.x, p2.x)

                line(p1, p2)

            }
        }
    }

    if (minx !== Infinity && maxx !== -Infinity) {
        ctx.lineWidth = 1.5
        ctx.strokeStyle = '#000000ff';
        ctx.beginPath();
        ctx.moveTo(minx - padding, 0)
        ctx.lineTo(minx - padding, window.innerHeight)
        ctx.moveTo(maxx + padding, 0)
        ctx.lineTo(maxx + padding, window.innerHeight)
        ctx.stroke();

        ctx.fillStyle = '#037341ff';
        ctx.font = fontSize + 'px monospace';

        for(let i = 0; i<drops.length; i++) {
            const x = i * fontSize;

            if(x<minx - padding || x>maxx + padding) {
                const text = Math.random() >0.7 ? '0' : '1';

                ctx.fillText(text, x, drops[i] * fontSize);

                if(drops[i] * fontSize > window.innerHeight && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i] += 0.2;
            }
        }
    }

    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);