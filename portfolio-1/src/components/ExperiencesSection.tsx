import { experiences } from "@/data/experiences";
import Image from "next/image";

export default function ExperiencesSection() {
    return(
        <section>
            {/* box main 1: h2, p */}
            <div>
                <h2>{experiences.title}</h2>
                <p>{experiences.subtitle}</p>
            </div>
            {/* line */}
            <br />
            {/* box main 2: job 1, line, job 2, line, job 3 */}
            <div>
                {/* job 1 */}
                <div></div>
                {/* line */}
                <br />
                {/* job 2 */}
                <div></div>
                {/* line */}
                <br />
                {/* job 3 */}
                <div></div>
            </div>
        </section>
    )
}