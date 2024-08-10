import "./App.css";
import Hero from "./components/hero";
import InputLink from "./components/inputLink";
import Nav from "./components/nav";

function App() {
  return (
    <main className="">
      <div className="my-8 mx-4 bg-white">
        <Nav />
        <Hero />
        <InputLink />
      </div>
      <div className="my-8 mx-4 bg-[var(--Gray)]">
      </div>
    </main>
  );
}

export default App;
