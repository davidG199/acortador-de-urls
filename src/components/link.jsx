import { useState } from "react";

function Link({ links }) {
  //manejo de estados para el boton de copiar
  const [copiedLink, setCopiedLink] = useState(null);

  //Funcion para copiar el link acortado
  const handleCopy = (shortenedUrl, index) => {
    navigator.clipboard
      .writeText(shortenedUrl)
      .then(() => {
        //pasamos el indice para saber a que boton se le da click
        setCopiedLink(index);
      })
      .catch((err) => {
        console.error("Error al copiar el link", err);
      });
  };
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* la variable links evalua el localStorage para saber cuantos debe de renderizar */}
      {links.length === 0
        ? ""
        : links.map((link, index) => (
            <div
              key={index}
              className="
              link-box
              mt-4 py-4
              md:px-6
              bg-slate-50/10
              rounded-lg 
              flex flex-col
              md:flex-row md:justify-around lg:justify-between"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-2 lg:gap-24">
                <span className="border-b border-[var(--Gray)] md:border-none sm:w-full md:w-[250px] lg:w-[300px]">
                  <p className="px-4 pb-2 md:p-0 overflow-hidden text-[18px]">
                    {link.originalUrl}
                  </p>
                </span>
                <span className="">
                  <a
                    href={link.shortenedUrl}
                    className="text-[var(--Cyan)] text-[18px] px-4"
                    target="_blank"
                  >
                    {link.shortenedUrl}
                  </a>
                </span>
              </div>

              <button
                className={`
                  px-4 py-2 mt-4 mx-4 
                  md:m-0 md md:w-28
                  rounded-md 
                  text-white font-bold text-[18px]
                  cursor-pointer hover:bg-[var(--Cyan-hover)]
                  ${
                    // clases condicionales segun la variable de estado
                    copiedLink === index
                      ? "bg-[var(--Dark-Violet)]"
                      : "bg-[var(--Cyan)]"
                  }`}
                onClick={() => handleCopy(link.shortenedUrl, index)}
              >
                {copiedLink === index ? "Copied!" : "copy"}
              </button>
            </div>
          ))}
    </div>
  );
}

export default Link;
