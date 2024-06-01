import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-columns">
                    <div className="footer-column">
                        <h3>MisMascotas</h3>
                        <ul>
                        <li><NavLink to="/nosotros">Nosotros</NavLink></li>
                        <li><NavLink to="/preguntas-frecuentes">Preguntas frecuentes</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Tienda</h3>
                        <ul>
                            <li><NavLink to="/category/NidosRectangulares">Nidos</NavLink></li>
                            <li><NavLink to="/category/MoisesRedondos">Moises redondos</NavLink></li>
                            <li><NavLink to="/category/MoisesOvalados">Moises ovalados</NavLink></li>
                            <li><NavLink to="/category/Blandys">Blandys</NavLink></li>
                            <li><NavLink to="/category/Bolsos">Bolsos</NavLink></li>
                            <li><NavLink to="/category/Especiales">Especiales</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Contactanos</h3>
                        <ul>
                                <li><a href='https://wa.me/3513256330' target='_blank'>☎️ 3513256330</a></li>
                                <li>📍Cordoba, Argentina</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
