import { useState } from "react";

function InputLink({ onNewLink }) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputText) {
      alert("debes llenar el campo");
      return;
    } else {
      try {
        //enviar la petición a la api
        const response = await fetch(
          //utilizo un de terceros proxy para evitar el problema de cors y codificamos la url
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
    <div className="mt-20 p-6 bg-[var(--Dark-Violet)] bg-[url('../../images/bg-shorten-mobile.svg')] bg-right-top bg-no-repeat rounded-lg">
      <div className="flex flex-col gap-4 ">
        <input
          type="url"
          placeholder="Shorten a link here..."
          className="py-3 px-2 rounded-lg text-base"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="mt-5 text-white bg-[var(--Cyan)] py-2 font-bold rounded-lg"
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
