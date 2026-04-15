import React from 'react'
import Mask_group from '../assets/Mask_group.png';

const MaskGroup = () => {
    return (
        <>
            <section className='py-25 bg-[#FFD7C8] relative'>
                <img src={Mask_group} alt="" className='absolute top-0 right-0' />
                <div className="container">
                    <div>
                        <div className='grid grid-cols-2  '>
                            <div>
                                <h4>Lets talk</h4>
                                <h2 className='text-[48px] font-semibold text-[#29313D]'>Got a project?</h2>
                            </div>
                        </div>
                        <hr className='w-full h-0 bg-gray-600 mt-12' />
                        <p className='font-normal text-[18px] text-[#655F64] capitalize mt-6'>As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with.</p>
                    </div>
                    <button className='mt-10 text-[18px] font-semibold text-[#FDF9F8] py-3.5 px-7 rounded-[18px] bg-[#FF5538]'>Contact us</button>
                </div>
            </section>

        </>
    )
}

export default MaskGroup
