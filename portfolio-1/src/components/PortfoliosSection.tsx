import { portfolio } from "@/data/portfolio";
import Image from "next/image";

export default function PortfoliosSection() {
    return(
        <section>
            {/* main box 1: box 1, box 2 */}
            <div>
                {/* box 1: title & subtitle */}
                <div>
                    <h2></h2>
                    <p></p>
                </div>
                {/* box 2: the card 'more' */}
                <div></div>
            </div>
            {/* main box 2: portfolio 1, portfolio 2, portfolio 3 */}
            <div>
                {/* portfolio 1: box image, box info */}
                <div>
                    {/* box image: image & discount */}
                    <div>
                        <Image alt="Portfolio 1"  width="329" src="/portfolios/portfolio_1.png" height="329"></Image>
                        {/* discount */}
                        <div></div>
                    </div>
                    {/* box info: info & button */}
                    <div></div>
                </div>
                {/* portfolio 2: box image, box info */}
                <div>
                    {/* box image: image & discount */}
                    <div>
                        <Image alt="Portfolio 2"  width="329" src="/portfolios/portfolio_2.png" height="329"></Image>
                        {/* discoutn */}
                        <div></div>
                    </div>
                    {/* box info: info & button */}
                    <div></div>
                </div>
                {/* portfolio 3: box image, box info */}
                <div>
                    {/* box image: image & discount */}
                    <div>
                        <Image alt="Portfolio 3"  width="329" src="/portfolios/portfolio_3.png" height="329"></Image>
                        {/* discount */}
                        <div></div>
                    </div>
                    {/* box info: info & button */}
                    <div></div>
                </div>
            </div>
        </section>
    );
}