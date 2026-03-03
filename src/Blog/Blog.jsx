
import { Link } from "react-router-dom";
import video from '../../img/Recording 2025-12-23 193923.mp4'

export default function Blog() {

    return (

        <>

            <section>
                <div className="container">

                    <div className="flex justify-content-end ">
                        <Link
                            to="/"
                            className="inline-flex  text-left text-8xl text-gray-700 mb-6"
                        >
                            ‹
                        </Link>


                    </div>

                    <div className="textblog">
                        <h1>Vertical Farming Blog</h1>
                        <p>Tower Garden, Tower Farms, Urban Farms, and more!</p>
                    </div>

                    <form className="relative max-w-2xl mx-auto">

                        <input
                            type="text"
                            placeholder="Find Your Blog"
                            className="
        w-full
        px-5
        py-3
        pr-12
        text-sm
        text-gray-700
        bg-white
        border
        border-gray-300
        rounded-xl
        focus:outline-none
        focus:ring-2
        focus:ring-green-600
        focus:border-green-600
      "
                        />

                        <button
                            type="submit"
                            className="
        absolute
        right-3
        top-1/2
        -translate-y-1/2
        text-gray-400
        hover:text-green-600
      "
                        >
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m21 21-4.35-4.35M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </button>

                    </form>

                </div>
                <div className="container">
                    <div className="textcardblog grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">


                        <div className="bg-neutral-primary-soft block w-full  border border-default rounded-base shadow-xs rounded-xl">

                            <img className="w-full h-[380px] object-cover rounded-t-xl" src="img/img2.jpg" alt="img" />
                            {/* <video className="w-full h-[380px] object-cover rounded-t-xl" src={video} autoPlay loop muted controls></video> */}


                            <h3 className="mt-6 mb-2 px-2 text-left">Growing Oregano in Aeroponic Towers: High Yields, Rich Flavors
                                and Sustainable Profits</h3>

                            <h6 className="mt-6 mb-2 px-2  text-left ">Oct 23, 2025</h6>

                            <p className="mb-6 text-body px-2  text-left">Oregano, a cherished ,herb thrives when cultivating oregano in vertical farming systems using aeroponic towers, enabling growers to produce high-quality crops with exceptional efficiency. This article explores the science and techniques behind aeroponic..</p>

                        </div>
                        <div className="bg-neutral-primary-soft block w-full  border border-default rounded-base shadow-xs rounded-xl">

                            <img className="w-full h-[380px] object-cover rounded-t-xl" src="img/img2.jpg" alt="img" />


                            <h3 className="mt-6 mb-2 text-left px-2">Growing Oregano in Aeroponic Towers: High Yields, Rich Flavors
                                and Sustainable Profits</h3>

                            <h6 className="mt-6 mb-2 text-left px-2 ">Oct 23, 2025</h6>

                            <p className="mb-6 text-body text-left px-2">Oregano, a cherished ,herb thrives when cultivating oregano in vertical farming systems using aeroponic towers, enabling growers to produce high-quality crops with exceptional efficiency. This article explores the science and techniques behind aeroponic..</p>

                        </div>       <div className="bg-neutral-primary-soft block w-full  border border-default rounded-base shadow-xs rounded-xl">

                            <img className="w-full h-[380px] object-cover rounded-t-xl" src="img/img2.jpg" alt="img" />


                            <h3 className="mt-6 mb-2 text-left px-2">Growing Oregano in Aeroponic Towers: High Yields, Rich Flavors
                                and Sustainable Profits</h3>

                            <h6 className="mt-6 mb-2 text-left px-2 ">Oct 23, 2025</h6>

                            <p className="mb-6 text-body text-left px-2">Oregano, a cherished ,herb thrives when cultivating oregano in vertical farming systems using aeroponic towers, enabling growers to produce high-quality crops with exceptional efficiency. This article explores the science and techniques behind aeroponic..</p>

                        </div>       <div className="bg-neutral-primary-soft block w-full  border border-default rounded-base shadow-xs rounded-xl">

                            <img className="w-full h-[380px] object-cover rounded-t-xl" src="img/img2.jpg" alt="img" />


                            <h3 className="mt-6 mb-2 text-left px-2">Growing Oregano in Aeroponic Towers: High Yields, Rich Flavors
                                and Sustainable Profits</h3>

                            <h6 className="mt-6 mb-2 text-left px-2 ">Oct 23, 2025</h6>

                            <p className="mb-6 text-body text-left px-2">Oregano, a cherished ,herb thrives when cultivating oregano in vertical farming systems using aeroponic towers, enabling growers to produce high-quality crops with exceptional efficiency. This article explores the science and techniques behind aeroponic..</p>

                        </div>       <div className="bg-neutral-primary-soft block w-full  border border-default rounded-base shadow-xs rounded-xl">

                            <img className="w-full h-[380px] object-cover rounded-t-xl" src="img/img2.jpg" alt="img" />


                            <h3 className="mt-6 mb-2 text-left px-2">Growing Oregano in Aeroponic Towers: High Yields, Rich Flavors
                                and Sustainable Profits</h3>

                            <h6 className="mt-6 mb-2 text-left px-2">Oct 23, 2025</h6>

                            <p className="mb-6 text-body text-left px-2">Oregano, a cherished ,herb thrives when cultivating oregano in vertical farming systems using aeroponic towers, enabling growers to produce high-quality crops with exceptional efficiency. This article explores the science and techniques behind aeroponic..</p>

                        </div>
                        <div className="bg-neutral-primary-soft block w-full  border border-default rounded-base shadow-xs rounded-xl">

                            <img className="w-full h-[380px] object-cover rounded-t-xl" src="img/img2.jpg" alt="img" />


                            <h3 className="mt-6 mb-2 text-left px-2">Growing Oregano in Aeroponic Towers: High Yields, Rich Flavors
                                and Sustainable Profits</h3>

                            <h6 className="mt-6 mb-2 text-left px-2 ">Oct 23, 2025</h6>

                            <p className="mb-6 text-body text-left px-2">Oregano, a cherished ,herb thrives when cultivating oregano in vertical farming systems using aeroponic towers, enabling growers to produce high-quality crops with exceptional efficiency. This article explores the science and techniques behind aeroponic..</p>

                        </div>



                    </div>
                </div>


            </section>
        </>



    );

}