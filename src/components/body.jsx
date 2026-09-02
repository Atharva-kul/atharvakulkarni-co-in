import { useState } from "react";
import GlassCard from "./glassCard";

function Body() {
    

    return (
        <div className="relative flex w-full h-[650px] bg-[#FFF8ED] border-b-2">
        <div className="ml-[3rem] pt-[2rem] tracking-widest h-full">
            <span className="font-pixel font-semibold text-shadow-lg [-webkit-text-stroke:1.5px_black] text-[64px] text-[black] leading-[0.98]">I  TEACH <br /> MACHINES  TO<br /> THINK </span> <br />
            <span className="font-pixel text-[48px] text-[#11FF00] text-shadow-lg [-webkit-text-stroke:1px_black]">WELL... KIND OF</span> <br />
            <span className="text-[20px] text-[white] [-webkit-text-stroke:0.9px_black] text-shadow-lg">Building intelligent systems using AI/ML, <br /> Building websites, <br /> Building games</span>

            <div className="w-full h-[180px] border mt-[2.5%] shadow-[4px_4px_0_0_#000] bg-[#F1E0C4]/30">

                    <div className="w-full h-[30%] border-b flex items-center">
                        <span className="font-pixel ml-[7.5%] text-[30px] text-[#11FF00] flex items-center [-webkit-text-stroke:0.9px_black] text-shadow-lg">
                            Featured Project
                        </span>
                    </div>
                    <div className="flex items-center justify-between px-[7.5%] font-pixel h-[70%]">
                        <span className="text-[40px] font-bold text-white [-webkit-text-stroke:0.9px_black] whitespace-nowrap">
                            CHESS BOT
                        </span>
                        <a className="text-[#11FF00] text-[32px] [-webkit-text-stroke:0.9px_black] whitespace-nowrap" href="#">
                            GitHub
                        </a>

                    </div>
            
        </div>
        <div className="absolute z-20 ml-142 -mt-[450px]">
            <GlassCard />
        </div>
        </div>
        </div>
        
        
    )
}

export default Body