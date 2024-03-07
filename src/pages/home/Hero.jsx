import React from 'react'

const Hero = () => {
    return (
        <section className='bg-pink-200'>
            <div className='basis-[37.5vw] flex justify-center items-center bg-gray-200 rounded-[100px] p-[6.25vw]'>
                <h3 className='purple-700'>
                    Building Digital Adventures with a Designer's Heart
                </h3>
            </div>
            <article className='flex flex-1 flex-col' >
                <div className="flex flex-1 flex-col justify-end items-start bg-blue rounded-[100px] p-[6.25vw]">
                    <h1 className='text-white'>Trish Ramos</h1>
                    <h2 className='text-cyan-300'>Creative Developer</h2>
                </div>

                <div className="flex flex-2 items-center bg-fuchsia-300 rounded-[100px] p-[6.25vw]">
                    <p className='text-purple-700 '>
                        hi 🖐 I'm a passoinate motion designer and web developer based in Colombia, dedicated to crafting
                        digital experiences that are not only purposeful but also unforgettable.
                    </p>
                </div>
            </article>

        </section>
    )
}

export default Hero;
