import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

const Header = () => {
    return (
        <div>
            <header className={s.header}>
                <NavLink to="/" className={s.header__logo}></NavLink>
                <nav className={s.header__menu}>
                    <ul className={s.header__list}>
                        <NavLink to="/" className = { navData => navData.isActive ? s.active : s.item }>Home</NavLink>
                        <NavLink to="/About" className = { navData => navData.isActive ? s.active : s.item }>About</NavLink>
                        <a href="https://github.com/IlyaRebrov2022?tab=repositories" target="_blank"  className={s.linksBtn}>Portfolio</a>
                        <a href="mailto:ilyarebrov.dev@gmail.com"  className={s.linksBtn}>Contact</a>
                    </ul>
                </nav>
            </header>
        </div>
    )
}


export default Header;