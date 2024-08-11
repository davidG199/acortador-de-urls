import logo from "../../images/logo.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";

function Footer() {
  return (
    <div className=" w-full grid grid-cols-1 justify-items-center gap-10">
      <picture>
        <img src={logo} alt="logo" />
      </picture>
      <div className="text-center">
        <h3 className="text-white font-bold tracking-wide text-base">Features</h3>
        <ul>
          <li className="text-[var(--Gray)] text-sm mt-3">Link shortened</li>
          <li className="text-[var(--Gray)] text-sm mt-3">Branded Links</li>
          <li className="text-[var(--Gray)] text-sm mt-3">Analytics</li>
        </ul>
      </div>
      <div className="text-center">
        <h3 className="text-white font-bold tracking-wide text-base">
          Resources
        </h3>
        <ul>
          <li className="text-[var(--Gray)] text-sm mt-3">Blog</li>
          <li className="text-[var(--Gray)] text-sm mt-3">Developers</li>
          <li className="text-[var(--Gray)] text-sm mt-3">Support</li>
        </ul>
      </div>
      <div className="text-center">
        <h3 className="text-white font-bold tracking-wide text-base">Company</h3>
        <ul>
          <li className="text-[var(--Gray)] text-sm mt-3">About</li>
          <li className="text-[var(--Gray)] text-sm mt-3">Our Team</li>
          <li className="text-[var(--Gray)] text-sm mt-3">Careers</li>
          <li className="text-[var(--Gray)] text-sm mt-3">Contact</li>
        </ul>
      </div>
      <div className="text-center mt-5">
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
