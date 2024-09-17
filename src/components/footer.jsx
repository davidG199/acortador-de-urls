import logo from "../../images/logo.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";

function Footer() {
  return (
    <div
      className="
    w-full 
    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
    justify-items-center 
    gap-10 md:gap-0"
    >
      <img src={logo} alt="logo" />

      <div className="text-center md:text-left">
        <h3 className="text-white font-bold tracking-wide text-base md:mb-6">
          Features
        </h3>
        <ul>
          <li className="text-[var(--Gray)] text-sm mt-3 cursor-pointer hover:text-[var(--Cyan)]">Link shortened</li>
          <li className="text-[var(--Gray)] text-sm mt-3 cursor-pointer hover:text-[var(--Cyan)]">Branded Links</li>
          <li className="text-[var(--Gray)] text-sm mt-3 cursor-pointer hover:text-[var(--Cyan)]">Analytics</li>
        </ul>
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-white font-bold tracking-wide text-base md:mb-6">
          Resources
        </h3>
        <ul>
          <li className="text-[var(--Gray)] text-sm mt-3 cursor-pointer hover:text-[var(--Cyan)]">Blog</li>
          <li className="text-[var(--Gray)] text-sm mt-3 cursor-pointer hover:text-[var(--Cyan)]">Developers</li>
          <li className="text-[var(--Gray)] text-sm mt-3 cursor-pointer hover:text-[var(--Cyan)]">Support</li>
        </ul>
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-white font-bold tracking-wide text-base md:mb-6">
          Company
        </h3>
        <ul>
          <li className="text-[var(--Gray)] text-sm mt-3 cursor-pointer hover:text-[var(--Cyan)]">About</li>
          <li className="text-[var(--Gray)] text-sm mt-3 cursor-pointer hover:text-[var(--Cyan)]">Our Team</li>
          <li className="text-[var(--Gray)] text-sm mt-3 cursor-pointer hover:text-[var(--Cyan)]">Careers</li>
          <li className="text-[var(--Gray)] text-sm mt-3 cursor-pointer hover:text-[var(--Cyan)]">Contact</li>
        </ul>
      </div>
      <div className="text-center mt-5 md:mt-0">
        <ul className="flex items-center gap-5">
          <li>
            <img src={facebook} alt="facebook" />
          </li>
          <li>
            <img src={twitter} alt="twitter" />
          </li>
          <li>
            <img src={pinterest} alt="pinterest" />
          </li>
          <li>
            <img src={instagram} alt="instagram" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
