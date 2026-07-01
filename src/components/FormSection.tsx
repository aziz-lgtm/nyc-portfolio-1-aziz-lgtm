"use client"

import { useState } from "react";
import { form } from "@/data/form";
import Image from "next/image"
import { Button } from "./ui/button";
import { MailCheck, MailX } from "lucide-react";

export default function FormSection() {
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (!navigator.onLine) throw new Error("offline");
            await new Promise((resolve) => setTimeout(resolve, 500));
            setStatus("success");
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="flex flex-col items-center p-10 px-4 gap-6 w-[393px] h-[966.46px] flex-none flex-grow-0 left-1/2 -translate-x-1/2 relative bg-primary-200 md:flex-row md:items-start md:justify-center md:gap-16 md:w-full md:h-auto md:left-0 md:translate-x-0 md:max-w-360 md:mx-auto md:py-20 md:px-16">
            {/* main box 1: box 1, box 2 */}
            <div className="flex flex-col justify-center items-start p-0 gap-6 w-[361px] h-[236px] flex-none self-stretch flex-grow-0 md:w-auto md:h-auto md:flex-1 md:max-w-md">
                {/* box 1: title, subtitle */}
                <div className="flex flex-col items-start p-0 gap-2 w-[361px] h-[102px] flex-none order-0 self-stretch flex-grow-0 md:w-full md:h-auto">
                    <h2 className="w-[361px] h-[38px] font-['Montserrat'] font-bold text-[28px] leading-[38px] tracking-[-0.02em] text-[#0A0D12] flex-none self-stretch flex-grow-0 md:w-full md:h-auto md:text-display-md lg:text-display-lg">{form.title}</h2>
                    <p className="w-[361px] h-[56px] font-['Montserrat'] font-medium text-[14px] leading-[28px] text-[#0A0D12] flex-none self-stretch flex-grow-0 md:w-full md:h-auto">{form.subtitle}</p>
                </div>
                {/* box 2: portfolio rows */}
                <div className="flex flex-row items-start p-0 gap-[15.49px] w-[361px] h-[110px] flex-none self-stretch flex-grow-0 md:w-full md:h-auto">
                    <Image alt="Portfolio 1" src="/portfolios/portfolio_1.png" width={110} height={110}></Image>
                    <Image alt="Portfolio 2" src="/portfolios/portfolio_2.png" width={110} height={110}></Image>
                    <Image alt="Portfolio 3" src="/portfolios/portfolio_3.png" width={110} height={110}></Image>
                </div>
            </div>
            {/* main box 2: orang ngelamun, box form */}
            <div className="w-[361px] h-[626.45px] flex-none self-stretch grow-0 bg-amber-200 md:w-auto md:h-auto md:flex-1 md:max-w-md">
                {/* orang ngelamun */}
                <Image alt="Orang Ngelamun Cari Kerja" src="/form/ngelamun.svg" width={192} height={170.45} className="relative w-[192px] h-[170.45px] left-[84.5px] top-[0px] z-10"></Image>
                {/* box form: form */}
                <div className="flex flex-col -m-3 items-start p-4 relative w-[361px] h-[456px] -ml-0 bg-white shadow-[0px_0px_28px_rgba(197,197,197,0.25)] z-1 md:w-full md:h-auto">
                    {/* form: name, email, message, button */}
                    <form onSubmit={handleSubmit} className="flex flex-col items-start p-0 gap-5 flex-none self-stretch grow-0 w-[329px] h-[424px] bg-amber-200 md:w-full md:h-auto">
                        {/* name */}
                        <div className="flex flex-col items-start p-0 gap-[2px] flex-none self-stretch grow-0 w-[329px] h-[78px] md:w-full">
                            <label htmlFor="name" className="w-[329px] h-[28px] font-['Montserrat'] font-bold text-[14px] leading-[28px] text-[#0A0D12] flex-none self-stretch flex-grow-0 md:w-full">{form.form[0].name}</label>
                            <input type="text" placeholder="Enter your name" id="name" name="nama" required className="box-border flex flex-row justify-center items-center p-[8px_16px] gap-[8px] w-[329px] h-[48px] border-[1px] border-solid border-[#D5D7DA] rounded-[12px] flex-none order-1 self-stretch flex-grow-0 placeholder:font-['Montserrat'] font-medium text-[14px] leading-[28px] text-[#535862] flex-none flex-grow md:w-full"/>
                        </div>
                        {/* email */}
                        <div className="flex flex-col items-start p-0 gap-[2px] flex-none self-stretch grow-0 w-[329px] h-[78px] md:w-full">
                            <label htmlFor="email" className="w-[329px] h-[28px] font-['Montserrat'] font-bold text-[14px] leading-[28px] text-[#0A0D12] flex-none self-stretch flex-grow-0 md:w-full">{form.form[0].email}</label>
                            <input type="email" placeholder="Enter your email" id="email" name="email" required className="box-border flex flex-row justify-center items-center p-[8px_16px] gap-[8px] w-[329px] h-[48px] border-[1px] border-solid border-[#D5D7DA] rounded-[12px] flex-none order-1 self-stretch flex-grow-0 placeholder:font-['Montserrat'] font-medium text-[14px] leading-[28px] text-[#535862] flex-none flex-grow md:w-full"/>
                        </div>
                        {/* message */}
                        <div className="md:w-full">
                            <label htmlFor="issue" className="w-[329px] h-[28px] font-['Montserrat'] font-bold text-[14px] leading-[28px] text-[#0A0D12] flex-none self-stretch flex-grow-0 md:w-full">{form.form[0].message}</label>
                            <textarea placeholder="Enter your message" id="issue" name="issue" required className="box-border flex flex-row items-start p-[8px_16px] gap-[8px] w-[329px] h-[134px] border border-[#D5D7DA] rounded-[12px] flex-none order-1 self-stretch flex-grow-0 md:w-full"></textarea>
                        </div>
                        {/* button */}
                        <Button type="submit" className="flex flex-row justify-center items-center p-[8px] gap-[4px] w-[329px] h-[44px] bg-primary-300 font-bold! hover:bg-primary-200 rounded-full flex-none self-stretch flex-grow-0 font-['Montserrat'] md:w-full">{form.form[0].button}</Button>
                    </form>
                </div>
            </div>

            {/* success / failure modal */}
            {status !== "idle" && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                    <div className="flex flex-col items-center gap-4 w-full max-w-xs rounded-2xl bg-white p-8 text-center shadow-xl">
                        {status === "success" ? (
                            <>
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-100">
                                    <MailCheck className="w-8 h-8 text-primary-300" />
                                </div>
                                <h3 className="font-['Montserrat'] font-bold text-lg text-neutral-950">Get Your Message!</h3>
                                <p className="font-['Montserrat'] text-sm text-neutral-600">Thanks for reaching out — I appreciate you taking the time. I’ll be in touch soon.</p>
                                <a href="#home" onClick={() => setStatus("idle")} className="w-full">
                                    <Button className="w-full bg-primary-300 hover:bg-primary-200 rounded-full font-['Montserrat']">Back to Home</Button>
                                </a>
                            </>
                        ) : (
                            <>
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100">
                                    <MailX className="w-8 h-8 text-red-500" />
                                </div>
                                <h3 className="font-['Montserrat'] font-bold text-lg text-neutral-950">Message Failed to Send</h3>
                                <p className="font-['Montserrat'] text-sm text-neutral-600">Sorry about that. Please check your connection and try again.</p>
                                <Button onClick={() => setStatus("idle")} className="w-full bg-primary-300 hover:bg-primary-200 rounded-full font-['Montserrat']">Try Again</Button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}