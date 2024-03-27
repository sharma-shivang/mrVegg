import React from 'react'
import HEROIMG from '../assets/HeroSectionImage.jpg'
import homeLogo from "../assets/home Logo.webp"
import AppLinkButtons from './AppLinkButtons'

const HeroSection = () => {
  return (
    <div className='relative mx-auto hidden sm:block md:block'>

      {/* Large screen layout*/}
      <div className='relative h-max'>
        <img src={HEROIMG} className=' object-fill' width="max"/>
      </div>

      <div className='h-[400px] w-[600px] absolute bg-[#ffffffd0] lg:hidden sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-y-7
       md:flex md:justify-center md:items-center
       top-[10%] left-[10%]'>
        <div className='-mt-20'>
          <img src={homeLogo} width={180} />
        </div>

        <div className=''>
          <p className='text-sm -mt-12 mb-12 font-bold'>Sign up to be the first to know about our soft launch events.</p>
        </div>

        <div className='-mt-12'>      
            <label htmlFor="helper-text" className="block mb-1 ml-12 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-[#163e21c6] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xyz@gmail.com"></input>
        </div>
        <div>
        <button type="submit" className="text-white end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
        </div>


        <div className='mt-7'>
          <AppLinkButtons/>
        </div>

      </div>



      <div className="lg:flex sm:hidden md:hidden absolute left-[10%] top-[20%] sm:top-[5%] mx-auto w-[80%] h-[90%] rounded-2xl text-[#1A2421] backdrop-blur-lg
               [ p-8 md:p-10 lg:p-10 ]
               [ bg-gradient-to-b from-white/60 to-white/30 ]
               [ border-[1px] border-solid border-white border-opacity-30 ] [ shadow-black/70 shadow-2xl ]
               flex flex-col justify-center items-center gap-y-[6rem]">

          <div className='-mt-12 lg:block sm:hidden md:hidden'>
          <img src={homeLogo}  width={220} className='lg:block md:hidden sm:hidden'/>
          </div>

          {/* Form */}
          <div className="lg:flex sm:hidden md:hidden -mt-32 py-6  flex-col justify-center sm:py-12">
              <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-[#ffffffe3] shadow-lg sm:rounded-3xl sm:p-20">
                  <div className="max-w-md mx-auto">
                    <div>
                      <p className="text-2xl font-semibold">Sign up to be the first to know about our soft launch events.</p>
                    </div>
                    <div className="divide-y divide-gray-200">
                      <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div className="relative">
                          <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                          <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                        </div>
                        <div className="relative">
                          <button className="bg-[#37a150] text-white rounded-md px-2 py-1">Sign Up</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>


          {/* Desc */}
          <div className='lg:flex sm:hidden md:hidden mx-auto flex flex-col justify-center items-center gap-y-3'>
            <p className='text-xl font-bold'>
              Searching for an online food ordering system with table reservations, pickup and delivery software?
            </p>
            <p className='text-lg'>
              Say no more. We’ve got you covered.
            </p>
          </div>


          {/* Download Buttons */}
          <div className='mb-7 lg:flex sm:hidden md:hidden'>
          <AppLinkButtons/>
          </div>

      </div>


    {/* Small Layout */}




    </div>
  )
}

export default HeroSection