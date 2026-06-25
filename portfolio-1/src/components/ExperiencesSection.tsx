import { experiences } from "@/data/experiences";
import Image from "next/image";


export default function ExperiencesSection() {
    return(
        <section className="flex flex-col items-start p-[40px_20px] gap-6 w-[393px] h-[1331px] bg-neutral-950 left-1/2 -translate-x-1/2 relative">
            {/* box main 1: h2, p */}
            <div className="flex flex-col items-start gap-2 w-[353px] h-[140px] flex-none order-0 self-stretch flex-grow-0">
                <h2 className="w-[353px] h-[76px] font-['Montserrat'] font-bold text-[28px] leading-[38px] tracking-[-0.02em] text-neutral-25 flex-none order-0 self-stretch flex-grow-0">{experiences.title[0].title1} 
                    <span className="text-secondary-100">{experiences.title[0].span1}</span> 
                    <span className="text-neutral-25">{experiences.title[0].span2}</span> 
                </h2>
                <p className="w-[353px] h-[56px] font-['Montserrat'] font-semibold text-[14px] leading-[28px] text-[#FDFDFD] flex-none order-1 self-stretch flex-grow-0">{experiences.subtitle}</p>
            </div>
            {/* line */}
            <hr className="w-[353px] h-0 border border-[#252B37] flex-none  self-stretch flex-grow-0"/>
            {/* box main 2: job 1, line, job 2, line, job 3 */}
            <div className="flex flex-col items-start gap-4 w-[353px] h-[1063px] flex-none order-2 self-stretch flex-grow-0">
                {/* job 1 */}
                <div className="flex flex-col items-start gap-4 w-[353px] h-[333px] bg-[#0A0D12] flex-none order-0 self-stretch flex-grow-0">
                    {/* year & role */}
                    <div className="flex flex-col items-start gap-1 w-[353px] h-[62px] flex-none order-0 self-stretch flex-grow-0 ">
                    <p className="w-[353px] h-[28px] font-['Montserrat'] font-medium text-[14px] leading-[28px] text-[#A4A7AE] flex-none order-0 self-stretch flex-grow-0">{experiences.experiences[0].year}</p>
                    <h3 className="w-[353px] h-[30px] font-['Montserrat'] font-bold text-[16px] leading-[30px] tracking-[-0.02em] text-[#FDFDFD] flex-none order-1 self-stretch flex-grow-0">{experiences.experiences[0].role}</h3>
                    </div>
                    {/* logo */}
                    <div className="box-border flex flex-col items-start p-[5.07px] gap-[5.07px] w-[121.71px] h-[71px] border-[0.63px] border-[#252B37] rounded-[16px] flex-none order-1 flex-grow-0">
                        {/* thin border */}
                        <div className="box-border flex flex-col items-start p-[15.21px] gap-[5.07px] w-[111.57px] h-[60.86px] bg-[#0A0D12] border-[0.63px] border-[#252B37] rounded-[10.14px] flex-none order-0 self-stretch flex-grow-0">
                                {/* logo vector */}
                                <Image alt="Airbnb" src="/experiences/airbnb.svg" height={81.14} width={31.43} className="w-[81.14px] h-[30.43px] flex-none order-0 flex-grow-0"></Image>
                        </div>
                    </div>
                    {/* action */}
                    <p className="w-[353px] h-[168px] font-['Montserrat'] font-normal text-[14px] leading-[28px] text-[#A4A7AE] flex-none order-2 self-stretch flex-grow-0">{experiences.experiences[0].action}</p>
                </div>
                {/* line */}
                <hr className="w-[353px] h-0 border border-[#252B37] flex-none self-stretch " />
                {/* job 2 */}
                <div className="flex flex-col items-start gap-4 w-[353px] h-[333px] bg-[#0A0D12] flex-none order-0 self-stretch flex-grow-0">
                    {/* year & role */}
                    <div className="flex flex-col items-start gap-1 w-[353px] h-[62px] flex-none order-0 self-stretch flex-grow-0 ">
                    <p className="w-[353px] h-[28px] font-['Montserrat'] font-medium text-[14px] leading-[28px] text-[#A4A7AE] flex-none order-0 self-stretch flex-grow-0">{experiences.experiences[1].year}</p>
                    <h3 className="w-[353px] h-[30px] font-['Montserrat'] font-bold text-[16px] leading-[30px] tracking-[-0.02em] text-[#FDFDFD] flex-none order-1 self-stretch flex-grow-0">{experiences.experiences[1].role}</h3>
                    </div>
                    {/* logo */}
                    <div className="box-border flex flex-col items-start p-[5.07px] gap-[5.07px] w-[121.71px] h-[71px] border-[0.63px] border-[#252B37] rounded-[16px] flex-none order-1 flex-grow-0">
                        {/* thin border */}
                        <div className="box-border flex flex-col items-start p-[15.21px] gap-[5.07px] w-[111.57px] h-[60.86px] bg-[#0A0D12] border-[0.63px] border-[#252B37] rounded-[10.14px] flex-none order-0 self-stretch flex-grow-0">
                                {/* logo vector */}
                                <Image alt="Airtasker" src="/experiences/airtasker.svg" height={81.14} width={31.43} className="w-[81.14px] h-[30.43px] flex-none order-0 flex-grow-0"></Image>
                        </div>
                    </div>
                    {/* action */}
                    <p className="w-[353px] h-[168px] font-['Montserrat'] font-normal text-[14px] leading-[28px] text-[#A4A7AE] flex-none order-2 self-stretch flex-grow-0">{experiences.experiences[1].action}</p>
                </div>
                {/* line */}
                <hr className="w-[353px] h-0 border border-[#252B37] flex-none self-stretch" />
                {/* job 3 */}
                <div className="flex flex-col items-start gap-4 w-[353px] h-[333px] bg-[#0A0D12] flex-none order-0 self-stretch flex-grow-0">
                    {/* year & role */}
                    <div className="flex flex-col items-start gap-1 w-[353px] h-[62px] flex-none order-0 self-stretch flex-grow-0 ">
                    <p className="w-[353px] h-[28px] font-['Montserrat'] font-medium text-[14px] leading-[28px] text-[#A4A7AE] flex-none order-0 self-stretch flex-grow-0">{experiences.experiences[2].year}</p>
                    <h3 className="w-[353px] h-[30px] font-['Montserrat'] font-bold text-[16px] leading-[30px] tracking-[-0.02em] text-[#FDFDFD] flex-none order-1 self-stretch flex-grow-0">{experiences.experiences[2].role}</h3>
                    </div>
                    {/* logo */}
                    <div className="box-border flex flex-col items-start p-[5.07px] gap-[5.07px] w-[121.71px] h-[71px] border-[0.63px] border-[#252B37] rounded-[16px] flex-none order-1 flex-grow-0">
                        {/* thin border */}
                        <div className="box-border flex flex-col items-start p-[15.21px] gap-[5.07px] w-[111.57px] h-[60.86px] bg-[#0A0D12] border-[0.63px] border-[#252B37] rounded-[10.14px] flex-none order-0 self-stretch flex-grow-0">
                                {/* logo vector */}
                                <Image alt="Slack" src="/experiences/slack.svg" height={81.14} width={31.43} className="w-[81.14px] h-[30.43px] flex-none order-0 flex-grow-0"></Image>
                        </div>
                    </div>
                    {/* action */}
                    <p className="w-[353px] h-[168px] font-['Montserrat'] font-normal text-[14px] leading-[28px] text-[#A4A7AE] flex-none order-2 self-stretch flex-grow-0">{experiences.experiences[2].action}</p>
                </div>
            </div>
        </section>
    )
}