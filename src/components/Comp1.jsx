import React from "react";

function Comp1() {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col space-y-7 justify-center mt-[12%] ml-[15%]">
          <h1 className="text-5xl font-serif hover:text-yellow-400  hover:cursor-pointer">Learn Everything For Free !!!</h1>
          <h2 className="text-2xl font-sans">
            {" "}
            Master trading technology with EDU TECH and return skills
          </h2>
          <div className="space-x-7">
            <button className="cursor-alias w-70 h-12 bg-violet-600 hover:bg-violet-500 rounded-xl text-amber-50">
              Get started
            </button>
            <button className="cursor-alias w-70 h-12  bg-violet-600  hover:bg-violet-500 rounded-xl  text-amber-50">
              Watch now
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://www.shutterstock.com/image-vector/person-gains-knowledge-success-better-600nw-1463537591.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Comp1;
