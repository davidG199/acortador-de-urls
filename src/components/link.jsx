import React from "react";
function Link({ links }) {
  //Funcion para copiar el link acortado
  const handleCopy = (shortenedUrl) => {
    navigator.clipboard
      .writeText(shortenedUrl)
      .then(() => {
        alert("Link copaido al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar el link", err);
      });
  };
  return (
    <div className="mt-6">
      {/* la variable links evalua el localStorage para saber cuantos debe de renderizar */}
      {links.length === 0
        ? ""
        : links.map((link, index) => (
            <div
              key={index}
              className="
              mt-4 py-4 
              bg-gray-100
              rounded-lg shadow-lg 
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
                className="
                bg-[var(--Cyan)] 
                px-4 py-2 mt-4 mx-4 
                rounded-md 
                text-white font-bold text-[18px]"
                onClick={() => handleCopy(link.shortenedUrl)}
              >
                Copy
              </button>
            </div>
          ))}
    </div>
  );
}

export default Link;
