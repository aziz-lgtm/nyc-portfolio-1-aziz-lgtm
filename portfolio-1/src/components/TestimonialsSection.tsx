import { testimonials } from "@/data/testimonials";
import { Carousel, CarouselContent, CarouselItem,CarouselPrevious, CarouselNext } from "./ui/carousel";
import Image from "next/image"

export default function TestimonialsSection() {
    return(
        <section className="flex flex-col items-center py-[40px] px-[20px] gap-[24px] isolate w-[393px] h-[815.33px] bg-green-300 flex-none grow-0 left-1/2 -translate-x-1/2 relative">
            {/* main box 1 */}
            <div className="flex flex-col items-start p-0 gap-[8px] w-[353px] h-[140px] flex-none bg-amber-200 self-stretch grow-0 z-20">
                <h2 className="w-[353px] h-[76px] font-['Montserrat'] font-[700] text-[28px] leading-[38px] text-center tracking-[-0.02em] text-[#0A0D12] flex-none order-0 self-stretch grow-0">{testimonials.title}</h2>
                <p className="w-[353px] h-[56px] font-['Montserrat'] font-medium text-[14px] leading-[28px] text-center text-[#0A0D12] flex-none order-1 self-stretch grow-0 tracking-[-0.02em]">{testimonials.subtitle}</p>
            </div>
            {/* main box 2: card, carousel button. */}
            <Carousel className="flex flex-col items-center p-0 gap-[24px] w-[353px] h-[571.33px] flex-none order-2 self-stretch grow-0 z-[2]">
                {/* testi card */}
                <CarouselContent className=" h-[500px] ">
                <CarouselItem>
                <div className="flex flex-col items-center p-[24px] gap-[32px] w-[353px] h-[478px] bg-primary-300 rounded-[16px] flex-none order-0 self-stretch grow-0">
                    {/* box: rating, description */}
                    <div className="flex flex-col items-center gap-4 w-[305px] h-[264px] flex-none order-0 self-stretch grow-0 ">
                        {/* rating */}
                            <p className="flex flex-row items-center gap-1 flex-none order-0 grow-0">{testimonials.testimonial[0].rating}</p>
                        {/* description */}
                            <p className="w-[305px] h-[224px] font-['Montserrat'] font-semibold text-[18px] leading-[32px] text-center tracking-[-0.03em] text-[#FDFDFD] flex-none order-1 self-stretch grow-0">{testimonials.testimonial[0].words}</p>
                    </div>
                    {/* customer info: image, box name & role */}
                    <div className="flex flex-col items-center gap-2 w-[305px] h-[134px] flex-none order-1 self-stretch grow-0">
                        <Image src="/testimonial/sarah_tan.svg" alt="Sarah Tan" width={64} height={64}></Image>
                        {/* box name & role */}
                        <div className="flex flex-col items-center p-0 w-[305px] h-[62px] flex-none order-1 self-stretch grow-0">
                        <h3 className="w-[305px] h-[32px] font-['Montserrat'] font-semibold text-[18px] leading-[32px] text-center tracking-[-0.03em] text-[#FDFDFD] flex-none order-0 self-stretch grow-0">{testimonials.testimonial[0].customer}</h3>
                        <p className="w-[305px] h-[30px] font-['Montserrat'] font-medium text-[16px] leading-[30px] text-center tracking-[-0.03em] text-[#FDFDFD] flex-none order-1 self-stretch grow-0">{testimonials.testimonial[0].role}</p>
                        </div>
                    </div>
                </div>
                <div className="flex mx-auto flex-col items-center p-[24px] gap-[32px] w-[338px] h-[6px] bg-[#D4A0B3] rounded-[16px] flex-none  self-stretch grow-0 relative -z-10 -mt-9.5"></div>
                <div className="flex mx-auto flex-col items-center p-[24px] gap-[32px] w-[308px] h-[6px] bg-primary-300/20 rounded-[16px] flex-none  self-stretch grow-0 relative -z-20 -mt-9.5"></div>
                </CarouselItem>
                </CarouselContent>
                {/* carousel button */}
                <div className="flex flex-row justify-center items-center w-[102.67px] h-[45.33px] gap-3 mt-auto mb-0! bg-primary-200">
                    <CarouselPrevious className="static inset-auto my-0 w-[45.33px] h-[45.33px] active:bg-neutral-300 disabled:bg-neutral-300"/>
                    <CarouselNext className="static inset-auto my-0 w-[45.33px] h-[45.33px]"/>
                </div>
            </Carousel>
        </section>
    );
}