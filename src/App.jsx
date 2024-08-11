import "./App.css";
import Boost from "./components/boost";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Info from "./components/info";
import InputLink from "./components/inputLink";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <main>
        <section className="mt-8 mx-5 bg-white">
          <Nav />
          <Hero />
          <InputLink />
        </section>
        <section className="bg-gray-200 pb-16">
          <div className="mx-5">
            <div className="text-center my-16">
              <p className="font-bold text-[var(--Very-Dark-Violet)] text-2xl">
                Advanced Statistics
              </p>
              <p className=" text-sm text-[var(--Grayish-Violet)] mt-5 leading-6">
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </p>
            </div>
            <Info />
          </div>
        </section>
        <Boost />
      </main>
      <footer className="bg-[var(--Very-Dark-Violet)] py-10">
        <Footer/>
      </footer>
    </>
  );
}

export default App;
