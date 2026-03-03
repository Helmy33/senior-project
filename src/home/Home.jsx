import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../App.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../../img/img1.jpg"
import logo from "../../img/logo.png"
import img from "../../img/img.jpeg"
import img2 from '../../img/img-home.png'
import img3 from '../../img/img3.jpg'
import Untitled from '../../img/Untitled.png'
import video from '../../img/document_6008351297948884293.mp4'
import { services } from "../Services.js"
import '@fortawesome/fontawesome-free/css/all.min.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faHouseSignal, faFaceGrinBeam, faMicrophone, faLightbulb, faArrowUpRightDots, faNoteSticky, faRecycle } from "@fortawesome/free-solid-svg-icons";

export default function Home() {



    const navigate = useNavigate();
    const [showVideo, setShowVideo] = useState(false);


    const iconsMap = {
        0: faMobile,
        1: faHouseSignal,
        2: faFaceGrinBeam,
        3: faMicrophone,
        4: faLightbulb,
        5: faArrowUpRightDots,
        6: faNoteSticky,
        7: faRecycle,
    };



    return (
        <>

            <section className="container home ralative w-full h-[100vh] flex p-0 m-0" id="home">
                <div
                    className=" absolute inset-0 w-full h-full bg-bottom"
                    style={{
                        backgroundImage: `url(${img2})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "scroll",
                        zIndex: 0,
                    }}>
                </div>

                <div className=" flex items-center z-10 relative w-[45%]">
                    <div className="mx-auto text-left">



                        <h1>
                            BRING FRESH GROWTH
                            <br />
                            TO VERTICAL <br /> AGRICULTURE
                        </h1>

                        <p>
                            is a smart vertical-farming platform that merges agronomy with data We transform limited spaces into high-yield farms
                        </p>

                        <button className="bg-[#265338] text-white px-6 py-3 rounded-full">
                            Learn More
                        </button>




                    </div>
                </div>
            </section>

            <section className="bg-[#D4D4D4]  m-0 py-6">
                <div className="flex items-center justify-evenly ">


                    <div className="flex items-center gap-2">
                        <span className="bg-white p-3 flex items-center justify-center rounded-full">
                            <i class="fa-solid fa-leaf text-[#408A5E]"></i>
                        </span>
                        <h6>eco friendly</h6>
                    </div>


                    <div className="bg-green-800 h-[50px] w-[2px]"></div>


                    <div className="flex items-center gap-2">
                        <span className="bg-white p-3 flex items-center justify-center rounded-full">
                            <i className="fa-solid fa-chart-line text-[#408A5E]"></i>
                        </span>
                        <h6>done with love</h6>
                    </div>


                    <div className="bg-green-800 h-[50px] w-[2px]"></div>


                    <div className="flex items-center gap-2">
                        <span className="bg-white p-3 flex items-center justify-center rounded-full">
                            <i class="fa-solid fa-leaf text-[#408A5E]"></i>
                        </span>
                        <h6>cost-effective </h6>
                    </div>

                </div>
            </section>

            <section id="were" className="py-5">
                <div className="container mx-auto flex flex-col gap-10 md:flex-row">

                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center  ">
                        <img className="w-full h-[720px] object-cover  " src={Untitled} alt="img" />
                        <button
                            onClick={() => setShowVideo(true)}
                            className="play font-medium text-lg flex items-center gap-2 bg-[#265338] text-white px-8 py-2 rounded-full -mt-12"
                        >
                            play now
                            <i className="fa-solid fa-play"></i>
                        </button>


                    </div>


                    <div className="w-full md:w-1/2 flex  flex-col  justify-center text-left mb-4">
                        <h1>We’re redefining how farming fits into modern city life</h1>
                        <p>Born from the challenge of limited urban space, our Smart Vertical Farming System combines IoT automation, AI monitoring, and data-driven control to grow more in less space efficiently and sustainably.
                            Through smart sensors and cloud connectivity, every plant receives exactly what it needs to thrive.
                            Whether for children learning sustainability or professionals seeking precision, our system makes farming simple, smart, and space-efficient.</p>

                    </div>
                </div>
            </section>


            <section className="relative h-[100vh] flex items-center" id="why">
                <div
                    className=" absolute inset-0 "
                    style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "scroll",
                    }}>
                </div>


                <div className="container  relative mx-auto text-black bg-white text-center rounded-xl">
                    <h1>why choose us?</h1>
                    <div className="p">
                        <p>We don’t just grow plants , we grow possibilities.Our system takes smart farming beyond automation, blending technology, sustainability, and innovation to set a new standard for urban agriculture</p>
                    </div>



                    <div className="relative  rounded-2xl overflow-hidden">

                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center md:m-10 m-0 rounded-xl "
                            style={{ backgroundImage: `url(${img3})` }}
                        ></div>



                        {/* Content */}
                        <div className="relative z-10 flex flex-row  md:gap-8 gap-2 md:p-40  p-5  ">

                            {/* Card 1 */}
                            <div className="bg-white/90 backdrop-blur rounded-2xl p-5 px-4 shadow-lg flex gap-4 items-start">
                                <div className="text-green-700 text-xl">
                                    <span className="border border-gray-400 1px rounded-full p-2">
                                        <i className="fa-solid fa-chart-line  "></i>
                                    </span>

                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Data-Driven Precision</h4>
                                    <p className="text-sm text-gray-600">
                                        Real-time analytics and AI-powered control.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white/90 backdrop-blur rounded-2xl p-5 px-4 shadow-lg flex gap-4 items-start">
                                <div className="text-green-700 text-xl">
                                    <span className="border border-gray-400 1px rounded-full p-2">
                                          <i className="fa-solid fa-leaf"></i>
                                    </span>
                                  
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Resource Efficiency</h4>
                                    <p className="text-sm text-gray-600">
                                        Maximize output while saving water and energy.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white/90 backdrop-blur rounded-2xl p-5 px-4 shadow-lg flex gap-4 items-start">
                                <div className="text-green-700 text-xl">
                                    <span className="border border-gray-400 1px rounded-full p-2">
                                          <i className="fa-solid fa-seedling"></i>
                                    </span>
                                  
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Intelligent By Design</h4>
                                    <p className="text-sm text-gray-600">
                                        Smart systems built for sustainable growth.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className='' id='cards'>
                <div className="services-section container">
                    <div className='contex'>
                        <p className='pop'>
                            servies
                        </p>
                        <h1>
                            Explore our wide <br />
                            range of services
                        </h1>
                    </div>
                    {/* <div className="slider-arrows text-right w-max ">
                <button className="custom-prev">‹</button>
                <button className="custom-next">›</button>
              </div> */}

                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        observer={true}
                        observeParents={true}
                        watchSlidesProgress={true}
                        updateOnWindowResize={true}
                        autoHeight={true}
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {services.map((service, i) => (
                            <SwiperSlide key={i}>
                                <div className="slide-inner">
                                    <div className="father cursor-pointe" onClick={() => navigate(`/product/${i}`)}>
                                        <div
                                            className="service-card"
                                            style={{ backgroundImage: `url(${service.img})` }}
                                        >


                                            <div
                                                key={service.id}
                                                className="card-content ">
                                                <div>

                                                    <FontAwesomeIcon className='icons'
                                                        icon={iconsMap[service.id]} // fallback لو id مش موجود

                                                    />

                                                </div>
                                                <h1>{service.title}</h1>
                                                <p>{service.p}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </SwiperSlide>


                        ))}


                        <SwiperSlide>
                            <div className="slide-inner">
                                <div className="father is-disabled cursor-not-allowed">
                                    <div
                                        className="service-card"
                                        style={{ backgroundImage: `url(${img1})` }}
                                    >
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>

                                        <div className="card-content">
                                            <i className="icons fa-solid fa-lock  "></i>

                                            <h1>
                                                Stay Tuned For future features!
                                            </h1>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>


                    {/* الأسهم */}
                    <div className="slider-arrows text-right">
                        <button className="custom-prev"><i className="fa-solid fa-angle-left"></i></button>
                        <button className="custom-next"><i className="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>


            </section>

            <section className='space bg-[#408A5E]' id='space'>
                <div className="  border: 2px solid    p-6 text-white">
                    <h1>Vertical farming using hydroponics</h1>
                </div>

            </section>

            <section className='m-10' id='form'>
                <div className="container border-2 border-dotted border-green-700 rounded-xl">
                    <div className='text-form'>
                        <div>
                            <h1>Sign up to our newsletter</h1>
                            <p>Get our updates straight to your inbox!</p>
                        </div>
                    </div>

                    <form className="max-w-xl mx-auto">
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2.5 text-sm font-medium text-heading"></label>
                            <input type="name" id="name" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-xl focus:ring-brand focus:border-brand block w-full px-4 py-2.5 shadow-xs placeholder:text-body" placeholder="Enter Your Name" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading"></label>
                            <input type="email" id="email" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-xl focus:ring-brand focus:border-brand block w-full px-4 py-2.5 shadow-xs placeholder:text-body" placeholder="Enter Your Email" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="comment" className="block mb-2.5 text-sm font-medium text-heading"></label>
                            <input type="comment" id="comment" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-xl focus:ring-brand focus:border-brand block w-full px-4 py-2.5 shadow-xs placeholder:text-body" placeholder="Comment" required />
                        </div>
                        <button type="button" className=" border-full bg-[#408A5E] text-white  font-medium rounded-full text-lg px-7 py-2.5 text-center leading-5 ">send a message </button>
                    </form>
                </div>


            </section>


            <section className=" footer relative  text-white" id='footer'>


                <div
                    className=" absolute inset-0"
                    style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "scroll",
                        zIndex: 0,
                    }}>
                </div>

                <div className="container relative ">

                    <footer>
                        <div className="mx-auto w-full">
                            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">


                                <div className="flex flex-column md:text-left">

                                    <div className="">

                                        {/* <img src={logo} alt="logo" className="" /> */}

                                        <h2 className="mb-4">AGRL3</h2>

                                        <p>
                                            A smart vertical farming platform
                                            that integrates agronomy with
                                            data-transforming limited spaces
                                            into high-yield efficient farms.
                                        </p>

                                    </div>
                                </div>


                                <div>
                                    <h2 className="mb-4">our store</h2>
                                    <ul className="font-medium">
                                        <li className="mb-2"><a href="/" className="hover:underline">Home</a></li>
                                        <li className="mb-2"><a href="/Navbar" className="hover:underline">About Us</a></li>
                                        <li className="mb-2"><a href="#" className="hover:underline">Features</a></li>
                                        <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
                                    </ul>
                                </div>


                                <div>
                                    <h2 className="mb-4">services</h2>
                                    <ul className="font-medium">
                                        <li className="mb-2"><a href="#cards" className="hover:underline">Home</a></li>
                                        <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
                                        <li className="mb-2"><a href="/Blog" className="hover:underline">Blog</a></li>
                                    </ul>
                                </div>

                                <div className="flex flex-col md:items-end ">

                                    <div className="inline-flex flex-col items-center">

                                        <h2 className="mb-3 ">follow us</h2>

                                        <div className="flex flex-col gap-2 items-center">
                                            <a href="#" className="p-3 bg-white rounded-xl inline-flex">
                                                <i className="fa-brands fa-square-facebook text-[#1D3E2A] text-xl"></i>
                                            </a>
                                            <a href="#" className="p-3 bg-white rounded-xl inline-flex">
                                                <i className="fa-brands fa-square-instagram text-[#1D3E2A] text-xl"></i>
                                            </a>
                                            <a href="#" className="p-3 bg-white rounded-xl inline-flex">
                                                <i className="fa-brands fa-youtube text-[#1D3E2A] text-xl"></i>
                                            </a>
                                            <a href="#" className="p-3 bg-white rounded-xl inline-flex">
                                                <i className="fa-brands fa-whatsapp text-[#1D3E2A] text-xl"></i>
                                            </a>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </footer>
                </div>
            </section>

            {showVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

                    {/* Click outside to close */}
                    <div
                        className="absolute inset-0"
                        onClick={() => setShowVideo(false)}
                    ></div>

                    {/* Video Box */}
                    <div className="relative z-10 w-[90%] md:w-[70%] lg:w-[60%] bg-black rounded-xl overflow-hidden">

                        {/* Close Button */}
                        <button
                            onClick={() => setShowVideo(false)}
                            className="absolute top-3 right-3 text-white text-2xl z-20"
                        >
                            ✕
                        </button>

                        <video
                            src={video}   // غير المسار للفيديو بتاعك
                            controls
                        

                            className="w-full h-auto"
                        />
                    </div>
                </div>
            )}

        </>
    )
}





