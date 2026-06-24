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
            <div>
                {/* portfolio 1: box image, box info */}
                <div>
                    {/* box image: image & discount */}
                    <div>
                        <Image alt="Portfolio 1"  width="329" src="/portfolios/portfolio_1.png" height="329"></Image>
                        {/* discount */}
                        <div></div>
                    </div>
                    {/* box info: info & button */}
                    <div></div>
                </div>
                {/* portfolio 2: box image, box info */}
                <div>
                    {/* box image: image & discount */}
                    <div>
                        <Image alt="Portfolio 2"  width="329" src="/portfolios/portfolio_2.png" height="329"></Image>
                        {/* discoutn */}
                        <div></div>
                    </div>
                    {/* box info: info & button */}
                    <div></div>
                </div>
                {/* portfolio 3: box image, box info */}
                <div>
                    {/* box image: image & discount */}
                    <div>
                        <Image alt="Portfolio 3"  width="329" src="/portfolios/portfolio_3.png" height="329"></Image>
                        {/* discount */}
                        <div></div>
                    </div>
                    {/* box info: info & button */}
                    <div></div>
                </div>
            </div>
        </section>
    );
}