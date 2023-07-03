import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-[#2A2C39] py-6">
            <div className="w-10/12 mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-white text-lg font-bold mb-2">Contact</h4>
                    <p className="text-white text-sm">Email: sadikul14144@gmail.com</p>
                    <p className="text-white text-sm">Phone: +8801980789212</p>
                </div>
                <div className="">
                    <img className="w-[100px] h-[100px] rounded-full" src="https://i.ibb.co/FW4d1Qr/pic-removebg-preview.png" alt="" />
                </div>
                <div className="flex flex-col items-center md:items-end">
                    <h4 className="text-white text-lg font-bold mb-2">Follow Me</h4>
                    <div className="flex gap-4">
                        <Link to="https://www.facebook.com/profile.php?id=100066067402051"><FaFacebook className='text-blue-500 hover:text-blue-700 transition-colors duration-300' /></Link>
                        <Link to="https://www.instagram.com/sadikulislam447/"><FaInstagram className='text-pink-500 hover:text-pink-700 transition-colors duration-300' /></Link>
                        <Link to="https://github.com/mssadik"> <FaGithub className='text-gray-600 hover:text-gray-500 transition-colors duration-300' /></Link>
                        <Link to="https://www.linkedin.com/in/sadikul-islam-6b2827278/"><FaLinkedin className='hover:text-gray-200 transition-colors duration-300'></FaLinkedin></Link>
                    </div>
                </div>
            </div>
            <hr className=" mt-5" />
            <div className="text-center mt-6">
                <p className="text-white text-sm">&copy; {new Date().getFullYear()} Sadikul Islam. All rights reserved.</p>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
