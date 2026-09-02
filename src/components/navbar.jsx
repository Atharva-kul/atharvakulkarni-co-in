import { useState } from "react";

function NavBar(){
    const [pixelFont] = useState(true)

    return (
        <nav
            className="font-pixel flex items-center justify-between border-b-2">
                <div className="inline-block border-2 border-black px-3 py-2 font-pixel text-[48px] font-bold leading-[0.9] tracking-wide text-[#0FE500] shadow-[4px_4px_0_0_#000]">
                    <span className="[-webkit-text-stroke:1.5px_black]">
                        Atharva <br /> Kulkarni
                    </span>
                </div>

                <div className="pr-4 sm:pr-8 md:pr-16 lg:pr-24 font-bold text-[24px] text-white [-webkit-text-stroke:1px_black] flex items-center justify-between lg:gap-10">
                    <a className="hover:text-[#FFEE00] hover:underline" href="a.html">about</a>
                    <a className="hover:text-[#FFEE00] hover:underline" href="b.html">my projects</a>
                    <a className="hover:text-[#FFEE00] hover:underline" href="b.html">skills</a>
                    <a className="hover:text-[#FFEE00] hover:underline" href="b.html">contact me</a>
                    
                </div>
        </nav>
    )
}

export default NavBar