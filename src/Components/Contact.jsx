import React from 'react'
import GifImage from '../assets/gif_image.gif'

const Contact = () => {
    return (
        <>
            <section
                id="contact"
                className="flex flex-col justify-center items-center px-4 py-8 md:py-8 m-8 md:m-16"
            >
                <h2 className="text-center text-3xl md:text-5xl font-semibold mb-8 text-white">
                    <div className="text-center text-3xl md:text-5xl space-y-2 space-x-2 font-semibold mb-8 md:mb-10 text-white">
                        <hr className="w-1/2 float-left border-white" />
                        Contact
                        <hr className="w-1/2 float-right border-white" />
                    </div>
                </h2>
                <div className=" w-full flex flex-col md:flex-row md:m-4 justify-center items-center">
                    <div className="w-1/2 flex justify-center items-center">
                        <img src={GifImage} alt="" className='w-full p-2' />
                    </div>

                    <div className="bg-white bg-opacity-15 m-8 p-8 w-full md:w-1/2 flex flex-col justify-center items-center rounded-xl">
                        <h2 className="font-light text-3xl text-center text-gray-200 mb-5 ">
                        Want to chat? Just shoot me a DM on <a href='' className='hover:underline text-blue-600 font-semibold'>Twitter</a>, connect with me on <a href='' className='hover:underline text-blue-600 font-semibold'>LinkedIn</a>, or check out my projects on <a href='' className='hover:underline text-blue-600 font-semibold'>GitHub</a>
                        </h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
