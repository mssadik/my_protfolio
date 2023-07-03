import { FaAngleDoubleRight } from "react-icons/fa";

const Navbar = () => {
    const navOptions = <>
        <li><a href="#banner">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </>
    return (
        <div className="fixed w-full  bg-slate-950 opacity-40">
            <div className="navbar w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn pl-20 md:pl-0 btn-ghost normal-case text-xl Roboto_Slab">Sadikul Islam</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-red">
                        {navOptions}
                    </ul>
                </div>
                <div className="hidden md:block">
                    <a href="#contact" className="btn   capitalize border bg-[#252734] text-white rounded-full">Hire Me <FaAngleDoubleRight></FaAngleDoubleRight></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;