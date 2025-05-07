import React from 'react'

function Footer() {
  return (
    <>
      <div className='w-full h-[200px] bg-violet-100 mt-20 flex-row flex justify-evenly items-center hover:bg-violet-200'>
        <div className='flex flex-col justify-around items-start h-[150px]'>
        <div className='flex flex-row items-center justify-start gap-7 '>
        <img
            className="w-10 h-10 rounded-4xl"
            src="./src/img/logo.JPG"
            alt=""
          />
          <p className='font-bold text-xl'>EDU TECH</p>
          </div>
          <nav className='font-bold text-[15px] font-serif'>
            <p>Emprice the future of Inovation and the Technology</p>
            <p>without cutting-edge tech businuss Tecnology.</p>
          </nav>
        </div>
        <div className='flex flex-col justify-around items-start h-[150px] ml-8'>
            <p className='font-light text-xl font-serif'>Company</p>
            <nav className=' font-serif'>
            <p>Our programs</p>
            <p>Our Plan</p>
            <p>Become a member</p>
            </nav>
        </div>
        <div className='flex flex-col justify-around items-center h-[150px] ml-8'>
        <p className='font-light text-xl font-serif'>Quick links</p>
            <nav className=' font-serif'>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Suport Us</p>
            </nav>
        </div>
      </div>
    </>
  )
}

export default Footer
