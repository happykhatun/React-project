import Logo from '../assets/Logo.png';

const Footer = () => {
    return (
        <>
            <footer className='pt-30 pb-13'>
                <div className="container">
                    <div className='flex justify-between text-[#29313D]'>
                        <div>
                            <img src={Logo} alt="" />
                            <p className='mt-11 font-normal text-[18px] w-100'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                        </div>
                        <div>
                            <h3 className='font-semibold text-[24px] '>Features</h3>
                            <ul className='space-y-7.5 text-[20px] font-semibold mt-12 text-[#545A64]'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Benifit</li>
                                <li>Pricing</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-semibold text-[24px] '>Products</h3>
                            <ul className=' space-y-7.5 text-[20px] font-semibold mt-12 text-[#545A64]'>
                                <li>Task Management</li>
                                <li>Company growth</li>
                                <li>Time tracking</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-semibold text-[24px] '>Support</h3>
                            <ul className=' space-y-7.5 text-[20px] text-[#545A64] font-semibold mt-12'>
                                <li>Customer service</li>
                                <li>Accessibility</li>
                                <li>Contact us</li>
                            </ul>
                        </div>

                    </div>
                    <div className='flex justify-between mt-20'>
                        <p className=' font-normal text-[18px] text-[#29313D]'>@20201 Innovate.All rights reserved.</p>
                        <div className='flex gap-15 font-normal text-[18px] text-[#29313D]'>
                            <h5>Privacy policy</h5>
                            <h5>Terms & condition</h5>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
