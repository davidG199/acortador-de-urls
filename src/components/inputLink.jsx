import { useState } from "react";

function InputLink() {
  const [inputText, setInputText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputText) {
      alert("Input is empty");
      return;
    } else {
      try {
        //enviar la petición al endpoint
        const response = await fetch(
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
          const data = await response.json();
          console.log("URL acortada:", data.result_url);
        } else {
          console.log("Error en la solicitud");
        }
      } catch (error) {
        console.error("Error en la petición:", error);
      }
    }
  };

  return (
    <div className="mt-20 p-6 bg-[var(--Dark-Violet)] bg-[url('../../images/bg-shorten-mobile.svg')] bg-right-top bg-no-repeat rounded-lg">
      <div className="flex flex-col ">
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
