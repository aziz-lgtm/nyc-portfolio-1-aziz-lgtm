import {footer} from "@/data/footer";
import {FaFacebook, FaTiktok, FaLinkedin, FaInstagram} from 'react-icons/fa';

export default function Footer() {
    return(
        <section className="flex flex-col justify-center items-start p-[32px_16px] gap-[24px] w-[393px] h-[152px] bg-[#0A0D12] rounded-none flex-none flex-grow-0 relative left-1/2 top-0 -translate-x-1/2 md:flex-row md:items-center md:justify-between md:w-full md:h-auto md:left-0 md:translate-x-0 md:max-w-360 md:mx-auto md:py-8 md:px-16">
            {/* main box: */}
            <div className="flex flex-row items-center p-0 gap-[12px] w-[208px] h-[40px] rounded-none flex-none grow-0 md:order-2">
                <div className="flex justify-center items-center w-[40px] h-[40px] border border-neutral-800 rounded-full flex-none flex-grow-0">
                    <FaFacebook className="text-white"></FaFacebook>
                </div>
                <div className="flex justify-center items-center w-[40px] h-[40px] border border-neutral-800 rounded-full flex-none flex-grow-0">
                    <FaInstagram className="text-white"></FaInstagram>
                </div>
                <div className="flex justify-center items-center w-[40px] h-[40px] border border-neutral-800 rounded-full flex-none flex-grow-0">
                    <FaLinkedin  className="text-white"></FaLinkedin>
                </div>
                <div className="flex justify-center items-center w-[40px] h-[40px] border border-neutral-800 rounded-full flex-none flex-grow-0">
                    <FaTiktok className="text-white"></FaTiktok>
                </div>
            </div>
            {/* main box: */}
            <div className="flex flex-row items-center p-0 gap-4 w-[361px] h-6 flex-none order-1 self-stretch grow-0 md:order-1 md:w-auto md:self-auto">
                <p className="w-[261px] h-6 font-['Montserrat'] font-normal text-xs leading-[24px] text-center text-[#FDFDFD] flex-none order-0 grow-0 md:w-auto md:text-left">{footer.copyRight}</p>
            </div>
        </section>
    );
}