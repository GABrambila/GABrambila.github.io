import React from "react";
import { Link } from "react-router-dom";




const Header = () => {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/About">Sobre</Link>
            <Link to="/Config">Configuração</Link>
        </header>);
};


export default Header; 