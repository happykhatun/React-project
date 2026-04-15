import ServiceCard from './ServiceCard';

import Icon1 from '../assets/Icon1.svg';
import Icon2 from '../assets/Icon2.svg';
import Icon3 from '../assets/Icon3.svg';


const Service = () => {
    return (
        <><section className='py-30'>
            <div className="container">
                <h2 className='font-bold text-[48px] text-[#29313D] text-center'>What We Do?</h2>
                <div className='flex justify-between gap-10 mt-25'>
                    <ServiceCard
                        icon={Icon1}
                        title="Digital products"
                        description="By applying behavioral science to customer experience, we design engaging digital products used by millions of people."
                    />

                    <ServiceCard
                        icon={Icon2}
                        title="Websites  Design"
                        description="From Slack to Facebook, we team up with marketing departments of large companies and startups to deliver award‑winning websites."
                    />
                    <ServiceCard
                        icon={Icon3}
                        title="Enterprise software "
                        description="We create human-centered enterprise software that has the polished, snappy feel of the best consumer apps."
                    />


                </div>
            </div>
        </section>
        </>
    )
}

export default Service
