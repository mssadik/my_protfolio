import { useState } from 'react';
import { FaArrowAltCircleDown, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ResumePDF from '../../../../public/sadikul_resume.pdf.pdf';
import './Banner.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';


const Banner = () => {
    const [isImageAnimated, setIsImageAnimated] = useState(false);

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = ResumePDF;
        link.download = 'resume.pdf';
        link.click();
    };

    const handleImageAnimation = () => {
        setIsImageAnimated(true);
    };

    return (
        <div id="banner" className="flex flex-col-reverse md:flex-row pt-20 w-10/12 mx-auto">

            <div className={`md:w-1/2 max-w-full`}>
                <div className="my-20 Roboto_Slab">
                    <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl">Hello! I&apos;m</h1>
                    <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl mb-5">Sadikul Islma</h1>
                    <p className="mb-4 text-white text-xs">Front-end developer skilled in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and React.js. Seeking opportunities to create user-friendly web applications and contribute to exciting projects.</p>
                    <p className="mb-4 text-white text-xs">Experienced with MongoDB, Firebase, Axios, Git, and deployment platforms like Vercel and Netlify. Passionate about building efficient web experiences using React hooks and integrating Stripe payment methods.</p>
    
                    <button
                        onClick={() => downloadResume()}
                        className=" my-10 border btn-sm flex items-center gap-3 p-5 rounded-full hover:bg-[#2A2C39]"
                    >
                        Get Resume <FaArrowAltCircleDown />
                    </button>
                    <h2 className='text-2xl'>Follow me on</h2>
                    <div className='flex gap-5 mt-5 text-3xl'>
                        <Link to="https://www.facebook.com/profile.php?id=100066067402051"><FaFacebook className='text-blue-500 hover:text-blue-700 transition-colors duration-300' /></Link>
                        <Link to="https://www.instagram.com/sadikulislam447/"><FaInstagram className='text-pink-500 hover:text-pink-700 transition-colors duration-300' /></Link>
                        <Link to="https://github.com/mssadik"> <FaGithub className='text-gray-600 hover:text-gray-500 transition-colors duration-300' /></Link>
                        <Link to="https://www.linkedin.com/in/sadikul-islam-6b2827278/"><FaLinkedin className='hover:text-gray-200 transition-colors duration-300'></FaLinkedin></Link>
                    </div>

                </div>
            </div>
            <div className="mt-5  md:mt-5 md:w-1/2 md:flex md:items-center md:justify-center">
                <img
                    className={`max-w-full h-auto md:max-w-none ${isImageAnimated ? 'image-animation' : ''}`}
                    src="https://i.ibb.co/FW4d1Qr/pic-removebg-preview.png"
                    alt=""
                    onLoad={handleImageAnimation}
                />
            </div>
        </div>



    );
};

export default Banner;


