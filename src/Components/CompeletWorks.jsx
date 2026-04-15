import React from 'react'
import Frame from '../assets/Frame.png';

const CompeletWorks = () => {
    return (
        <>
            <section className='py-30 bg-[#FDF9F8] relative'>
                <div className="container">
                    <div className='grid md:grid-cols-[3fr_4fr] gap-0 '>
                        <div className='flex flex-col gap-7'>

                        <div className=' flex flex-wrap gap-7'>
                            <div className='w-42 h-37 shadow-xl py-7 px-4 text-[#29313D] felx flex-col justify-center text-center bg-white'>
                                <h5 className='font-semibold text-[40px] '>19+</h5>
                                <p className='text-[18px] font-normal'>Total top service</p>
                            </div>
                             <div className='w-42 h-37 shadow-xl py-7 px-4 text-[#29313D] felx flex-col justify-center text-center bg-white'>
                                <h5 className='font-semibold text-[40px] '>27+</h5>
                                <p className='text-[18px] font-normal'>Total top service</p>
                            </div>
                        </div>
                        <div  className='flex flex-wrap gap-7'>

                             <div className='w-42 h-37 shadow-xl py-7 px-4 text-[#29313D] felx flex-col justify-center text-center bg-white'>
                                <h5 className='font-semibold text-[40px] '>98%</h5>
                                <p className='text-[18px] font-normal'>Total top service</p>
                            </div>
                             <div className='w-42 h-37 shadow-xl py-7 px-4 text-[#29313D] felx flex-col justify-center text-center bg-white'>
                                <h5 className='font-semibold text-[40px] '>1,458</h5>
                                <p className='text-[18px] font-normal'>Usual users</p>
                            </div>
                        </div>
                        </div>
                        <div className='text-[#29313D] w-130 '>
                            <h2 className='font-semibold text-[48px] leading-[140%]'>The hundred of completed works still counting</h2>
                            <p className='text-[18px] font-normal capitalize leading-[200%] mt-5 mb-10'>Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels.</p>
                            <div>
                                <button className='text-[18px] font-semibold text-[#FDF9F8] py-3.5 px-7 rounded-[18px] bg-[#FF5538]'>More about us</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={Frame} alt="" className='absolute -top-15 right-0' />
                </div>
            </section>

        </>
    )
}

export default CompeletWorks
