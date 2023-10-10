// HOOKS
import { useState } from "react";
// REACT ROUTER DOM
import { NavLink } from "react-router-dom";
// REACT ICONS
import { FaMoon, FaSun, FaPalette } from "react-icons/fa6";
// CSS 
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [paletteOpen, setPaletteOpen] = useState(false);

    const handlePaletteToggle = () => {
        setPaletteOpen(!paletteOpen);
    }

    return (
        <header className={styles.header}>
            <NavLink to={"/"} className={styles.logo}>
                &lt; <span className={styles.logo_span}>I.K DEV</span>/&gt;
            </NavLink>

            <nav className={styles.navbar}>
                <NavLink to="/"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                >Home
                </NavLink>

                <NavLink to="/about"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                >Sobre
                </NavLink>

                <NavLink to="/skills"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                >Skills
                </NavLink>

                <NavLink to="/portfolio"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                >Portfolio
                </NavLink>

                <NavLink to="/contact"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                >Contato
                </NavLink>
            </nav>

            <div className={styles.icons_container}>
                <label>
                    <input type="checkbox" className={styles.input_darc_light_mode} />
                    <FaMoon className={styles.moon_icon} />
                    <FaSun className={styles.sun_icon} />
                </label>

                <label>
                    <input onClick={handlePaletteToggle} 
                           type="checkbox" 
                           className={styles.input_palette_colors}
                    />

                    <FaPalette className={styles.palette} />

                    <div className={styles.toggle_palette_theme}></div>
                    {paletteOpen && styles.toggle_palette_theme.palette_open}
                </label>

            </div>
        </header>
    );
};

export default Navbar;
