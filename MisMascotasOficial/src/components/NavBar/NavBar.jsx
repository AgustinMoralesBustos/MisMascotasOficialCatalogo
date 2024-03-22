import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {


    return (
        <nav className="menu">
            <section className='menu-container'>
                <NavLink className="menu-logo" to="/"><img src="/favicon-min.png" alt="Logo" width={100} /></NavLink>
                <ul className="menu-links">
                        <li className='menu-item menu-item-show'>
                            <NavLink className="menu-link menu-link-inside" to="/category/Nidos Rectangulares">Nidos<img src="/arrow.png" className='menu-arrow'/></NavLink>
                                <ul className='menu-nesting'>
                                    <li className='menu-inside'>
                                        <NavLink className="menu-link menu-link-inside" to="/category/Nidos Rectangulares Tela">Tela</NavLink>
                                    </li>
                                    <li className='menu-inside'>
                                        <NavLink className="menu-link menu-link-inside" to="/category/Nidos Rectangulares Lona">Lona</NavLink>
                                    </li>
                                    <li className='menu-inside'>
                                        <NavLink className="menu-link menu-link-inside" to="/category/Nidos Rectangulares Cuerina">Cuerina</NavLink>
                                    </li>
                                </ul>
                        </li>
                        <li className='menu-item menu-item-show'>
                            <NavLink className="menu-link menu-link-inside" to="/category/Moises">Moises<img src="/arrow.png" className='menu-arrow'/></NavLink>
                                <ul className='menu-nesting'>
                                    <li className='menu-inside'>
                                        <NavLink className="menu-link menu-link-inside" to="/category/Moises Tela">Tela</NavLink>
                                    </li>
                                    <li className='menu-inside'>
                                        <NavLink className="menu-link menu-link-inside" to="/category/Moises Lona">Lona</NavLink>
                                    </li>
                                    <li className='menu-inside'>
                                        <NavLink className="menu-link menu-link-inside" to="/category/Moises Cuerina">Cuerina</NavLink>
                                    </li>
                                </ul>
                        </li>
                        <li className='menu-item'>
                            <NavLink className="menu-link menu-link-inside" to="/category/Blandys">Blandys<img src="/arrow.png" className='menu-arrow'/></NavLink>
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
            </section>
        </nav>
    );
}