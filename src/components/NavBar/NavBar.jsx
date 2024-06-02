import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    }

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
                        <NavLink className="menu-link menu-link-inside" to="/category/NidosRectangulares" onClick={closeMenu}>Nidos<img src="/arrow.png" className='menu-arrow' /></NavLink>
                        <ul className='menu-nesting'>
                            <li className='menu-inside'>
                                <NavLink className="menu-link menu-link-inside" to="/category/NidosRectangulares Tela" onClick={closeMenu}>Tela</NavLink>
                            </li>
                            <li className='menu-inside'>
                                <NavLink className="menu-link menu-link-inside" to="/category/NidosRectangulares Lona" onClick={closeMenu}>Lona</NavLink>
                            </li>
                            <li className='menu-inside'>
                                <NavLink className="menu-link menu-link-inside" to="/category/NidosRectangulares Cuerina" onClick={closeMenu}>Cuerina</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className='menu-item menu-item-show'>
                        <NavLink className="menu-link menu-link-inside" to="/category/MoisesRedondos" onClick={closeMenu}>Moises redondos<img src="/arrow.png" className='menu-arrow' /></NavLink>
                        <ul className='menu-nesting'>
                            <li className='menu-inside'>
                                <NavLink className="menu-link menu-link-inside" to="/category/MoisesRedondos Tela" onClick={closeMenu}>Tela</NavLink>
                            </li>
                            <li className='menu-inside'>
                                <NavLink className="menu-link menu-link-inside" to="/category/MoisesRedondos Lona" onClick={closeMenu}>Lona</NavLink>
                            </li>
                            <li className='menu-inside'>
                                <NavLink className="menu-link menu-link-inside" to="/category/MoisesRedondos Cuerina" onClick={closeMenu}>Cuerina</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className='menu-item menu-item-show'>
                        <NavLink className="menu-link menu-link-inside" to="/category/MoisesOvalados" onClick={closeMenu}>Moises ovalados<img src="/arrow.png" className='menu-arrow' /></NavLink>
                        <ul className='menu-nesting'>
                            <li className='menu-inside'>
                                <NavLink className="menu-link menu-link-inside" to="/category/MoisesOvalados Tela" onClick={closeMenu}>Tela</NavLink>
                            </li>
                            <li className='menu-inside'>
                                <NavLink className="menu-link menu-link-inside" to="/category/MoisesOvalados Lona" onClick={closeMenu}>Lona</NavLink>
                            </li>
                            <li className='menu-inside'>
                                <NavLink className="menu-link menu-link-inside" to="/category/MoisesOvalados Cuerina" onClick={closeMenu}>Cuerina</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className='menu-item'>
                        <NavLink className="menu-link menu-link-inside" to="/category/Blandys" onClick={closeMenu}>Blandys<img src="/arrow.png" className='menu-arrow' /></NavLink>
                        <ul className='menu-nesting'>
                            <li className='menu-inside'>
                                <NavLink className="menu-link menu-link-inside" to="/category/Blandys Tela" onClick={closeMenu}>Tela</NavLink>
                            </li>
                            <li className='menu-inside'>
                                <NavLink className="menu-link menu-link-inside" to="/category/Blandys Lona" onClick={closeMenu}>Lona</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className='menu-item menu-item-show'><NavLink className="menu-link menu-link-inside" to="/category/Bolsos" onClick={closeMenu}>Bolsos</NavLink></li>
                    <li className='menu-item menu-item-show'><NavLink className="menu-link menu-link-inside" to="/category/Especiales" onClick={closeMenu}>Especiales</NavLink></li>
                </ul>
                <div className="menu-hamburger" onClick={toggleMenu}>
                    <img src="/menu.png" alt="Menu" className="menu-img" />
                </div>
            </section>
        </nav>
    );
}
