import { useState } from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import ResumePDF from '../../../../public/sadikul_resume.pdf.pdf';
import './Banner.css'; // Import your CSS file for styling


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
        <div className="flex flex-col-reverse md:flex-row pt-20 w-10/12 mx-auto">
            
            <div className={`md:w-1/2 max-w-full`}>
                <div className="mt-20 Roboto_Slab">
                    <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl">Hello! I&apos;m</h1>
                    <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl">Sadikul Islma</h1>
                    <p className="text-xs text-white sm:text-base md:text-lg lg:text-xl pt-3">MERN Stack Junior Developer &amp; Designer </p>
                    <p className='mt-5 text-white text-xs'>Sadikul Islam is a skilled MERN Stack developer proficient in HTML5, CSS3, Tailwind, and Bootstrap. With expertise in React.js and Node.js, he creates dynamic user interfaces and efficient server-side solutions. Comfortable in Firebase and MongoDB, Sadikul delivers seamless web experiences and innovative MERN solutions.</p>
                    <button
                        onClick={() => downloadResume()}
                        className=" my-10 border btn-sm flex items-center gap-3 p-5 rounded-full hover:bg-[#2A2C39]"
                    >
                        Get Resume <FaArrowAltCircleDown />
                    </button>
                </div>
            </div>
            <div className="mt-5  md:mt-5 md:w-1/2 md:flex md:items-center md:justify-center">
                <img
                    className={`max-w-full h-auto md:max-w-none ${isImageAnimated ? 'image-animation' : ''}`}
                    src="https://i.ibb.co/dG77L8m/20230527-174145-removebg-preview.png"
                    alt=""
                    onLoad={handleImageAnimation}
                />
            </div>
        </div>



    );
};

export default Banner;


