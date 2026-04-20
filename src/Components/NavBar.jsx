import Logo from '../assets/Logo.png';
import Arrow_Down from '../assets/Arrow_Down.svg';
import { MdMenu } from "react-icons/md";
import { useState } from 'react';

const NavBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <nav className='py-6 bg-[#FBF3F0]'>
                <div className='container'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <img src={Logo} alt="logo" />
                        </div>
                        <ul className=' hidden md:flex gap-12 text-[18px] font-semibold text-[#29313D]'>
                            <li className='flex items-center gap-2'><a href="">Home</a> <span><img src={Arrow_Down} alt="" /></span> </li>
                            <li className='flex items-center gap-2'><a href="">About</a> <span><img src={Arrow_Down} alt="" /></span></li>
                            <li className='flex items-center gap-2'><a href="">Services</a> <span><img src={Arrow_Down} alt="" /></span></li>
                            <li className='flex items-center gap-2'><a href="">works</a> <span><img src={Arrow_Down} alt="" /></span></li>
                            <li className='flex items-center gap-2'><a href="">Blog</a><span><img src={Arrow_Down} alt="" /></span></li>
                        </ul>
                        <button className=' hidden md:block text-[18px] font-semibold text-[#FF5538] py-3.5 px-7 rounded-[18px] border border-[#FF5538]'>Contact us</button>


                        <div className='md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
                            <MdMenu />
                        </div>
                    </div>
                    {
                        open && (
                            <div className='md:hidden'>
                                <ul className='flex flex-col gap-8 text-[18px] font-semibold text-[#29313D]'>
                                    <li ><a href="">Home</a> </li>
                                    <li ><a href="">About</a></li>
                                    <li><a href="">Services</a></li>
                                    <li><a href="">works</a></li>
                                    <li ><a href="">Blog</a></li>
                                </ul>
                                <button className=' text-[18px] font-semibold text-[#FF5538] py-3.5 px-7 rounded-[18px] border border-[#FF5538]'>Contact us</button>
                            </div>

                        )
                    }
                </div>
            </nav>

        </>
    )
}

export default NavBar
