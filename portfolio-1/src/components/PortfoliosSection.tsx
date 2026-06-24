import { portfolio } from "@/data/portfolio";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function PortfoliosSection() {
    return(
        <section className="flex flex-col items-start py-10 px-4 gap-6 w-[393px] h-[1767px] flex-none order-4 grow-0 relative left-1/2 top-0 -translate-x-1/2 bg-pink-300">
            {/* main box 1: box 1, box 2 */}
            <div className="flex flex-col items-start gap-6 w-[361px] h-[210px] flex-none order-0 self-stretch grow-0">
                {/* box 1: title & subtitle */}
                <div className="flex flex-col items-start gap-2 w-[361px] h-[130px] flex-none order-0 self-stretch grow-0">
                    <h2 className="w-[361px] h-[38px] font-['Montserrat'] font-bold text-[28px] leading-[38px] tracking-[-0.02em] text-[#0A0D12] flex-none order-0 self-stretch grow-0">{portfolio.title}</h2>
                    <p className="w-[361px] h-[84px] font-['Montserrat'] font-medium text-[14px] leading-[28px] text-[#0A0D12] flex-none order-1 self-stretch grow-0">{portfolio.subtitle}</p>
                </div>
                {/* box 2: p 'See All', button 'more' */}
                <div className="box-border flex flex-row justify-center items-center py-2 pl-4 pr-2 gap-2 w-[361px] h-14 border border-[#D5D7DA] rounded-full flex-none order-1 self-stretch grow-0">
                    <p className="w-[293px] h-[30px] font-['Montserrat'] font-semibold text-[16px] leading-[30px] text-[#0A0D12] flex-none order-0 grow">{portfolio.seeAllCard}</p>
                    <Button className="flex flex-row items-center p-2 gap-2 w-9 h-9 bg-[#0A0D12] rounded-full flex-none order-1 grow-0"><div className="w-[20px] h-[20px] flex items-center self-center justify-center"><ArrowRight className="w-[19.67px]! h-[19.67px]!" /></div></Button>
                </div>
            </div>
            {/* main box 2: portfolio 1, portfolio 2, portfolio 3 */}
            <div className="flex flex-col justify-center items-start p-0 gap-5 w-[361px] h-[1453px] flex-none order-1 self-stretch flex-grow-0 bg-amber-200">
                {/* portfolio 1: box image, box info */}
                <div className="flex flex-col items-start p-0 w-[361px] h-[471px] flex-none order-0 self-stretch flex-grow-0 bg-green-400">
                    {/* box image: image & discount */}
                    <div className="flex flex-row items-center p-[16px] gap-[8px] isolation-isolate w-[361px] h-[361px] bg-amber-200 rounded-[20px] flex-none order-0 flex-grow-0">
                        <Image alt="Portfolio 1"  width="329" src="/portfolios/portfolio_1.png" height="329" className="w-[329px]! h-[329px]! relative rounded-lg flex-none order-0 grow z-0"></Image>
                        {/* discount */}
                        <div></div>
                    </div>
                    {/* box info: info & button */}
                    <div className="flex flex-row items-center justify-between gap-0 rounded-[20px] bg-[#F5F5F5] p-[16px] h-[110px] w-[361px] flex-none order-1 grow-0">
                        {/* info */}
                        <div className="flex flex-col items-start gap-[12px] mx-auto h-[78px] w-[293px] flex-none order-none grow bg-amber-500">
                            <h2 className="w-[293px] h-[30px] font-['Montserrat'] text-[16px] font-bold leading-[30px] tracking-[-0.02em] text-[#0A0D12] flex-none order-0 self-stretch grow-0">{portfolio.portfolios[0].title}</h2>
                            <hr className="w-[293px] h-[0px] border border-[#D5D7DA] flex-none self-stretch flex-grow-0"/>
                            <p className="w-[293px] h-[24px] font-['Montserrat'] font-medium text-[12px] leading-[24px] text-[#535862] flex-none order-2 self-stretch grow-0">{portfolio.portfolios[0].category}</p>
                        </div>
                        {/* button */}
                        <Button className="flex flex-row items-center justify-center gap-[8px] p-[8px] mx-auto h-[36px] w-[36px] rounded-[100px] bg-[#B76080] flex-none mr-20 grow-0">
                            <div>
                                <ArrowRight className="w-[19.67px]! h-[19.67px]!"/>
                            </div>
                        </Button>
                    </div>
                </div>
                {/* portfolio 2: box image, box info */}
                <div className="flex flex-col items-start p-0 w-[361px] h-[471px] flex-none order-0 self-stretch flex-grow-0 bg-green-400">
                    {/* box image: image & discount */}
                    <div className="flex flex-row items-center p-[16px] gap-[8px] isolation-isolate w-[361px] h-[361px] bg-amber-200 rounded-[20px] flex-none order-0 flex-grow-0">
                        <Image alt="Portfolio 2"  width="329" src="/portfolios/portfolio_2.png" height="329" className="w-[329px]! h-[329px]! relative rounded-lg flex-none order-0 grow z-0"></Image>
                        {/* discount */}
                        <div></div>
                    </div>
                    {/* box info: info & button */}
                    <div className="flex flex-row items-center justify-between gap-0 rounded-[20px] bg-[#F5F5F5] p-[16px] h-[110px] w-[361px] flex-none order-1 grow-0">
                        {/* info */}
                        <div className="flex flex-col items-start gap-[12px] mx-auto h-[78px] w-[293px] flex-none order-none grow bg-amber-500">
                            <h2 className="w-[293px] h-[30px] font-['Montserrat'] text-[16px] font-bold leading-[30px] tracking-[-0.02em] text-[#0A0D12] flex-none order-0 self-stretch grow-0">{portfolio.portfolios[1].title}</h2>
                            <hr className="w-[293px] h-[0px] border border-[#D5D7DA] flex-none self-stretch flex-grow-0"/>
                            <p className="w-[293px] h-[24px] font-['Montserrat'] font-medium text-[12px] leading-[24px] text-[#535862] flex-none order-2 self-stretch grow-0">{portfolio.portfolios[1].category}</p>
                        </div>
                        {/* button */}
                        <Button className="flex flex-row items-center justify-center gap-[8px] p-[8px] mx-auto h-[36px] w-[36px] rounded-[100px] bg-[#B76080] flex-none mr-20 grow-0">
                            <div>
                                <ArrowRight className="w-[19.67px]! h-[19.67px]!"/>
                            </div>
                        </Button>
                    </div>
                </div>
                {/* portfolio 3: box image, box info */}
                <div className="flex flex-col items-start p-0 w-[361px] h-[471px] flex-none order-0 self-stretch flex-grow-0 bg-green-400">
                    {/* box image: image & discount */}
                    <div className="flex flex-row items-center p-[16px] gap-[8px] isolation-isolate w-[361px] h-[361px] bg-amber-200 rounded-[20px] flex-none order-0 flex-grow-0">
                        <Image alt="Portfolio 3"  width="329" src="/portfolios/portfolio_3.png" height="329" className="w-[329px]! h-[329px]! relative rounded-lg flex-none order-0 grow z-0"></Image>
                        {/* discount */}
                        <div></div>
                    </div>
                    {/* box info: info & button */}
                    <div className="flex flex-row items-center justify-between gap-0 rounded-[20px] bg-[#F5F5F5] p-[16px] h-[110px] w-[361px] flex-none order-1 grow-0">
                        {/* info */}
                        <div className="flex flex-col items-start gap-[12px] mx-auto h-[78px] w-[293px] flex-none order-none grow bg-amber-500">
                            <h2 className="w-[293px] h-[30px] font-['Montserrat'] text-[16px] font-bold leading-[30px] tracking-[-0.02em] text-[#0A0D12] flex-none order-0 self-stretch grow-0">{portfolio.portfolios[2].title}</h2>
                            <hr className="w-[293px] h-[0px] border border-[#D5D7DA] flex-none self-stretch flex-grow-0"/>
                            <p className="w-[293px] h-[24px] font-['Montserrat'] font-medium text-[12px] leading-[24px] text-[#535862] flex-none order-2 self-stretch grow-0">{portfolio.portfolios[2].category}</p>
                        </div>
                        {/* button */}
                        <Button className="flex flex-row items-center justify-center gap-[8px] p-[8px] mx-auto h-[36px] w-[36px] rounded-[100px] bg-[#B76080] flex-none mr-20 grow-0">
                            <div>
                                <ArrowRight className="w-[19.67px]! h-[19.67px]!"/>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}