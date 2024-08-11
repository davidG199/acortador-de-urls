import heroIcon from "../../images/illustration-working.svg";

function Hero() {
  return (
    <div className="text-center grid grid-cols-1 md:grid-cols-2">
      <picture className="mt-5 md:order-2">
        <img src={heroIcon} alt="heroIcon" className="h-[310px]" />
      </picture>  
      <div className="mt-8 md:text-left md:order-1">
        <h1 className=" text-4xl font-bold text-[var(--Very-Dark-Blue)]">More than just shorter links</h1>
        <p className="text-[var(--Grayish-Violet)] mt-3 text-base">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="mt-7 bg-[var(--Cyan)] px-8 py-3 text-white font-bold rounded-full">Get Started</button>
      </div>
    </div>
  );
}

export default Hero;
