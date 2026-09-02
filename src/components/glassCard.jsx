import { useState } from "react";

function GlassCard() {
    return(
        <div className="w-[300px]
            h-[450px]
            [-webkit-text-stroke:1px_black]
            bg-[#E8E7E7]/50
            
            border-b-2
            border-black/40
            shadow-xl">
                <div className="flex flex-col items-center justify-center ">
                    <div className="font-pixel text-[#FFEE00] text-[28px] mt-[3.2rem]">AI/ML</div>
                    <div className="text-[18px] text-white">Building intelligent models</div>

                    <div className="font-pixel text-[#FFEE00] text-[28px] mt-[3.5rem]">Developer</div>
                    <div className="text-[18px] text-white">Frontend-Backend</div>

                    <div className="font-pixel text-[#FFEE00] text-[28px] mt-[3.5rem]">Game Dev</div>
                    <div className="text-[18px] text-white">Godot and game logic</div>
                </div>
                
            </div>
    )
}

export default GlassCard