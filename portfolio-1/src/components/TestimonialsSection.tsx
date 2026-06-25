import { testimonials } from "@/data/testimonials";
import { Carousel, CarouselContent, CarouselItem,CarouselPrevious, CarouselNext } from "./ui/carousel";
import Image from "next/image"

export default function TestimonialsSection() {
    return(
        <section className="flex flex-col items-center py-[40px] px-[20px] gap-[24px] isolate w-[393px] h-[815.33px] bg-green-300 flex-none grow-0 left-1/2 -translate-x-1/2 relative">
            {/* main box 1 */}
            <div className="flex flex-col items-start p-0 gap-[8px] w-[353px] h-[140px] flex-none bg-amber-200 self-stretch grow-0 ">
                <h2 className="w-[353px] h-[76px] font-['Montserrat'] font-[700] text-[28px] leading-[38px] text-center tracking-[-0.02em] text-[#0A0D12] flex-none order-0 self-stretch grow-0">{testimonials.title}</h2>
                <p className="w-[353px] h-[56px] font-['Montserrat'] font-medium text-[14px] leading-[28px] text-center text-[#0A0D12] flex-none order-1 self-stretch grow-0 tracking-[-0.02em]">{testimonials.subtitle}</p>
            </div>
            {/* main box 2: card, carousel button. */}
            <div className="flex flex-col items-center p-0 gap-[24px] w-[353px] h-[571.33px] flex-none order-2 self-stretch grow-0 z-[2]">
                {/* testi card */}
                <div className="flex flex-col items-center p-[24px] gap-[32px] w-[353px] h-[478px] bg-[#B76080] rounded-[16px] flex-none order-0 self-stretch grow-0">
                    {/* box: rating, description */}
                    <div>
                        {/* rating */}
                        <div>
                            <p>{testimonials.testimonial[0].rating}</p>
                        </div>
                        {/* description */}
                        <div>
                            <p>{testimonials.testimonial[0].words}</p>
                        </div>
                    </div>
                    {/* customer info: image, name, role */}
                    <div>
                        <Image src="/testimonial/sarah_tan.svg" alt="Sarah Tan" width={64} height={64}></Image>
                        <h3>{testimonials.testimonial[0].customer}</h3>
                        <p>{testimonials.testimonial[0].role}</p>
                    </div>
                </div>
                {/* carousel button */}
            </div>
        </section>
    )
}