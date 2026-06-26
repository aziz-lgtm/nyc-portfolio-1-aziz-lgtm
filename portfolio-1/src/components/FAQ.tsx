import {faq} from "@/data/faq"
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "./ui/accordion";

export default function FAQ() {
    return(
        <section>
            {/* main box 1: title, subtitle */}
            <div>
                <h2>{faq.title}</h2>
                <p>{faq.subtitle}</p>
            </div>
            {/* main box 2: 01, 02, 03, 04, 05*/}
            <div>
                {/* 01 */}
                <div></div>
                <hr />
                {/* 02 */}
                <div></div>
                <hr />
                {/* 03 */}
                <div></div>
                <hr />
                {/* 04 */}
                <div></div>
                <hr />
                {/* 05 */}
                <div></div>
                <hr />
            </div>
        </section>
    );
}