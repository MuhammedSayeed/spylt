import Image from 'next/image';
import logo from "@/public/images/nav-logo.svg"
const Navbar = () => {
    return (
        <div className='w-full p-4 md:p-[20px] fixed top-0 left-0 right-0 z-[99]'>
        <div className="relative w-[45px] min-h-10 md:min-h-20 md:w-[100px]">
                <Image
                    src={logo}
                    alt="spylt-logo"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    )
};

export default Navbar;