import {why} from "@/data/why_us"
import { Card, CardHeader, CardContent, CardDescription } from "./ui/card";
import Image from "next/image"
import { Check } from 'lucide-react';

export default function WhyUsSection() {
    return(
        <section className="flex flex-col items-start p-[40px_16px] gap-2 w-[393px] h-[1218px] rounded-none flex-none order-3 flex-grow-0 relative left-1/2 top-0 -translate-x-1/2 bg-amber-200">
            {/* box 1: title, description */}
            <div className="flex flex-col items-start p-0 gap-2 w-[361px] h-[102px] flex-none order-0 self-stretch flex-grow-0">
                <h2 className="w-[361px] h-[38px] font-['Montserrat'] font-bold text-[28px] leading-[38px] text-center tracking-[-0.02em] text-[#0A0D12] flex-none order-0 self-stretch flex-grow-0">{why.title}</h2>
                <p className="w-[361px] h-[56px] font-['Montserrat'] font-medium text-[14px] leading-[28px] text-center text-[#0A0D12] flex-none order-1 self-stretch flex-grow-0">{why.subtitle}</p>
            </div>
            {/* box 2: card "with me", card "another talen" */}
            <div className="box-border flex flex-col justify-center items-center p-0 gap-6 w-[361px] h-[1012px] border border-white/25 rounded-[24px] flex-none order-1 self-stretch flex-grow-0">
                {/* card "with me": CardHeader, CardContent, CardDescription */}
                <Card className="flex flex-col justify-center items-center p-[32px_16px] gap-6 w-[361px] h-[494px] bg-[#F3B64C] rounded-[16px] flex-none order-0 self-stretch flex-grow-0">
                    <CardHeader className="flex flex-col items-center p-0 gap-3 w-[81px] h-[124px] rounded-none flex-none order-0 flex-grow-0">
                        <h3 className="w-[81px] h-[32px] font-['Montserrat'] font-bold text-[18px] leading-[32px] flex items-center justify-center text-[#0A0D12] flex-none order-0 flex-grow-0">{why.why_us[0].title}</h3>
                        <div className="w-[80px] h-[80px] bg-[#B76080] rounded-[11523.4px] flex-none order-1 flex-grow-0 overflow-hidden">
                        <Image alt="Edwin" src="/edwin/edwin.svg" width="80" height="80" className="relative object-cover w-[65.31px] h-[78.69px] left-[calc(50%-27.905px)] top-[5.8px]"></Image>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            <ul>
                                {why.why_us[0]?.reasons.map((reason, i) => (<li key={i} className="flex flex-row justify-center items-center p-0 gap-3 w-[329px] h-[30px] rounded-none flex-none order-0 self-stretch flex-grow-0"><Check className="w-[24px] h-[24px] rounded-none flex-none order-0 flex-grow-0 text-black "/><span className=" font-['Montserrat'] font-semibold text-[16px] leading-[30px] flex items-center justify-center text-center text-[#0A0D12] flex-none order-1 flex-grow-0">{reason}</span></li>))}
                                </ul>
                        </CardDescription>
                    </CardContent>
                </Card>
                {/* card "another talent": CardHeader, CardContent, CardDescription */}
                <Card className="box-border flex flex-col justify-center items-center p-[32px_16px] gap-6 w-[361px] h-[494px] bg-white border border-[#D5D7DA] rounded-[16px] flex-none order-1 self-stretch flex-grow-0">
                    <CardHeader className="flex flex-col items-center p-0 gap-3 w-[329px] h-[124px] rounded-none flex-none order-0 self-stretch flex-grow-0 bg-amber-200">
                        <h3 className="w-[329px] h-[32px] font-['Montserrat'] font-semibold text-[18px] leading-[32px] flex items-center justify-center text-center tracking-[-0.03em] text-[#0A0D12] flex-none order-0 self-stretch flex-grow-0">{why.why_us[1].title}</h3>
                        <div className="w-[80px] h-[80px] bg-[#D5D7DA] rounded-[9608.69px] flex-none order-1 flex-grow-0">
                        <Image alt="Gak Kenal" src="/edwin/gak_kenal.svg" width="80" height="80"></Image>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            <ul>
                                {why.why_us[1]?.reasons.map((reason, i) => (<li key={i} className="flex flex-row justify-center items-center p-0 gap-3 w-[329px] h-[30px] rounded-none flex-none order-0 self-stretch flex-grow-0"><Check className="w-[24px] h-[24px] rounded-none flex-none order-0 flex-grow-0 text-black "/><span className="font-['Montserrat'] font-semibold text-[16px] leading-[30px] flex items-center justify-center text-center text-[#0A0D12] flex-none order-1 flex-grow-0">{reason}</span></li>))}
                                </ul>
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}