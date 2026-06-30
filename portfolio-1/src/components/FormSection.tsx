import { form } from "@/data/form";
import Image from "next/image"
import { Button } from "./ui/button";

export default function FormSection() {
    return (
        <section className="flex flex-col items-center p-10 px-4 gap-6 w-[393px] h-[966.46px] flex-none flex-grow-0 left-1/2 -translate-x-1/2 relative bg-primary-200">
            {/* main box 1: box 1, box 2 */}
            <div className="flex flex-col justify-center items-start p-0 gap-6 w-[361px] h-[236px] flex-none self-stretch flex-grow-0">
                {/* box 1: title, subtitle */}
                <div className="flex flex-col items-start p-0 gap-2 w-[361px] h-[102px] flex-none order-0 self-stretch flex-grow-0">
                    <h2 className="w-[361px] h-[38px] font-['Montserrat'] font-bold text-[28px] leading-[38px] tracking-[-0.02em] text-[#0A0D12] flex-none self-stretch flex-grow-0">{form.title}</h2>
                    <p className="w-[361px] h-[56px] font-['Montserrat'] font-medium text-[14px] leading-[28px] text-[#0A0D12] flex-none self-stretch flex-grow-0">{form.subtitle}</p>
                </div>
                {/* box 2: portfolio rows */}
                <div className="flex flex-row items-start p-0 gap-[15.49px] w-[361px] h-[110px] flex-none self-stretch flex-grow-0">
                    <Image alt="Portfolio 1" src="/portfolios/portfolio_1.png" width={110} height={110}></Image>
                    <Image alt="Portfolio 2" src="/portfolios/portfolio_2.png" width={110} height={110}></Image>
                    <Image alt="Portfolio 3" src="/portfolios/portfolio_3.png" width={110} height={110}></Image>
                </div>
            </div>
            {/* main box 2: orang ngelamun, box form */}
            <div className="w-[361px] h-[626.45px] flex-none self-stretch grow-0 bg-amber-200">
                {/* orang ngelamun */}
                <Image alt="Orang Ngelamun Cari Kerja" src="/form/ngelamun.svg" width={192} height={170.45} className="relative w-[192px] h-[170.45px] left-[84.5px] top-[0px] z-10"></Image>
                {/* box form: form */}
                <div className="flex flex-col -m-3 items-start p-4 relative w-[361px] h-[456px] -ml-0 bg-white shadow-[0px_0px_28px_rgba(197,197,197,0.25)] z-1">
                    {/* form: name, email, message, button */}
                    <div className="flex flex-col items-start p-0 gap-5 flex-none self-stretch grow-0 w-[329px] h-[424px] bg-amber-200">
                        {/* name */}
                        <div className="flex flex-col items-start p-0 gap-[2px] flex-none self-stretch grow-0 w-[329px] h-[78px]">
                            <label htmlFor="name" className="w-[329px] h-[28px] font-['Montserrat'] font-bold text-[14px] leading-[28px] text-[#0A0D12] flex-none self-stretch flex-grow-0">{form.form[0].name}</label>
                            <input type="text" placeholder="Enter your name" id="name" name="nama" required className="box-border flex flex-row justify-center items-center p-[8px_16px] gap-[8px] w-[329px] h-[48px] border-[1px] border-solid border-[#D5D7DA] rounded-[12px] flex-none order-1 self-stretch flex-grow-0 placeholder:font-['Montserrat'] font-medium text-[14px] leading-[28px] text-[#535862] flex-none flex-grow"/>
                        </div>
                        {/* email */}
                        <div className="flex flex-col items-start p-0 gap-[2px] flex-none self-stretch grow-0 w-[329px] h-[78px]">
                            <label htmlFor="email" className="w-[329px] h-[28px] font-['Montserrat'] font-bold text-[14px] leading-[28px] text-[#0A0D12] flex-none self-stretch flex-grow-0">{form.form[0].email}</label>
                            <input type="email" placeholder="Enter your email" id="email" name="email" required className="box-border flex flex-row justify-center items-center p-[8px_16px] gap-[8px] w-[329px] h-[48px] border-[1px] border-solid border-[#D5D7DA] rounded-[12px] flex-none order-1 self-stretch flex-grow-0 placeholder:font-['Montserrat'] font-medium text-[14px] leading-[28px] text-[#535862] flex-none flex-grow"/>
                        </div>
                        {/* message */}
                        <div className="">
                            <label htmlFor="issue" className="w-[329px] h-[28px] font-['Montserrat'] font-bold text-[14px] leading-[28px] text-[#0A0D12] flex-none self-stretch flex-grow-0">{form.form[0].message}</label>
                            <textarea placeholder="Enter your message" id="issue" name="issue" className="box-border flex flex-row items-start p-[8px_16px] gap-[8px] w-[329px] h-[134px] border border-[#D5D7DA] rounded-[12px] flex-none order-1 self-stretch flex-grow-0"></textarea>
                        </div>
                        {/* button */}
                        <Button className="flex flex-row justify-center items-center p-[8px] gap-[4px] w-[329px] h-[44px] bg-primary-300 font-bold! hover:bg-primary-200 rounded-full flex-none self-stretch flex-grow-0 font-['Montserrat']">{form.form[0].button}</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}