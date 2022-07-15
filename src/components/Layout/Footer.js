import React from 'react';
// import { HiOutlineArrowRight } from 'react-icons/hi';


const Footer = () => {
    return (
        <div>
            <div className="columns flex justify-center bg-[#f0efea] py-14 shadow-2xl">
                <div className="flex w-full flex-wrap justify-between font-bold md:w-3/5">
                    <div className="flex flex-col flex-wrap pr-10 font-bold">
                        <h1 className=" w-1/4 text-2xl font-medium uppercase tracking-wider text-[#3d6642] sm:text-2xl lg:text-4xl">
                            INFORMATION
                        </h1>
                        <p className="py-1 ">test@gmail.com</p>
                        <p className="py-1">(+2) 01112405807</p>
                        <p className="pt-1 pb-3">14 Jamal Abd-Nasser St. 6th Octber city</p>
                        {/* <SoicalIcons /> */}
                    </div>
                    <div className="flex flex-col flex-wrap pr-10">
                        <h1 className="text-2xl font-medium uppercase  text-[#3d6642] sm:text-2xl lg:text-4xl">
                            ABOUT
                        </h1>
                        <p className="py-1">About Food Trends</p>
                        <p className="py-1">Careers</p>
                        <p className="py-1">Our location</p>
                        <p className="py-1">Reviews</p>
                        <p className="py-1">Our Blog</p>
                    </div>
                    <div className="flex flex-col flex-wrap pr-10">
                        <h1 className="text-2xl font-medium uppercase  text-[#3d6642] sm:text-2xl lg:text-4xl">
                            SUPPORT
                        </h1>
                        <p className="py-1">FAQ</p>
                        <p className="py-1">Look up Product</p>
                        <p className="py-1">Become a vendor</p>
                        <p className="py-1">Returns</p>
                        <p className="py-1">Shipping & Delivery</p>
                    </div>
                    <div className="flex flex-col flex-wrap pr-10">
                        <h1 className="text-2xl font-medium uppercase  text-[#3d6642] sm:text-2xl lg:text-4xl">
                            NEWSLETTER
                        </h1>
                        <p className="py-2">
                            Give your inbox some love with new products, tips, & more.
                        </p>
                        <form action="" className="mt-4">
                            <div className="flex rounded-md bg-[#f2cf79] p-2">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="w-11/12 bg-transparent font-medium placeholder:text-black "
                                />
                                <button className="flex-end">
                                    {/* <HiOutlineArrowRight /> */}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-[#f0efea] py-5 text-center">
                <p className="">Accepted payments</p>
                <p>
                    <span>&#169;</span>
                    Food Trends 2022
                </p>
            </div>
        </div>
    );
};

export default Footer;
