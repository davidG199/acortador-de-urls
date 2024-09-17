import { useState } from "react";

function InputLink({ onNewLink }) {
  const [inputText, setInputText] = useState("");
  const [errorInput, setErrorInput] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputText.trim()) {
      setErrorInput(true);
      return;
    } else {
      try {
        //enviar la petición a la api
        const response = await fetch(
          //utilizo un proxy de terceros para evitar el problema de cors y codificamos la url
          "https://corsproxy.io/?" +
            encodeURIComponent("https://cleanuri.com/api/v1/shorten"),
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              url: inputText.trim(),
            }),
          }
        );

        if (response.ok) {
          //recibimos la respuesta de la api
          const data = await response.json();
          console.log("URL acortada:", data.result_url);
          if (data.result_url) {
            //si nuestra respuesta contiene la url, creamos un nuevo objeto
            const newLink = {
              originalUrl: inputText,
              shortenedUrl: data.result_url,
            };
            //llamamos al callback para agregar el nuevo link al componente padre
            onNewLink(newLink);
            //limpar el input
            setInputText("");
            setErrorInput(false);
          } else {
            console.log("No se pudo acortar la url");
          }
        } else {
          const errorData = await response.json();
          console.log("Error en la solicitud", errorData.error);
        }
      } catch (error) {
        console.error("Error en la petición:", error);
      }
    }
  };

  return (
    <div className="input-link mt-20 p-6 md:px-10 md:pt-10  bg-[var(--Dark-Violet)]  rounded-lg">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 w-full">
        <div className="flex-1 flex flex-col">
          <input
            type="url"
            placeholder="Shorten a link here..."
            className={`w-full py-3 px-5 rounded-lg text-base md:flex-1 md:py-4 ${
              errorInput ? " border-2 border-red-500 placeholder:text-red-500/50" : ""
            }`}
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
              setErrorInput(false);
            }}
          />
          <span className=" md:min-h-7">
            {errorInput && (
              <p className="text-red-500 text-[14px] mt-2 italic">Please add a link</p>
            )}
          </span>
        </div>

        <button
          className="mt-3 text-white bg-[var(--Cyan)] py-2 font-bold rounded-md md:py-4 md:px-8 md:mt-0 cursor-pointer hover:bg-[var(--Cyan-hover)]"
          type="submit"
          onClick={handleSubmit}
        >
          Shorten it!
        </button>
      </div>
    </div>
  );
}

export default InputLink;
