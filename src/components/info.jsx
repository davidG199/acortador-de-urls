import brand from "../../images/icon-brand-recognition.svg";
import records from "../../images/icon-detailed-records.svg";
import fully from "../../images/icon-fully-customizable.svg";

function Info() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-20">
      <article className="p-5 bg-white rounded grid justify-items-center">
        <img
          src={brand}
          alt="brand"
          className="
          bg-[var(--Dark-Violet)] 
          rounded-full max-w-full
          relative
          p-5 -mt-14"
        />
        <p className="text-[var(--Very-Dark-Blue)] text-xl font-bold mt-6">
          Bran Recognition
        </p>
        <p className="text-sm text-[var(--Grayish-Violet)] text-center my-2 leading-6">
          Boost your brand recognition with each. Generic links don't mean a
          thing. Branded links help instil confidence in your content.
        </p>
      </article>
      <article className="p-5 bg-white rounded grid justify-items-center">
        <img
          src={records}
          alt="records"
          className="
          bg-[var(--Dark-Violet)] 
          rounded-full max-w-full
          relative
          p-5 -mt-14"
        />
        <p className="text-[var(--Very-Dark-Blue)] text-xl font-bold mt-6">
          detailed Records
        </p>
        <p className="text-sm text-[var(--Grayish-Violet)] text-center my-2 leading-6">
          Gain insights into who is clicking your links. knowing when and where
          people engage with your content helps inform betters decisions.
        </p>
      </article>
      <article className="p-5 bg-white rounded grid justify-items-center">
        <img
          src={fully}
          alt="fully"
          className="
          bg-[var(--Dark-Violet)] 
          rounded-full max-w-full
          relative
          p-5 -mt-14"
        />
        <p className="text-[var(--Very-Dark-Blue)] text-xl font-bold mt-6">
          Fully Customizable
        </p>
        <p className="text-sm text-[var(--Grayish-Violet)] text-center my-2 leading-6">
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </article>
    </div>
  );
}

export default Info;
