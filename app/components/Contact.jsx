import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='w-full px-[12%] py-20 scroll-mt-20 bg-gray-50'>
            <h4 className='text-center mb-2 text-lg text-gray-600 font-medium'>
                Connect with Me
            </h4>
            <h2 className='text-center text-5xl font-bold text-gray-800'>
                Get in Touch
            </h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quibusdam ut facilis accusantium reiciendis deserunt rem corporis maxime voluptates iste?
            </p>

            <form className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
                    <input
                        type="text"
                        placeholder='Your Name'
                        required
                        className='w-full p-4 outline-none border border-gray-300 rounded-lg bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300'
                    />
                    <input
                        type="email"
                        placeholder='Your Email'
                        required
                        className='w-full p-4 outline-none border border-gray-300 rounded-lg bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300'
                    />
                </div>

                <textarea
                    name="message"
                    rows='6'
                    placeholder='Your Message'
                    required
                    className='w-full p-4 outline-none border border-gray-300 rounded-lg bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 mb-8 resize-y'
                ></textarea>

                <div className='text-center'>
                    <button
                        type='submit'
                        className='px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium shadow-md hover:shadow-lg'
                    >
                        Submit Now
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact