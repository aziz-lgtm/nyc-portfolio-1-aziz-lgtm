import {hero} from "@/data/hero";
import {Button} from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Menu } from 'lucide-react';
import { Mic } from 'lucide-react';


export default function HeroSection() {
  return (
    <section className="relative left-1/2 top-0 -translate-x-1/2 w-98.5 h-257 bg-[#A53F65]">
      {/* box navbar */}
      <div className="flex flex-row justify-between items-center px-4 py-0 gap-52.25 absolute w-90.25 h-12 left-1/2 -translate-x-1/2 top-4 bg-black/20 backdrop-blur-[20px] rounded-full">
      <h3 className="w-16.5 h-8.5 font-['Montserrat'] font-bold text-[20px] leading-8.5 text-white flex-none order-0 grow-0">
        Edwin
      </h3>
      {/* box humburger */}
      <div>
        <Menu></Menu>
      </div>
      </div>

    {/* box hero 1 : box 1 & box 2*/}
    <div className="flex flex-col items-start gap-[25px] absolute w-[361px] h-[429px] left-[16px] top-[88px]">
    {/* box 1: mic, h4, subtitle */}
      <div className="flex flex-col items-start gap-2 w-[361px] h-[178px] flex-none order-none self-stretch flex-grow-0">
        {/* box mic */}
        <div className="box-border flex flex-row justify-center items-center p-[2px_5px] gap-2 w-[48px] h-[48px] border border-[#B76080] rounded-full flex-none order-0 flex-grow-0"><Mic className="w-[20px] h-[26px] text-[#FFFFFF] flex-none order-0 flex-grow-0"></Mic></div>
        {/* box h4 */}
        <h4 className="w-[361px] h-[30px] font-['Montserrat'] font-bold text-[16px] leading-[30px] tracking-[-0.02em] text-[#FFFFFF] flex-none order-1 self-stretch flex-grow-0">{hero.title}</h4>
        {/* box subtitle */}
        <p className="w-[361px] h-[84px] font-['Montserrat'] font-medium text-[14px] leading-[28px] text-[#FFFFFF] flex-none order-2 self-stretch flex-grow-0">{hero.description}</p>
      </div>
    {/* box 2 : box stat 1st, box stat 2nd, and box button*/}
      <div className="flex flex-col items-start gap-5 w-[361px] h-[226px] flex-none order-1 self-stretch flex-grow-0">
        {/* box stat 1st: stat 1 & stat 2 */}
        <div className="flex flex-row items-start w-[361px] h-[69px] flex-none order-0 self-stretch flex-grow-0">
          {/* stat 1 */}
          <div className="flex flex-col items-start gap-[3px] w-[120.33px] h-[69px] flex-none order-0 flex-grow">
            <p className="w-[120.33px] h-[42px] font-['Montserrat'] font-bold text-[32px] leading-[42px] tracking-[-0.02em] text-[#FFFFFF] flex-none order-0 self-stretch flex-grow-0">{hero.stats[0].value}</p>
            <p className="w-[120.33px] h-[24px] font-['Montserrat'] font-semibold text-[12px] leading-[24px] tracking-[-0.03em] text-[#FFFFFF] flex-none order-1 self-stretch flex-grow-0">{hero.stats[0].label}</p>
          </div>
        {/* vertical line */}
          <span className="w-[60.67px] h-0 border border-[#B76080] -rotate-90 flex-none order-1 flex-grow mt-10"></span>
          {/* stat 2 */}
          <div className="flex flex-col items-start gap-[3px] w-[120.33px] h-[69px] flex-none order-2 flex-grow">
            <p className="w-[120.33px] h-[42px] font-['Montserrat'] font-bold text-[32px] leading-[42px] tracking-[-0.02em] text-[#FFFFFF] flex-none order-0 self-stretch flex-grow-0">{hero.stats[1].value}</p>
            <p className="w-[120.33px] h-[24px] font-['Montserrat'] font-semibold text-[12px] leading-[24px] tracking-[-0.03em] text-[#FFFFFF] flex-none order-1 self-stretch flex-grow-0">{hero.stats[1].label}</p>
          </div>
        </div>
        {/* box stat 2nd: stat 3 & stat 4 */}
        <div className="flex flex-row items-start p-0 w-[361px] h-[69px] flex-none order-1 self-stretch flex-grow-0">
          {/* stat 3 */}
          <div className="flex flex-col items-start p-0 gap-[3px] w-[120.33px] h-[69px] flex-none order-0 flex-grow">
            <p className="w-[120.33px] h-[42px] font-['Montserrat'] font-bold text-[32px] leading-[42px] tracking-[-0.02em] text-[#FFFFFF] flex-none order-0 self-stretch flex-grow-0">{hero.stats[2].value}</p>
            <p className="w-[120.33px] h-[24px] font-['Montserrat'] font-semibold text-[12px] leading-[24px] tracking-[-0.03em] text-[#FFFFFF] flex-none order-1 self-stretch flex-grow-0">{hero.stats[2].label}</p>
          </div>
        {/* vertical line */}
          <span className="w-[60.67px] h-0 border border-[#B76080] rotate-[-90deg] flex-none order-1 flex-grow mt-10"></span>
          {/* stat 4 */}
          <div className="flex flex-col items-start p-0 gap-[3px] w-[120.33px] h-[69px] flex-none order-2 flex-grow">
            <p className="w-[120.33px] h-[42px] font-['Montserrat'] font-bold text-[32px] leading-[42px] tracking-[-0.02em] text-[#FFFFFF] flex-none order-0 self-stretch flex-grow-0">{hero.stats[3].value}</p>
            <p className="w-[120.33px] h-[24px] font-['Montserrat'] font-semibold text-[12px] leading-[24px] tracking-[-0.03em] text-[#FFFFFF] flex-none order-1 self-stretch flex-grow-0">{hero.stats[3].label}</p>
          </div>
        </div>
        {/* box button */}
        <div className="flex flex-row justify-between items-center py-2 px-4 gap-2 w-[361px] h-[48px] bg-[#F3B64C] rounded-[100px] flex-none order-2 self-stretch flex-grow-0">
          <Button className="bg-transparent hover:bg-transparent w-full">
          <p className="w-[293px] h-[28px] font-['Montserrat'] font-semibold text-[14px] leading-[28px] text-[#0A0D12] flex-none order-0 flex-grow text-left">Contact Me</p> <div className="flex flex-row items-center p-2 gap-2 w-[36px] h-[36px] bg-[#0A0D12] rounded-[100px] flex-none order-1 flex-grow-0 -mr-2"><ArrowRight></ArrowRight></div>
          </Button>
        </div>
      </div>
    </div>
         
        <Image alt="Edwin Anderson" src="/hero/edwin_anderson.png" width="375" height="452" className="relative left-[calc(50%-177.5px)] top-144 "></Image>
        <span className="absolute w-29 h-20.25 left-6.5 top-159 font-['Bonheur_Royale'] font-normal text-[64.5855px] leading-20.25 tracking-[-0.02em] text-white rotate-[-12.34deg]">Junior</span>
        <div className="box-border flex flex-row items-center py-[4px] px-[16px] gap-[6px] absolute w-[146px] h-[32px] left-[calc(50%-73px+0.5px)] top-[555px] bg-[#860D39] border border-[#B76080] rounded-full">
          <span className="w-[8px] h-[8px] bg-[#E26190] rounded-full flex-none order-0 flex-grow-0"></span>
          <p className="w-[100px] h-[24px] font-['Montserrat'] font-semibold text-[12px] leading-[24px] tracking-[-0.03em] text-[#FFFFFF] flex-none order-1 flex-grow-0">Available for Hire</p>
        </div>
        <h1 className="absolute w-[357px] h-[126px] left-1/2 -translate-x-1/2 top-[652px] font-['Anton'] font-normal text-[102px] leading-[125px] text-center tracking-[-0.02em] text-secondary-100 -z-10">
        FRONTEND
        </h1>
        <h1 className="absolute w-[357px] h-[113px] left-1/2 -translate-x-1/2 top-[757.94px] font-['Anton'] font-normal text-[92px] leading-[113px] text-center tracking-[-0.02em] text-[#F3B64C] -z-10">
          DEVELOPER
        </h1>
        <h1 className="absolute w-89.25 h-28.25 left-[calc(50%-178.5px)] top-189.5 font-['Anton'] font-normal text-[92px] leading-28.25 text-center tracking-[-0.02em] text-transparent [-webkit-text-stroke:1px_#F3B64C]">DEVELOPER</h1>
        
      
    </section>
  );
}
