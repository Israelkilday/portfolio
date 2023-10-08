import { NavLink } from "react-router-dom";
// CSS 
import styles from "./Navbar.module.css";
import 'boxicons/css/boxicons.css';


const Navbar = () => {
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

            <div class="icons_container">
                <label>
                    <input type="checkbox" className={`${styles.input_darc_light_mode} input_checkbox`} />
                    <i className={`${styles.bx} ${styles['bxs-sun']} sun`} />
                    <i className={`${styles.bx} ${styles['bxs-moon']} moon`} />
                </label>


                
            </div>
        </header>
    );
};

export default Navbar;
