import logo1 from '../assets/logo1.svg';
import logo2 from '../assets/logo2.svg';
import logo3 from '../assets/logo3.svg';
import logo4 from '../assets/logo4.svg';
import logo5 from '../assets/logo5.svg';
import logo6 from '../assets/logo6.svg';

const Logos = () => {
    const logo = [logo1, logo2, logo3, logo4, logo5, logo6]
    return (
        <>
            <section className='py-30'>
                <div className="container">
                    <div>
                        <h2 className='font-bold text-[42px] text-[#29313D] text-center leading-[140%]'>Trusted by top global companies <span className='block'>And orginizations</span></h2>
                    </div>
                    <div className='flex justify-between mt-15'>
                        {
                            logo.map((logo, index) => (
                                <div key={index}  className='bg-[#FDF9F8] py-8 px-12 shadow '  >
                                    <img src={logo} alt="" />
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>

        </>
    )
}

export default Logos
