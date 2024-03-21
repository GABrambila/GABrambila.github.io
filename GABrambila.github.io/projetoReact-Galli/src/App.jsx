import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contador from "./components/Contador";

const App = () => {
  const [darkmode, setDarkMode] = useState(false); 

  const alteraDarkMode = ()=>{
    console.log(1312); 
    setDarkMode(!darkmode);
};

  return (
    <div className={darkmode ? "modo-escuro" : ""}>
      <Header />
      <Contador/>
      Alterar cor de fundo
      <button onClick={alteraDarkMode}>Alterar</button>
      <Footer />
    </div>
  );
};

export default App; 