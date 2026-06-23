'use client'
import { tech } from "@/data/tech";
import { SiHtml5, SiReact } from "react-icons/si";
import Image from "next/image";
import { Carousel, CarouselContent,CarouselItem, CarouselPrevious,CarouselNext } from "./ui/carousel";

export default function Tech() {
    return(
    <section className="flex flex-col items-center p-[40px_20px] gap-[24px] w-[393px] h-[602.33px] bg-[linear-gradient(180deg,rgba(158,56,94,0)_0%,rgba(158,56,94,0.1)_99.95%)] flex-none order-2 grow-0 left-1/2 -translate-x-1/2 relative bg-pink-200 ">
        {/* box 1: h2, p */}
        <div className="flex flex-col items-start p-0 gap-[8px] w-[353px] h-[140px] flex-none order-0 self-stretch grow-0">
            <h2 className="w-[353px] h-[76px] font-['Montserrat'] font-bold text-[28px] leading-[38px] text-center tracking-[-0.02em] text-[#0A0D12] flex-none order-0 self-stretch grow-0">{tech.title}</h2>
            <p className="w-[353px] h-[56px] font-['Montserrat'] font-medium text-[14px] leading-[28px] text-center text-[#0A0D12] flex-none order-1 self-stretch grow-0">{tech.description}</p>
        </div>
        {/* box 2: html, css, js, react */}
        
        <Carousel className="flex flex-col justify-center  p-0 gap-[32px] w-[361px] h-[358.33px] flex-none order-1 grow-0 overflow">
            {/* box html and css */}
            
            <CarouselContent className="flex flex-row items-start p-0 gap-[16px] w-[361px] h-[281px] flex-none order-0 grow-0">
                <CarouselItem className="flex flex-row items-start p-0 gap-[16px] w-[361px] h-[281px] flex-none order-0 grow-0">
            {/* html: logo, title, description */}
            <div className="flex flex-col items-center p-[40px_16px] gap-[12px] w-[172.5px] h-[281px] bg-[#F3B64C] rounded-[100px] flex-none order-0 grow-0">
                {/* logo */}
                <div className="flex flex-row justify-center items-center p-[10px] gap-[10px] isolate w-[60px] h-[60px] bg-[#F5F5F5] rounded-[24997.5px] flex-none order-0 grow-0">
                    <SiHtml5 className="text-red-600 w-[35px] h-[35px]"></SiHtml5>
                </div>
                {/* title, description */}
                <div className="flex flex-col items-center p-0 w-[140.5px] h-[129px] flex-none order-1 self-stretch grow-0">
                    <h3 className="w-[140.5px] h-[30px] font-['Montserrat'] font-semibold text-[16px] leading-[30px] text-center text-[#0A0D12] flex-none order-0 self-stretch grow-0">{tech.techs[0].language}</h3>
                    <p className="w-[140.5px] h-[84px] font-['Montserrat'] font-normal text-[14px] leading-[28px] flex items-center justify-center text-center text-[#252B37] flex-none order-1 self-stretch grow-0">{tech.techs[0].description}</p>
                </div>
            </div>
            {/* css: logo, title, description */}
            <div className="flex flex-col items-center p-[40px_16px] gap-[12px] w-[172.5px] h-[281px] bg-white rounded-[100px] flex-none order-0 grow-0 border border-neutral-300">
                {/* logo */}
                <div className="flex flex-row justify-center items-center p-[10px] gap-[10px] isolate w-[60px] h-[60px] bg-[#F5F5F5] rounded-[24997.5px] flex-none order-0 grow-0">
                    <Image alt="css" src="/tech/css.svg" width={30} height={35.22}></Image>
                </div>
                {/* title, description */}
                <div className="flex flex-col items-center p-0 w-[140.5px] h-[129px] flex-none order-1 self-stretch grow-0">
                    <h3 className="w-[140.5px] h-[30px] font-['Montserrat'] font-semibold text-[16px] leading-[30px] text-center text-[#0A0D12] flex-none order-0 self-stretch grow-0">{tech.techs[1].language}</h3>
                    <p className="w-[140.5px] h-[84px] font-['Montserrat'] font-normal text-[14px] leading-[28px] flex items-center justify-center text-center text-[#252B37] flex-none order-1 self-stretch grow-0">{tech.techs[1].description}</p>
                </div>
            </div>
                </CarouselItem>
            {/* box js and react */}
                <CarouselItem className="flex flex-row items-start p-0 gap-[16px] w-[361px] h-[281px] flex-none order-0 grow-0">
            {/* js: logo, title, description */}
            <div className="flex flex-col items-center p-[40px_16px] gap-[12px] w-[172.5px] h-[281px] bg-[#F3B64C] rounded-[100px] flex-none order-0 grow-0">
                {/* logo */}
                <div className="flex flex-row justify-center items-center p-[10px] gap-[10px] isolate w-[60px] h-[60px] bg-[#F5F5F5] rounded-[24997.5px] flex-none order-0 grow-0">
                    <Image alt="js" src={"/tech/js.svg"} height={44} width={44}></Image>
                </div>
                {/* title, description */}
                <div className="flex flex-col items-center p-0 w-[140.5px] h-[129px] flex-none order-1 self-stretch grow-0">
                    <h3 className="w-[140.5px] h-[30px] font-['Montserrat'] font-semibold text-[16px] leading-[30px] text-center text-[#0A0D12] flex-none order-0 self-stretch grow-0">{tech.techs[2].language}</h3>
                    <p className="w-[140.5px] h-[84px] font-['Montserrat'] font-normal text-[14px] leading-[28px] flex items-center justify-center text-center text-[#252B37] flex-none order-1 self-stretch grow-0">{tech.techs[2].description}</p>
                </div>
            </div>
            {/* react: logo, title, description */}
            <div className="flex flex-col items-center p-[40px_16px] gap-[12px] w-[172.5px] h-[281px] bg-white rounded-[100px] flex-none order-0 grow-0 border border-neutral-300">
                {/* logo */}
                <div className="flex flex-row justify-center items-center p-[10px] gap-[10px] isolate w-[60px] h-[60px] bg-[#F5F5F5] rounded-[24997.5px] flex-none order-0 grow-0">
                    <SiReact className="text-blue-400 w-[35px] h-[35px]"></SiReact>
                </div>
                {/* title, description */}
                <div className="flex flex-col items-center p-0 w-[140.5px] h-[129px] flex-none order-1 self-stretch grow-0">
                    <h3 className="w-[140.5px] h-[30px] font-['Montserrat'] font-semibold text-[16px] leading-[30px] text-center text-[#0A0D12] flex-none order-0 self-stretch grow-0">{tech.techs[3].language}</h3>
                    <p className="w-[140.5px] h-[84px] font-['Montserrat'] font-normal text-[14px] leading-[28px] flex items-center justify-center text-center text-[#252B37] flex-none order-1 self-stretch grow-0">{tech.techs[3].description}</p>
                </div>
            </div>
                </CarouselItem>
            </CarouselContent>
            
            <div className="flex flex-row justify-center items-center gap-3 mx-auto bg-primary-200">
                <CarouselPrevious className="static inset-auto my-0" />
                <CarouselNext className="static inset-auto my-0" />
            </div>
        </Carousel>
    </section>
    );
}