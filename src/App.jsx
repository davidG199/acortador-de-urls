import { useEffect, useState } from "react";
import "./App.css";
import Boost from "./components/boost";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Info from "./components/info";
import InputLink from "./components/inputLink";
import Link from "./components/link";
import Nav from "./components/nav";

function App() {
  const [links, setLinks] = useState([]);

  // Cargar los links de localStorage al montar el componente
  useEffect(() => {
    const storedLinks =
      JSON.parse(localStorage.getItem("shortenedLinks")) || [];
    setLinks(storedLinks);
  }, []);

  // Callback para actualizar los enlaces después de acortar uno
  const addNewLink = (newLink) => {
    const updatedLinks = [newLink, ...links];
    setLinks(updatedLinks);
    localStorage.setItem("shortenedLinks", JSON.stringify(updatedLinks));
  };

  return (
    <>
      <main>
        <Nav />
        <section className="my-8 px-5 md:px-16 lg:px-28 md:my-20 bg-white">
          <Hero />
          <InputLink onNewLink={addNewLink} />
          {/* mandamos el link a la funcion para actualizar los enlaces del localStorage */}
          <Link links={links} />
        </section>
        <section className="bg-gray-200 pb-16 pt-5">
          <div className="px-5 md:px-16 lg:px-28 md:mb-32">
            <div className="text-center my-16 lg:w-1/2 mx-auto">
              <p className="font-bold text-[var(--Very-Dark-Violet)] text-2xl md:text-3xl">
                Advanced Statistics
              </p>
              <p className=" text-sm md:text-base text-[var(--Grayish-Violet)] mt-5 leading-6">
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </p>
            </div>
            <Info />
          </div>
        </section>
        <Boost />
      </main>
      <footer className="bg-[var(--Very-Dark-Violet)] py-10 md:py-16 md:px-10">
        <Footer />
      </footer>
    </>
  );
}

export default App;
