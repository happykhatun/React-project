import Right_arrow from '../assets/Right_arrow.svg';
import Bannar_img from '../assets/Bannar_img.png';

const Bannar = () => {
    return (
        <>
            <section className='py-30 bg-[#FBF3F0] relative'>
                <p className='font-bold text-[32px] text-gray-300 absolute top-60 -left-8 -rotate-90'>About us</p>
                <div className="container">
                    <div className='flex text-[#29313D]'>
                        <span className='flex items-center gap-2 text-[24px] font-normal'>Home <span><img src={Right_arrow} alt="" /></span></span>
                        <span className='text-[24px] font-normal'>About us</span>
                    </div>
                    <div className='flex justify-between  text-[#29313D] mt-5'>
                        <h1 className='text-[64px] font-bold leading-[130%]'>Know More About Innovate</h1>
                        <div className='border border-b-[#29313D] '></div>
                        <div>
                            <p className='font-normal text-[18px]  capitalize leading-loose w-125 pl-6'>With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect, represent and dominate your market.</p>
                        </div>
                    </div>
                </div>
                <div className='absolute right-0 bottom-0'><img src={Bannar_img} alt="" /></div>
            </section>

        </>
    )
}

export default Bannar
