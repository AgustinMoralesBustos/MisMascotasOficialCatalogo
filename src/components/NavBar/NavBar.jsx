import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="menu ">
            <section className='menu-container'>
                <NavLink className="menu-logo" to="/"><img src="/favicon-min.png" alt="Logo" width={100} /></NavLink>
                <div>
                    <a href='https://wa.me/3513256330' target='_blank'>
                        <img className='whatsapp' src="/whatsapp.png" alt="" />
                    </a>
                </div>
                <ul className={`menu-links ${showMenu ? 'show' : ''} `}>
                    <li className='menu-item menu-item-show'>
                        <NavLink className="menu-link menu-link-inside" to="/category/NidosRectangulares">Nidos<img src="/arrow.png" className='menu-arrow' /></NavLink>
                        <ul className='menu-nesting'>
                            <li className='menu-inside'>
                                <NavLink className="menu-link menu-link-inside" to="/category/NidosRectangulares Tela">Tela</NavLink>
                            </li>
                            <li className='menu-inside'>
                                <NavLink className="menu-link menu-link-inside" to="/category/NidosRectangulares Lona">Lona</NavLink>
                            </li>
                            <li className='menu-inside'>
                                <NavLink className="menu-link menu-link-inside" to="/category/NidosRectangulares Cuerina">Cuerina</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className='menu-item menu-item-show'>
                        <NavLink className="menu-link menu-link-inside" to="/category/MoisesRedondos">Moises redondos<img src="/arrow.png" className='menu-arrow' /></NavLink>
                        <ul className='menu-nesting'>
                            <li className='menu-inside'>
                                <NavLink className="menu-link menu-link-inside" to="/category/MoisesRedondos Tela">Tela</NavLink>
                            </li>
                            <li className='menu-inside'>
                                <NavLink className="menu-link menu-link-inside" to="/category/MoisesRedondos Lona">Lona</NavLink>
                            </li>
                            <li className='menu-inside'>
                                <NavLink className="menu-link menu-link-inside" to="/category/MoisesRedondos Cuerina">Cuerina</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className='menu-item menu-item-show'>
                        <NavLink className="menu-link menu-link-inside" to="/category/MoisesOvalados">Moises ovalados<img src="/arrow.png" className='menu-arrow' /></NavLink>
                        <ul className='menu-nesting'>
                            <li className='menu-inside'>
                                <NavLink className="menu-link menu-link-inside" to="/category/MoisesOvalados Tela">Tela</NavLink>
                            </li>
                            <li className='menu-inside'>
                                <NavLink className="menu-link menu-link-inside" to="/category/MoisesOvalados Lona">Lona</NavLink>
                            </li>
                            <li className='menu-inside'>
                                <NavLink className="menu-link menu-link-inside" to="/category/MoisesOvalados Cuerina">Cuerina</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className='menu-item'>
                        <NavLink className="menu-link menu-link-inside" to="/category/Blandys">Blandys<img src="/arrow.png" className='menu-arrow' /></NavLink>
                        <ul className='menu-nesting'>
                            <li className='menu-inside'>
                                <NavLink className="menu-link menu-link-inside" to="/category/Blandys Tela">Tela</NavLink>
                            </li>
                            <li className='menu-inside'>
                                <NavLink className="menu-link menu-link-inside" to="/category/Blandys Lona">Lona</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className='menu-item menu-item-show'><NavLink className="menu-link menu-link-inside" to="/category/Bolsos">Bolsos</NavLink></li>
                    <li className='menu-item menu-item-show'><NavLink className="menu-link menu-link-inside" to="/category/Especiales">Especiales</NavLink></li>
                </ul>
                <div className="menu-hamburger" onClick={toggleMenu}>
                    <img src="/menu.png" alt="Menu" className="menu-img" />
                </div>
            </section>
        </nav>
    );
}
