import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contador from "./components/Contador";
import Cookies from "js-cookie";

const App = () => {
  const [darkmode, setDarkMode] = useState(
    Cookies.get('dark-mode') === "true" ? true : false
  );

  const alteraDarkMode = () => {
    console.log(1312);
    setDarkMode(!darkmode);

    if (darkmode === false) {
      Cookies.set("dark-mode", false);
    } else {
      Cookies.set("dark-mode", true);
    }
  };

  return (<div className={`main ${darkmode ? "modo-escuro" : ""}`}>
    <Header />
    <Contador />
    Alterar cor de fundo
    <button onClick={alteraDarkMode}>Alterar</button>
    <Footer />
  </div>
  );
};

export default App; 