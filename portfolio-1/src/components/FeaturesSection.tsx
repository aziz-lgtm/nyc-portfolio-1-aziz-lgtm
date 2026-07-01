import {features} from "@/data/features";

export default function FeaturesSection() {
    return (
    <section className="flex flex-col justify-center items-start p-[40px_16px] gap-[16px] w-[393px] h-[612px] bg-[#FFFFFF] flex-none order-[1] self-stretch grow-[0] left-1/2 -translate-x-1/2 relative bg-amber-200 md:flex-row md:flex-wrap md:items-start md:justify-center md:w-full md:h-auto md:left-0 md:translate-x-0 md:max-w-360 md:mx-auto md:gap-8 md:py-20 md:px-16">
        {/* box 1: box gear, box title &  description */}
        <div className="flex flex-col items-start p-[0px] gap-[12px] w-[361px] h-[156px] flex-none order-[0] self-stretch grow-[0] bg-red-200 md:items-center md:text-center md:w-full md:max-w-90 md:flex-1 md:h-auto">
            {/* box gear */}
            <div className="box-border flex flex-row justify-center items-center p-[2px_5px] gap-[8px] w-[48px] h-[48px] border-[1px] border-solid border-[#D5D7DA] rounded-[9999px] flex-none order-[0] grow-[0]"><span className="text-[24.381px]">{features.features[0].icon}</span></div>
            {/* box title & descrition*/}
            <div className="flex flex-col items-start p-[0px] gap-[8px] w-[361px] h-[96px] flex-none order-[1] self-stretch grow-[0] md:items-center md:w-full md:h-auto">
            <h2 className="w-[361px] h-[32px] font-['Montserrat'] not-italic font-[700] text-[18px] leading-[32px] text-[#0A0D12] flex-none order-[0] self-stretch grow-[0] bg-amber-50 md:w-full md:h-auto">{features.features[0].title}</h2>
            <p className="w-[361px] h-[56px] font-['Montserrat'] not-italic font-[400] text-[14px] leading-[28px] text-[#0A0D12] flex-none order-[1] self-stretch grow-[0] bg-amber-50 md:w-full md:h-auto">{features.features[0].description}</p>
            </div>
        </div>
        {/* box 2: box paint, box title, box description */}
        <div className="flex flex-col items-start p-[0px] gap-[12px] w-[361px] h-[156px] flex-none order-[0] self-stretch grow-[0] bg-red-200 md:items-center md:text-center md:w-full md:max-w-90 md:flex-1 md:h-auto">
            {/* box paint */}
            <div className="box-border flex flex-row justify-center items-center p-[2px_5px] gap-[8px] w-[48px] h-[48px] border-[1px] border-solid border-[#D5D7DA] rounded-[9999px] flex-none order-[0] grow-[0]"><span className="text-[24.381px]">{features.features[1].icon}</span></div>
            {/* box title & description*/}
            <div className="flex flex-col items-start p-[0px] gap-[8px] w-[361px] h-[96px] flex-none order-[1] self-stretch grow-[0] md:items-center md:w-full md:h-auto">
            <h2 className="w-[361px] h-[32px] font-['Montserrat'] not-italic font-[700] text-[18px] leading-[32px] text-[#0A0D12] flex-none order-[0] self-stretch grow-[0] bg-amber-50 md:w-full md:h-auto">{features.features[1].title}</h2>
            <p className="w-[361px] h-[56px] font-['Montserrat'] not-italic font-[400] text-[14px] leading-[28px] text-[#0A0D12] flex-none order-[1] self-stretch grow-[0] bg-amber-50 md:w-full md:h-auto">{features.features[1].description}</p></div>
        </div>
        {/* box 3: box phone, box title, box description */}
        <div className="flex flex-col items-start p-[0px] gap-[12px] w-[361px] h-[156px] flex-none order-[0] self-stretch grow-[0] bg-red-200 md:items-center md:text-center md:w-full md:max-w-90 md:flex-1 md:h-auto">
            {/* box phone */}
            <div className="box-border flex flex-row justify-center items-center p-[2px_5px] gap-[8px] w-[48px] h-[48px] border-[1px] border-solid border-[#D5D7DA] rounded-[9999px] flex-none order-[0] grow-[0]"><span className="text-[24.381px]">{features.features[2].icon}</span></div>
            {/* box title & description */}
            <div className="flex flex-col items-start p-[0px] gap-[8px] w-[361px] h-[96px] flex-none order-[1] self-stretch grow-[0] md:items-center md:w-full md:h-auto">
            <h2 className="w-[361px] h-[32px] font-['Montserrat'] not-italic font-[700] text-[18px] leading-[32px] text-[#0A0D12] flex-none order-[0] self-stretch grow-[0] bg-amber-50 md:w-full md:h-auto">{features.features[2].title}</h2>
            <p className="w-[361px] h-[56px] font-['Montserrat'] not-italic font-[400] text-[14px] leading-[28px] text-[#0A0D12] flex-none order-[1] self-stretch grow-[0] bg-amber-50 md:w-full md:h-auto">{features.features[2].description}</p></div>
        </div>
    </section>
    );
}