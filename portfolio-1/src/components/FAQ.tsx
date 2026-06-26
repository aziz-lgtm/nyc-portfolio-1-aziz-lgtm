import {faq} from "@/data/faq"
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "./ui/accordion";

export default function FAQ() {
    return(
        <section className="flex flex-col items-center p-[40px_16px] gap-6 w-[393px] h-[834px] bg-[#F5F5F5] flex-none order-7 flex-grow-0 left-1/2 -translate-x-1/2 relative">
            {/* main box 1: title, subtitle */}
            <div className="flex flex-col items-start p-0 gap-2 w-[361px] h-[102px] flex-none self-stretch flex-grow-0 bg-amber-300">
                <h2 className="w-[361px] h-[38px] font-['Montserrat'] font-bold text-[28px] leading-[38px] text-center tracking-[-0.02em] text-[#0A0D12] flex-none self-stretch flex-grow-0">{faq.title}</h2>
                <p className="w-[361px] h-[56px] font-['Montserrat'] font-normal text-[14px] leading-[28px] text-center text-[#0A0D12] flex-none self-stretch flex-grow-0 tracking-[-0.02em]">{faq.subtitle}</p>
            </div>
            {/* main box 2: 01, 02, 03, 04, 05*/}
            <Accordion type="single" collapsible className="flex flex-col items-start p-0 gap-5 w-[361px] h-[628px] flex-none self-stretch flex-grow-0">
                {/* 01: span 01, q, a */}
                <AccordionItem value="item-1" className="">
                    <span className="">{faq.faqs[0].no}</span>
                    <div>
                    <AccordionTrigger className="">{faq.faqs[0].question}</AccordionTrigger>
                    <AccordionContent className="">{faq.faqs[0].answer}</AccordionContent>
                    </div>
                </AccordionItem>
                {/* 02 */}
                <AccordionItem value="item-2">
                    <span>{faq.faqs[1].no}</span>
                    <div>
                    <AccordionTrigger>{faq.faqs[1].question}</AccordionTrigger>
                    <AccordionContent>{faq.faqs[1].answer}</AccordionContent>
                    </div>
                </AccordionItem>
                {/* 03 */}
                <AccordionItem value="item-3">
                    <span>{faq.faqs[2].no}</span>
                    <div>
                    <AccordionTrigger>{faq.faqs[2].question}</AccordionTrigger>
                    <AccordionContent>{faq.faqs[2].answer}</AccordionContent>
                    </div>
                </AccordionItem>
                {/* 04 */}
                <AccordionItem value="item-4">
                    <span>{faq.faqs[3].no}</span>
                    <div>
                    <AccordionTrigger>{faq.faqs[3].question}</AccordionTrigger>
                    <AccordionContent>{faq.faqs[3].answer}</AccordionContent>
                    </div>
                </AccordionItem>
                {/* 05 */}
                <AccordionItem value="item-5">
                    <span>{faq.faqs[4].no}</span>
                    <div>
                    <AccordionTrigger>{faq.faqs[4].question}</AccordionTrigger>
                    <AccordionContent>{faq.faqs[4].answer}</AccordionContent>
                    </div>
                </AccordionItem>
            </Accordion>
        </section>
    );
}