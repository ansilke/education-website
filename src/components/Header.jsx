import React from "react";

function Header() {
  return (
    <div className="m-0 bg-violet-100 drop-shadow-xl hover:bg-violet-200">
      <nav className=" w-[99%] h-[15vh]  flex justify-between ml-[1%] items-center ">
        <div className="flex justify-center items-center gap-8">
          <img
            className="w-11 h-11 rounded-full"
            src="./src/img/logo.JPG"
            alt="👤"
          />
          <h1 className="font-extrabold">EDU TECH</h1>
        </div>
        <div>
          <ul className="flex flex-row space-x-8 justify-center items-center pr-[50%] font-bold text-lg mr-9 font-serif">
            <a href="Home">
              <li className="hover:text-violet-700" >Home</li>
            </a>
            <a href="Servises">
              <li className="hover:text-violet-700">Servises</li>
            </a>
            <a href="Courses">
              <li className="hover:text-violet-700">Courses</li>
            </a>
            <a href="AboutUs">
              <li className="hover:text-violet-700">AboutUs</li>
            </a>
            <a href="Feedbacks">
              <li className="hover:text-violet-700">Feedbacks</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
