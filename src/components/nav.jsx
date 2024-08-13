import { useState } from "react";
import logo from "../../images/logo.svg";
import iconMenu from "../../images/menu-outline.svg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="">
        <div className="flex w-full justify-between items-center text-[var(--Gray)] font-bold">
          <div className="flex sm:gap-10 justify-between sm:justify-normal">
            <img src={logo} alt="logo" />
            <img
              src={iconMenu}
              alt="iconMenu"
              width={"32px"}
              onClick={handleClick}
              className=" sm:hidden"
            />
            <ul className="hidden sm:flex flex-row gap-5 ">
              <li className="text-base">Features</li>
              <li className="text-base">Pricing</li>
              <li className="text-base">Resources</li>
            </ul>
          </div>
          <ul className="hidden sm:flex flex-row items-center gap-10 ">
            <li className="text-base">Login</li>
            <li className="text-base bg-[var(--Cyan)] px-5 py-1 rounded-full text-white">
              sign up
            </li>
          </ul>
        </div>
        {isOpen ? (
          <div
            className="
          text-white bg-[var(--Dark-Violet)] 
          flex flex-col justify-center items-center 
          py-8 px-6 gap-5 top-20
          absolute font-bold rounded-lg
          w-[89%]"
          >
            <ul className=" border-b border-neutral-500 w-full text-center">
              <li className="text-base">Features</li>
              <li className="text-base mt-5">Pricing</li>
              <li className="text-base my-5">Resources</li>
            </ul>
            <ul className="text-center flex flex-col">
              <li className="text-base mb-5">Login</li>
              <li className="text-base bg-[var(--Cyan)] px-[105px] py-3 rounded-full">
                Sign up
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </nav>
    </>
  );
}

export default Nav;
