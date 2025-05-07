import React from 'react'

function Comp3() {
  return (
    <>
    <div className="flex flex-row mt-[70px]  h-[500px] w-full justify-center items-center">
      <div>
        <img src="https://img.freepik.com/free-vector/global-distribution-international-cargo-freight-company-supply-chain-management-logistics-operations-control-streamline-your-logistics-concept-pinkish-coral-bluevector-isolated-illustration_335657-1766.jpg" alt="" />
      </div>
      <div className='flex flex-col justify-around items-center h-[300px]'>

        <h1 className='font-extrabold text-3xl font-serif hover:text-violet-700 hover:cursor-pointer'>Join Our Tech Community</h1>
        <nav>
        <p className='text-xl font-sans'><span className='font-bold'>For more details.</span> Unlock the power of the technology and innovation by joining </p>
       <p className="text-xl font-sans ">our vibrant and free <span className='font-bold'>whatsapp tech community</span></p>
       </nav>
        <button className="cursor-alias w-140 h-12 bg-violet-600 hover:bg-violet-500 rounded-xl text-amber-50">Join Now</button>

      </div>
      </div>
    </>
  )
}

export default Comp3
