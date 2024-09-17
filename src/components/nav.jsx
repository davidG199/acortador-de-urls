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
      <nav className="w-full pt-8 md:pt-10 px-5 md:px-16 lg:px-28">
        <div className="flex items-center justify-between md:gap-10 text-[var(--Gray)] font-bold">
          <img src={logo} alt="logo" />
          <img
            src={iconMenu}
            alt="iconMenu"
            width={"32px"}
            onClick={handleClick}
            className=" md:hidden cursor-pointer"
          />
          <div className="hidden w-full md:flex items-center justify-between">
            <ul className="hidden md:flex flex-row gap-5 ">
              <li className="text-base hover:text-[var(--Very-Dark-Violet)] cursor-pointer">Features</li>
              <li className="text-base hover:text-[var(--Very-Dark-Violet)] cursor-pointer">Pricing</li>
              <li className="text-base hover:text-[var(--Very-Dark-Violet)] cursor-pointer">Resources</li>
            </ul>
            <ul className="hidden md:flex flex-row items-center gap-8 ">
              <li className="text-base hover:text-[var(--Very-Dark-Violet)] cursor-pointer">Login</li>
              <li className="text-base bg-[var(--Cyan)] px-5 py-2 rounded-full text-white cursor-pointer hover:bg-[var(--Cyan-hover)]">
                sign up
              </li>
            </ul>
          </div>
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
              <li className="text-base bg-[var(--Cyan)] px-[105px] py-3 rounded-full cursor-pointer hover:bg-[var(--Cyan-hover)]">
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
