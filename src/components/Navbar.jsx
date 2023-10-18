// HOOKS
import { useState, useEffect, useRef } from "react";
// REACT ROUTER DOM
import { NavLink } from "react-router-dom";
// REACT ICONS
import { FaMoon, FaSun, FaPalette } from "react-icons/fa6";
// CSS 
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [lightMode, setLightMode] = useState(false);
    const [paletteOpen, setPaletteOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState(null);
    const [paletteInputInvisible, setPaletteInputInvisible] = useState(false);


    const handleToggleLightMode = () => {
        setLightMode(!lightMode);
        setPaletteInputInvisible(!lightMode);
    }

    const handlePaletteToggle = () => {
        setPaletteOpen(!paletteOpen)
    }

    const handleColorSelection = (color) => {
        setSelectedColor(color);
    }

    useEffect(() => {
        if (lightMode) {
            document.body.classList.add('light_mode');
        } else {
            document.body.classList.remove('light_mode');
        }

        if (selectedColor === "ball_0") {
            document.documentElement.style.setProperty("--main_color", "#ffb703");
        }

        if (selectedColor === "ball_1") {
            document.documentElement.style.setProperty("--text_color", "#8ecae6");
        }

        if (selectedColor === "ball_2") {
            document.documentElement.style.setProperty("--main_color", "#3a86ff");
        }

        if (selectedColor === "ball_3") {
            document.documentElement.style.setProperty("--text_color", "#eb5e28");
        }

        if (selectedColor === "ball_4") {
            document.documentElement.style.setProperty("--main_color", "#0ef");
            document.documentElement.style.setProperty("--text_color", "#fff");
        }

    }, [lightMode, selectedColor]);

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
                    <input
                        type="checkbox"
                        className={styles.input_darc_light_mode}
                        onClick={handleToggleLightMode}
                    />

                    <FaMoon className={styles.moon_icon} />
                    <FaSun className={styles.sun_icon} />
                </label>

                <label style={{display: paletteInputInvisible ? "none" : ""}}>
                    <input
                        type="checkbox"
                        className={styles.input_palette_colors}
                        onClick={handlePaletteToggle}
                    />

                    <FaPalette className={styles.palette} />

                    <div className={`${styles.toggle_palette_theme}
                         ${paletteOpen ? styles.palette_open : ""}`}
                    >
                        <button className={`${styles.ball} ${styles.ball_0}`}
                            style={{ "--p": 1 }}
                            onClick={() => handleColorSelection("ball_0")}
                        ></button>

                        <button className={`${styles.ball} ${styles.ball_1}`}
                            style={{ "--p": 2 }}
                            onClick={() => handleColorSelection("ball_1")}
                        ></button>

                        <button className={`${styles.ball} ${styles.ball_2}`}
                            style={{ "--p": 3 }}
                            onClick={() => handleColorSelection("ball_2")}
                        ></button>

                        <button className={`${styles.ball} ${styles.ball_3}`}
                            style={{ "--p": 4 }}
                            onClick={() => handleColorSelection("ball_3")}
                        ></button>

                        <button className={`${styles.ball} ${styles.ball_4}`}
                            style={{ "--p": 5 }}
                            onClick={() => handleColorSelection("ball_4")}
                        ></button>
                    </div>
                </label>
            </div>
        </header>
    );
};

export default Navbar;
