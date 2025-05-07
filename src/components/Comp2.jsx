import React from "react";

function Comp2() {
  return (
    <>
      <div className="flex flex-col w-full h-[400px] justify-around mt-[70px] drop-shadow-2xl">
        <div className="flex flex-col justify-center items-center gap-9">
          <h1 className="font-serif text-4xl space-y-7 hover:text-violet-700  hover:cursor-pointer">Our Free Courses</h1>
          <h2 className="text-xl font-sans ">
            The Top Trenting Free Courses With Free Certifications
          </h2>
        </div>
        <div className="flex justify-start  items-center w-[85%] h-[200px]  bg-violet-400 rounded-2xl ml-[7.3%] hover:drop-shadow-2xl">
          <div className="flex flex-row space-x-9 justify-around items-center">
            <img
              className="w-[50px] h-[50px]  ml-6"
              src="data:image/png;base64,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"
              alt="brain-connections"
            ></img>
            <nav className="flex flex-col justify-around space-y-2">
              <p className="text-amber-50"> Al Devolopment</p>
              <p className="text-amber-50">Master Al Ddevolopment</p>
            </nav>
          </div>
          <div className="flex flex-row space-x-6 justify-around items-center">
          <div className="flex flex-row  justify-around items-center">
            <img className="w-[50px] h-[50px] ml-7" src="https://img.icons8.com/?size=100&id=8811&format=png&color=000000" alt="" />
          </div>
          <nav className="flex flex-col justify-around space-y-2 ml-4">
            <p className="text-amber-50">Software Devolopment</p>
            <p className="text-amber-50">Master Software devolopment</p>
          </nav>
          </div>

          <div className="flex flex-row space-x-6 justify-around items-center">
            <div className="flex flex-row  justify-around items-center">
              <img className="w-[70px] h-[70px] ml-7" src="https://img.icons8.com/?size=100&id=43971&format=png&color=000000" alt="" />
            </div>
            <nav className="flex flex-col justify-around space-y-2 ml-4">
              <p className="text-amber-50">Digital Marketing</p>
              <p className="text-amber-50">Master In Digital Marketing</p>
            </nav>
          </div>

          <div className="flex flex-row space-x-6 justify-around items-center">
            <div className="flex flex-row  justify-around items-center">
              <img className="w-[50px] h-[50px] ml-7" src="https://img.icons8.com/?size=100&id=8734&format=png&color=000000" alt="" />
            </div>
            <nav  className="flex flex-col justify-around space-y-2 ml-4">
              <p className="text-amber-50">Al Devolopment</p>
              <p className="text-amber-50">Master Hacking</p>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comp2;
