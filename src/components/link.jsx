import { useState } from "react";

function Link({ links }) {
  const [copiedLink, setCopiedLink] = useState(null);

  //Funcion para copiar el link acortado
  const handleCopy = (shortenedUrl, index) => {
    navigator.clipboard
      .writeText(shortenedUrl)
      .then(() => {
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
              mt-4 py-4
              bg-slate-50/10
              rounded-lg shadow-2xl 
              flex flex-col"
            >
              <span className="border-b border-[var(--Gray)]">
                <p className="px-4 overflow-hidden pb-2 text-[18px]">
                  {link.originalUrl}
                </p>
              </span>
              <span className="px-4 pt-3">
                <a
                  href={link.shortenedUrl}
                  className="text-[var(--Cyan)] text-[18px]"
                  target="_blank"
                >
                  {link.shortenedUrl}
                </a>
              </span>
              <button
                className={`
                px-4 py-2 mt-4 mx-4 
                rounded-md 
                text-white font-bold text-[18px]
                ${
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
