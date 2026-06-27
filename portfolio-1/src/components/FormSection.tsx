import { form } from "@/data/form";
import Image from "next/image"
import { Button } from "./ui/button";

export default function FormSection() {
    return (
        <section className="flex flex-col items-center p-10 px-4 gap-6 w-[393px] h-[966.46px] flex-none order-8 flex-grow-0 left-1/2 -translate-x-1/2 relative">
            {/* main box 1: box 1, box 2 */}
            <div>
                {/* box 1: title, subtitle */}
                <div>
                    <h2></h2>
                    <p></p>
                </div>
                {/* box 2: portfolio rows */}
                <div>
                    <Image alt="Portfolio 1" src="/portfolios/portfolio_1.png" width={110} height={110}></Image>
                    <Image alt="Portfolio 2" src="/portfolios/portfolio_2.png" width={110} height={110}></Image>
                    <Image alt="Portfolio 3" src="/portfolios/portfolio_3.png" width={110} height={110}></Image>
                </div>
            </div>
            {/* main box 2: orang ngelamun, box form */}
            <div>
                {/* orang ngelamun */}
                <Image alt="Orang Ngelamun Cari Kerja" src="/form/ngelamun.svg" width={192} height={170.45}></Image>
                {/* box form: form */}
                <div>
                    {/* form: name, email, message, button */}
                    <div>
                        {/* name */}
                        <div className=""><input type="text" placeholder="Enter your name" id="name" name="nama" required/></div>
                        {/* email */}
                        <div className=""><input type="email" placeholder="Enter your email" id="email" name="email" required/></div>
                        {/* message */}
                        <div className=""><textarea placeholder="Enter your message" id="issue" name="issue"></textarea></div>
                        {/* button */}
                        <Button></Button>
                    </div>
                </div>
            </div>
        </section>
    );
}