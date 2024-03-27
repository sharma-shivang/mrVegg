import React from 'react'
import './AboutSmallStyle.css'
import homeLogo from "../assets/home Logo.webp"
import HEROIMG from '../assets/HeroSectionImage.jpg'
import AppLinkButtons from './AppLinkButtons'
import {
    GooglePlayButton,
    AppGalleryButton,
    ButtonsContainer,
  } from "react-mobile-app-button";

const AboutSection = () => {
    const APKUrl = "https://play.google.com";
    const IOSUrl = "https://apps.apple.com";
  return (
    <div className=' mt-32 bg-[#06040a] flex flex-col justify-center items-center'>

        <div className='small-wrapper'>
            <img src={homeLogo} alt="" width={230}  className='-mb-12 -mt-24'/>

            <div className='w-[67%] flex justify-center items-center ' >
                <p className='font-medium text-lg'>Sign up to be the first to know about our soft launch events.</p>
            </div>


            <div className='mb-12'>
                <form className="max-w-md mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>

                <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
                </form>
            </div>

            <div>
            <GooglePlayButton
                url={APKUrl}
                theme={"dark"}
                className={"custom-style"}
                />
            </div>
            <div>
            <AppGalleryButton
                url={IOSUrl}
                theme={"dark"}
                className={"custom-style"}
                />
            </div>

        </div>        




        <div className='md:flex md:flex-col md:justify-center md:items-center md:gap-y-10
            sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-y-10
            lg:flex lg:flex-row justify-center items-center lg:gap-x-10 bg-[#06040a]'>
        <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
            <div
                className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none hover:scale-110 transition-all duration-200 bg-transparent bg-[url('https://images.pexels.com/photos/244393/pexels-photo-244393.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div className="relative p-6 px-6 py-14 md:px-12">
                <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                Our Story
                </h2>
                <p className='mb-6 block font-sans font-medium leading-[1.5] tracking-normal text-white antialiased'>
                At Mr.vegg, we started as a small family-owned business with the intention of providing our community with fresh groceries delivered straight to their doorstep. We have since grown and expanded our services, but our commitment to quality and customer satisfaction remains the same.
                </p>
            </div>
        </div>  


        <div className=" relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
            <div
                className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none hover:scale-125 transition-all duration-200 bg-transparent bg-[url('https://images.pexels.com/photos/1194432/pexels-photo-1194432.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div className="relative p-6 px-6 py-14 md:px-12">
                <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                Our Partners
                </h2>
                <p className='mb-6 block font-sans font-medium leading-[1.5] tracking-normal text-white antialiased'>
                We are  partner with local farmers and suppliers to bring you the freshest and highest quality products. By working with local businesses, we aim to support our community and promote sustainable and ethical practices.                </p>
            </div>
        </div>  



        <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
            <div
                className="absolute inset-0 m-0 h-full w-full overflow-hidden hover:scale-110 transition-all duration-200 rounded-none bg-transparent bg-[url('https://images.pexels.com/photos/2611818/pexels-photo-2611818.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div className="relative p-6 px-6 py-14 md:px-12">
                <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                Our Services
                </h2>
                <p className='mb-6 block font-sans font-medium leading-[1.5] tracking-normal text-white antialiased'>
                We offer more than just grocery delivery. From dairy to fresh vegetables services, we have a variety of options to make meal planning and preparation easier for you. We also offer exotic fruits  and vegetables.                </p>
            </div>
        </div>  
    </div>





    </div>

  )
}

export default AboutSection