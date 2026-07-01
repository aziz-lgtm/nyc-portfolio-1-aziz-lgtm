import {quote} from "@/data/quote";

export default function QuoteSection () {
    return (
        <section className="flex flex-row justify-center items-center p-[40px_16px] gap-2 w-[393px] h-[270px] flex-none order-0 self-stretch flex-grow-0 left-1/2 -translate-x-1/2 relative -mt-0.1 bg-white z-10 md:w-full md:h-auto md:left-0 md:translate-x-0 md:py-16 md:px-10 lg:py-20 lg:px-16">
            <p className="w-[361px] h-[190px] font-['Montserrat'] font-medium text-[28px] leading-[38px] text-center tracking-[-0.03em] text-[#0A0D12] flex-none order-0 flex-grow md:w-full md:h-auto md:max-w-3xl lg:max-w-4xl md:text-display-md lg:text-display-lg">{quote.quote1} <span className="text-primary-300">{quote.quote2}</span>, <span className="text-primary-300">{quote.quote3}</span> {quote.quote4}</p>
        </section>
    );
}