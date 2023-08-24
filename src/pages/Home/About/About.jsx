



import { useEffect } from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import ResumePDF from '../../../../public/sadikul_resume.pdf.pdf';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3, // Adjust the threshold value as needed
  });

  useEffect(() => {
    if (inView) {
      const div1 = document.querySelector('.animate-from-left');
      const div2 = document.querySelector('.animate-from-right');
      if (div1 && div2) {
        div1.classList.add('animate-about');
        div2.classList.add('animate-about');
      }
    }
  }, [inView]);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = ResumePDF;
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <div className="bg-[#2A2C39]">
      <div id="about" className="w-10/12 mx-auto md:flex py-16">
        <div className="w-2/4 mx-auto animate-from-left" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <img
            className="rounded-full sm:w-1/2 sm:mx-auto mb-4"
            src="https://i.ibb.co/FW4d1Qr/pic-removebg-preview.png"
            alt=""
          />
        </div>
        <div ref={ref} className="w-3/4 animate-from-right ml-10 md:ml-0" >
          <h2 className="text-2xl font-bold mb-4" data-aos="flip-up">Hi, I&apos;m Sadikul Islam</h2>
          <p className="mb-4 text-white text-xs" data-aos="flip-up">
            I&apos;m a front-end developer with six months of experience and a passion for creating stunning web experiences. My expertise lies in HTML, CSS, Bootstrap, Tailwind CSS, and JavaScript. I&apos;m also skilled in React.js and have hands-on experience with MongoDB, Firebase, Axios, GitHub, Git, Vercel, and Netlify.
          </p>
          <p className="mb-4 text-white text-xs" data-aos="flip-up">
            I love building efficient and user-friendly web applications using React hooks and integrating Stripe payment methods for seamless transactions. Though I&apos;m still exploring Node.js and Express.js, I&apos;m committed to continuous learning and improving my skills in these areas.
          </p>
          <p className="mb-4 text-white text-xs" data-aos="flip-up">
            Currently, I&apos;m actively seeking new job opportunities to contribute my skills and creativity to exciting projects. If you have a project or job opening that aligns with my expertise, feel free to reach out!
          </p>
          <p className="text-white text-xs font-bold" data-aos="flip-up">Contact me at: sadikul14144@gmail.com</p>

          <button
            onClick={() => downloadResume()}
            className="my-10 border btn-sm flex items-center gap-3 p-5 rounded-full hover:bg-[#2A2C39]"  data-aos="zoom-in"
          >
            Get Resume <FaArrowAltCircleDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

