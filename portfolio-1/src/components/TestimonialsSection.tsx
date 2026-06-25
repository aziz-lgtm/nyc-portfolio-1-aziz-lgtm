import { testimonials } from "@/data/testimonials";
import { Carousel, CarouselContent, CarouselItem,CarouselPrevious, CarouselNext } from "./ui/carousel";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import Image from "next/image"

export default function TestimonialsSection() {
    return(
        <section>
            {/* main box 1 */}
            <div>
                <h2>{testimonials.title}</h2>
                <p>{testimonials.subtitle}</p>
            </div>
            {/* main box 2: card, carousel button. */}
            <div>
                {/* testi card */}
                <div>
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