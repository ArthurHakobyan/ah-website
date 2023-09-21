import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <section>
      <div className='md:flex md:gap-4 container mx-auto px-8 py-32 '>

      

        <div className='flex-1 text-cream pt-16 pb-16 relative'>
            <div className='absolute top-0 left-0'><Image src="/images/graphics/about-me-vectors/Vector 141.png " alt="vector image" width={63} height={48}/></div>
            <div className='absolute top-5 left-80'><Image src="/images/graphics/about-me-vectors/lightbulb.png " alt="vector image" width={75} height={90}/></div>
            <div className='absolute bottom-0 left-80'><Image src="/images/graphics/about-me-vectors/Vector 186.png " alt="vector image" width={130} height={130}/></div>
            <h2 className='font-bold text-4xl'>About <span className='text-azure'>me</span></h2>
            <p className='w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt assumenda non impedit ut expedita. Quas blanditiis impedit, quos quis error inventore mollitia distinctio sapiente tempora dolorum dignissimos voluptate omnis atque?</p>
        </div>
        <div className='flex-1 md:shrink-0'><Image src="/images/graphics/about-me-vectors/Group 2351.png " alt="vector image" width={450} height={450}/></div>
      </div>
    </section>
  )
}

export default AboutPage
