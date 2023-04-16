import react, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Work from "./components/Work";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleDark = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <button
        type="button"
        onClick={handleDark}
        className="fixed z-10 right-2 top-2 bg-indigo-400 text-lg rounded-md p-2"
      >
        {theme === "dark" ? "l" : "d"}
      </button>
      <div className=" bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto w-11/12">
          <Hero />
          <Service />
          <Work />
          <About />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
