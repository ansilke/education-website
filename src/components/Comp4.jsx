import React from 'react'

function Comp4() {
  return (
    <>
      <div className='flex justify-center items-center flex-col mt-30 drop-shadow-2xl '>
        <div className='flex justify-between items-center flex-col w-full h-[65px]'>
          <h1  className='font-extrabold text-3xl font-serif hover:text-violet-700 hover:cursor-pointer'>Premium Pricing Plan</h1>
          <p  className="text-xl font-sans mt-6 ">Unlock edu tech servises with our premium pricing and get ahead of the compitition</p>
        </div>

        <div className='w-[85%] h-[500px] flex justify-between items-center'>
          <div style={{backgroundColor:"whitesmoke"}} className='w-[380px] h-[400px] flex flex-col justify-around items-center rounded-xl hover:drop-shadow-2xl'>
            <nav className='w-full justify-around items-center flex flex-col'>
              <h1 className='font-bold font-sans'>Normal Member</h1>
              <p className='text-l font-bold'>$0/month</p>
              <hr className='bg-black w-[380px] mt-7'></hr>
            </nav>

            <nav className='text-lg font-serif'>
              <p>Untitled Access to the course</p>
              <p>Customer Suport</p>
              <p>Personal Mentor</p>
              <p>Standard Option</p>
              <p>2 Class per week</p>
            </nav>
            
            <button className="cursor-alias w-70 h-12 bg-violet-600 hover:bg-violet-500 rounded-xl text-amber-50">Join</button>
          </div>
          <div className='w-[380px] h-[400px] bg-yellow-400 rounded-xl hover:drop-shadow-2xl hover:bg-yellow-300  flex flex-col justify-around items-center ' >

            <nav className='w-full justify-around items-center flex flex-col text-white'>
              <h1 className='font-bold font-sans'>Premium Member 💸</h1>
              <p className='text-l font-bold'>$100/month</p>
              <hr  className='bg-black w-[380px] mt-7'/>
            </nav>

            <nav className='text-lg font-serif text-white'>
              <p>Untitled Access to the course</p>
              <p>Customer Suport</p>
              <p>Personal Mentor</p>
              <p>Standard Option</p>
              <p>7 Class per week</p>
            </nav>
            <button className="cursor-alias w-70 h-12 bg-yellow-200 hover:bg-yellow-600 rounded-xl text-gray-500 hover:text-amber-50">Join</button>
          </div>
          <div style={{backgroundColor:"whitesmoke"}} className='w-[380px] h-[400px] rounded-xl hover:drop-shadow-2xl   flex flex-col justify-around items-center'>

          <nav className='w-full justify-around items-center flex flex-col'>
              <h1 className='font-bold font-sans'>Regular Member</h1>
              <p className='text-l font-bold'>$10/month</p>
              <hr className='bg-black w-[380px] mt-7'></hr>
            </nav>

            <nav className='text-lg font-serif'>
              <p>Untitled Access to the course</p>
              <p>Customer Suport</p>
              <p>Personal Mentor</p>
              <p>Standard Option</p>
              <p>3 Class per week</p>
            </nav>
            
            <button className="cursor-alias w-70 h-12 bg-violet-600 hover:bg-violet-500 rounded-xl text-amber-50">Join</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Comp4
