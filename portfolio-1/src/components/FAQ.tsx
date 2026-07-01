import {faq} from "@/data/faq"
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "./ui/accordion";

export default function FAQ() {
    return(
        <section id="faq" className="flex flex-col items-center p-[40px_16px] gap-6 w-[393px] h-[834px] bg-[#F5F5F5] flex-none order-7 flex-grow-0 left-1/2 -translate-x-1/2 relative md:w-full md:h-auto md:left-0 md:translate-x-0 md:max-w-360 md:mx-auto md:py-20 md:px-16">
            {/* main box 1: title, subtitle */}
            <div className="flex flex-col items-start p-0 gap-2 w-[361px] h-[102px] flex-none self-stretch flex-grow-0 md:w-full md:h-auto md:max-w-2xl">
                <h2 className="w-[361px] h-[38px] font-['Montserrat'] font-bold text-[28px] leading-[38px] text-left tracking-[-0.02em] text-[#0A0D12] flex-none self-stretch flex-grow-0 md:w-full md:h-auto md:text-display-md lg:text-display-lg">{faq.title}</h2>
                <p className="w-[361px] h-[56px] font-['Montserrat'] font-normal text-[14px] leading-[28px] text-left text-[#0A0D12] flex-none self-stretch flex-grow-0 tracking-[-0.02em] md:w-full md:h-auto">{faq.subtitle}</p>
            </div>
            {/* main box 2: 01, 02, 03, 04, 05*/}
            <Accordion type="single" collapsible className="w-full md:max-w-2xl">
                {/* 01: span 01, q, a */}
                <AccordionItem value="item-1">
                    <div className="flex flex-col w-full">
                    <AccordionTrigger>
                        <span className="w-[23px] h-8 font-['Montserrat'] font-semibold text-[18px] leading-[32px] text-center tracking-[-0.03em] text-[#0A0D12] flex-none order-0 flex-grow-0">{faq.faqs[0].no}</span><h2 className="w-[282px] font-['Montserrat'] font-semibold text-[18px] leading-[32px] tracking-[-0.03em] text-[#0A0D12] flex-none order-0 self-stretch grow-0 md:w-auto md:flex-1">{faq.faqs[0].question}</h2>
                    </AccordionTrigger>
                    <AccordionContent>{faq.faqs[0].answer}</AccordionContent>
                    </div>
                </AccordionItem>
                {/* 02 */}
                <AccordionItem value="item-2">
                    <div className="flex flex-col w-full">
                    <AccordionTrigger>
                        <span className="w-[23px] h-8 font-['Montserrat'] font-semibold text-[18px] leading-[32px] text-center tracking-[-0.03em] text-[#0A0D12] flex-none order-0 flex-grow-0">{faq.faqs[1].no}</span><h2 className="w-[282px] font-['Montserrat'] font-semibold text-[18px] leading-[32px] tracking-[-0.03em] text-[#0A0D12] flex-none order-0 self-stretch grow-0 md:w-auto md:flex-1">{faq.faqs[1].question}</h2>
                    </AccordionTrigger>
                    <AccordionContent>{faq.faqs[1].answer}</AccordionContent>
                    </div>
                </AccordionItem>
                {/* 03 */}
                <AccordionItem value="item-3">
                    <div className="flex flex-col w-full">
                    <AccordionTrigger>
                        <span className="w-[23px] h-8 font-['Montserrat'] font-semibold text-[18px] leading-[32px] text-center tracking-[-0.03em] text-[#0A0D12] flex-none order-0 flex-grow-0">{faq.faqs[2].no}</span><h2 className="w-[282px] font-['Montserrat'] font-semibold text-[18px] leading-[32px] tracking-[-0.03em] text-[#0A0D12] flex-none order-0 self-stretch grow-0 md:w-auto md:flex-1">{faq.faqs[2].question}</h2>
                    </AccordionTrigger>
                    <AccordionContent>{faq.faqs[2].answer}</AccordionContent>
                    </div>
                </AccordionItem>
                {/* 04 */}
                <AccordionItem value="item-4">
                    <div className="flex flex-col w-full">
                    <AccordionTrigger>
                        <span className="w-[23px] h-8 font-['Montserrat'] font-semibold text-[18px] leading-[32px] text-center tracking-[-0.03em] text-[#0A0D12] flex-none order-0 flex-grow-0">{faq.faqs[3].no}</span><h2 className="w-[282px] font-['Montserrat'] font-semibold text-[18px] leading-[32px] tracking-[-0.03em] text-[#0A0D12] flex-none order-0 self-stretch grow-0 md:w-auto md:flex-1">{faq.faqs[3].question}</h2>
                    </AccordionTrigger>
                    <AccordionContent>{faq.faqs[3].answer}</AccordionContent>
                    </div>
                </AccordionItem>
                {/* 05 */}
                <AccordionItem value="item-5">
                    <div className="flex flex-col w-full">
                    <AccordionTrigger>
                        <span className="w-[23px] h-8 font-['Montserrat'] font-semibold text-[18px] leading-[32px] text-center tracking-[-0.03em] text-[#0A0D12] flex-none order-0 flex-grow-0">{faq.faqs[4].no}</span><h2 className="w-[282px] font-['Montserrat'] font-semibold text-[18px] leading-[32px] tracking-[-0.03em] text-[#0A0D12] flex-none order-0 self-stretch grow-0 md:w-auto md:flex-1">{faq.faqs[4].question}</h2>
                    </AccordionTrigger>
                    <AccordionContent>{faq.faqs[4].answer}</AccordionContent>
                    </div>
                </AccordionItem>
            </Accordion>
        </section>
    );
}