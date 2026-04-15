import Logo from '../assets/Logo.png';
import Arrow_Down from '../assets/Arrow_Down.svg';

const NavBar = () => {
    return (
        <>
            <nav className='py-6 bg-[#FBF3F0]'>
                <div className='container'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <img src={Logo} alt="logo" />
                        </div>
                        <ul className='flex gap-12 text-[18px] font-semibold text-[#29313D]'>
                            <li className='flex items-center gap-2'><a href="">Home</a> <span><img src={Arrow_Down} alt="" /></span> </li>
                            <li className='flex items-center gap-2'><a href="">About</a> <span><img src={Arrow_Down} alt="" /></span></li>
                            <li className='flex items-center gap-2'><a href="">Services</a> <span><img src={Arrow_Down} alt="" /></span></li>
                            <li className='flex items-center gap-2'><a href="">works</a> <span><img src={Arrow_Down} alt="" /></span></li>
                            <li className='flex items-center gap-2'><a href="">Blog</a><span><img src={Arrow_Down} alt="" /></span></li>
                        </ul>
                        <button className='text-[18px] font-semibold text-[#FF5538] py-3.5 px-7 rounded-[18px] border border-[#FF5538]'>Contact us</button>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavBar
