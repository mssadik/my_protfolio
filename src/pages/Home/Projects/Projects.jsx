import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import "./Projects.css"


const Projects = () => {
    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;

            if (scrollTop >= windowHeight / 2) {
                setAnimate(true);
            } else {
                setAnimate(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleDetailsClick1 = () => {
        setShowPopup1(true);
    };

    const handleDetailsClick2 = () => {
        setShowPopup2(true);
    };

    const handleDetailsClick3 = () => {
        setShowPopup3(true);
    };

    const handleClosePopup1 = () => {
        setShowPopup1(false);
    };

    const handleClosePopup2 = () => {
        setShowPopup2(false);
    };

    const handleClosePopup3 = () => {
        setShowPopup3(false);
    };

    return (
        <div id="projects" className="w-10/12 mx-auto py-20">
            <p className="text-xs Roboto_Slab">|| Projects</p>
            <h1 className="text-4xl Roboto_Slab pt-10">My completed projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20">
                <div className={`h-96 relative ${animate ? 'animate-left' : ''}`} data-aos="fade-right">
                    <Transition
                        show={animate}
                        enter="transition-all duration-1000 ease-in-out"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition-all duration-1000 ease-in-out"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full">
                        <img
                            className="w-full h-96 object-cover rounded-md object-top transition-all duration-1000 ease-in-out hover:object-bottom"
                            src="https://i.ibb.co/bHrRdck/as10.png"
                            alt=""
                        />
                    </Transition>
                    <div className="absolute bottom-5 left-5 flex space-x-2">
                        <button
                            className=" button1 px-4 py-2 bg-blue-500 text-white rounded-md"
                            onClick={handleDetailsClick1}
                        >
                            Details
                        </button>
                        <button className="button2 px-4 py-2 bg-green-500 text-white rounded-md">
                            <a href="https://the-chef-s-palette-da479.web.app/">Live Site</a>
                        </button>
                    </div>
                </div>
                <div className={`h-96 relative ${animate ? 'animate-left' : ''}`} data-aos="fade-right">
                    <Transition
                        show={animate}
                        enter="transition-all duration-1000 ease-in-out"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition-all duration-1000 ease-in-out"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full">
                        <img
                            className="w-full h-96 object-cover rounded-md object-top transition-all duration-1000 ease-in-out hover:object-bottom"
                            src="https://i.ibb.co/Gsk7gKV/ass11.png"
                            alt=""
                        />
                    </Transition>
                    <div className="absolute bottom-5 left-5 flex space-x-2">
                        <button
                            className="button1 px-4 py-2 bg-blue-500 text-white rounded-md"
                            onClick={handleDetailsClick2}
                        >
                            Details
                        </button>
                        <button className="button2 px-4 py-2 bg-green-500 text-white rounded-md">
                            <a href="https://mini-car-world.web.app/allToy">Live Site</a>
                        </button>
                    </div>
                </div>
                <div className={`h-96 relative ${animate ? 'animate-left' : ''}`} data-aos="fade-right">
                    <Transition
                        show={animate}
                        enter="transition-all duration-1000 ease-in-out"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition-all duration-1000 ease-in-out"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full">
                        <img
                            className="w-full h-96 object-cover rounded-md object-top transition-all duration-1000 ease-in-out hover:object-bottom"
                            src="https://i.ibb.co/Kmddb7V/ass12.png"
                            alt=""
                        />
                    </Transition>
                    <div className="absolute bottom-5 left-5 flex space-x-2">
                        <button
                            className="button1 px-4 py-2 bg-blue-500 text-white rounded-md"
                            onClick={handleDetailsClick3}
                        >
                            Details
                        </button>
                        <button className="button2 px-4 py-2 bg-green-500 text-white rounded-md">
                            <a href="https://summer-sports-academy.web.app/">Live Site</a>
                        </button>
                    </div>
                </div>
            </div>
            {showPopup1 && (
                <div className="fixed top-0 left-0 w-3/4 ml-40 h-full flex justify-center items-center">
                    <div className="bg-[#2A2C39] text-white rounded-md p-8 relative">
                        <h2 className="text-2xl mb-4 font-bold">The Chef&apos;s Palette</h2>
                        <p>
                            Each recipe is accompanied by detailed instructions, including ingredient lists, step-by-step preparation methods, cooking times, and serving suggestions. Users can easily follow the recipes to recreate the dishes in their own kitchens.
                        </p>
                        <h3 className="text-white text-2xl mb-5 font-bold mt-5">Technologies Use</h3>
                        <div className='flex'>
                            <div className="technologies w-2/4 flex-wrap ">
                                <spam className="technology uppercase">REACT.JS</spam>
                                <spam className="technology uppercase">REACT-DOM</spam>
                                <spam className="technology uppercase">firebase</spam>
                                <spam className="technology uppercase">MONGODB</spam>
                                <spam className="technology uppercase">BOOTSTRAP</spam>
                                <spam className="technology uppercase">heroicons</spam>
                                <spam className="technology uppercase">react-toastify</spam>
                            </div>
                            <div>
                                <button className="button1 px-4 py-2 bg-blue-500 text-white rounded-md ml-20 mr-5"> <a href="https://github.com/mssadik/the-chef-s-palette">Client Code</a> </button>
                                <button className="button2 px-4 py-2 bg-green-500 text-white rounded-md"> <a href="https://github.com/mssadik/the-chef-s-palette-server">Server Code</a> </button>
                            </div>
                        </div>
                        <button
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex justify-center items-center"
                            onClick={handleClosePopup1}
                        >
                            X
                        </button>
                    </div>
                </div>
            )}


            {showPopup2 && (
                <div className="fixed top-0 left-0 w-3/4 ml-40 h-full flex justify-center items-center">
                    <div className="bg-[#2A2C39] text-white rounded-md p-8 relative">
                        <h2 className="text-2xl mb-4 font-bold underline">Mini Car World</h2>
                        <p>
                            <span className='font-bold'>Toy Catalog:</span> The application displays a catalog of car toys with details such as toy name, description, photo, price, and availability. Users can browse and search for toys based on different criteria. <br /> <br />
                            <span className='font-bold'>Sorting System:</span> The toys can be sorted in both ascending and descending order based on price, allowing users to find toys within their desired price range. <br /> <br />
                            <span className='font-bold'>Toy Details:</span> Users can click on a toy to view more information, including a detailed description, seller information, rating, and quantity available. <br /> <br />
                            <span className='font-bold'>Shopping Cart:</span> Users can add toys to their cart, update quantities, and proceed to checkout to make a purchase.
                        </p>
                        <h3 className="text-white text-2xl mb-5 font-bold mt-5">Technologies Use</h3>
                        <div className='flex'>
                            <div className="technologies w-2/4 flex-wrap ">
                                <spam className="technology uppercase">REACT.JS</spam>
                                <spam className="technology uppercase">REACT-DOM</spam>
                                <spam className="technology uppercase">daisy ui</spam>
                                <spam className="technology uppercase">sweetalert2</spam>
                                <spam className="technology uppercase">react-tabs</spam>
                                <spam className="technology uppercase">firebase</spam>
                                <spam className="technology uppercase">MONGODB</spam>
                                <spam className="technology uppercase">tailwind</spam>
                                <spam className="technology uppercase">heroicons</spam>
                                <spam className="technology uppercase">mongodb</spam>
                            </div>
                            <div>
                                <button className="button1 px-4 py-2 bg-blue-500 text-white rounded-md ml-20 mr-5"> <a href="https://github.com/mssadik/mini-car-client">Client Code</a> </button>
                                <button className="button2 px-4 py-2 bg-green-500 text-white rounded-md"> <a href="https://github.com/mssadik/mini-car-server">Server Code</a> </button>
                            </div>

                        </div>
                        <button
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex justify-center items-center"
                            onClick={handleClosePopup2}
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
            {showPopup3 && (
                <div className="fixed top-0 left-0 w-3/4 ml-40 h-full flex justify-center items-center">
                    <div className="bg-[#2A2C39] text-white rounded-md p-8 relative">
                        <h2 className="text-2xl mb-4 font-bold">The Chef&apos;s Palette</h2>
                        <p>
                            User authentication with registration and login pages, supporting social login.
                            Navbar present on all pages, displaying website logo/name, Home, Instructors, Classes, Dashboard, and user profile picture or login button.
                            Stylish and meaningful footer with website logo/name, copyright, contact information, and address.
                            Homepage with a top slider section, popular classes section, popular instructors section, and an extra section for attractive elements.
                            Instructors page displaying instructor details such as image, name, email, and optional class information.
                            Classes page showing approved classes with image, name, instructor, available seats, price, and select button with relevant conditions.
                            Student Dashboard featuring sections for selected and enrolled classes, with options to delete and pay for classes.
                            Payment functionality with a payment page, reducing available seats upon successful payment and displaying class information on the enrolled classes page.
                        </p>
                        <h3 className="text-white text-2xl mb-5 font-bold mt-5">Technologies Use</h3>
                        <div className='flex'>
                            <div className="technologies w-2/4 flex-wrap ">
                                <spam className="technology uppercase">REACT.JS</spam>
                                <spam className="technology uppercase">REACT-DOM</spam>
                                <spam className="technology uppercase">firebase</spam>
                                <spam className="technology uppercase">MONGODB</spam>
                                <spam className="technology uppercase">tailwind</spam>
                                <spam className="technology uppercase">stripe js</spam>
                                <spam className="technology uppercase">react query</spam>
                                <spam className="technology uppercase">axios</spam>
                                <spam className="technology uppercase">react awesome slider</spam>
                                <spam className="technology uppercase">swiper </spam>
                                <spam className="technology uppercase">react-toastify</spam>
                            </div>
                            <div>
                                <button className="button1 px-4 py-2 bg-blue-500 text-white rounded-md ml-20 mr-5"> <a href="https://github.com/mssadik/summer-sports-academy-c">Client Code</a> </button>
                                <button className="button2 px-4 py-2 bg-green-500 text-white rounded-md"> <a href="https://github.com/mssadik/summar-sports-academi-s">Server Code</a> </button>
                            </div>
                        </div>
                        <button
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex justify-center items-center"
                            onClick={handleClosePopup3}
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
