// REACT ROUTER DOM
import { NavLink } from "react-router-dom";
// REACT ICONS
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
// IMGAGENS
import Home_img from "./imgs/home_new_img2.png"
// CSS
import styles from "./Home.module.css"
// PARTICLES
import ParticlesBackground from '../../components/ParticlesBackground';

const Home = () => {
    return (
        <>
            <section className={styles.home}>
                <div className={styles.home_content}>
                    <ParticlesBackground />
                    <h3>Olá eu sou</h3>
                    <h1>Israel Kilday</h1>
                    <div className={styles.transparent_text}>
                        <h3 className={styles.animation_text}>Front-End Developer</h3>
                    </div>

                    <div className={styles.social_media}>
                        <NavLink to="#" className={styles.whatsapp_link}>
                            <FaWhatsapp />
                        </NavLink>
                        <NavLink to="#" className={styles.instagram_link}>
                            <FaInstagram />
                        </NavLink>
                        <NavLink to="#" className={styles.linkedin_link}>
                            <FaLinkedinIn />
                        </NavLink>
                        <NavLink to="#" className={styles.github_link}>
                            <FaGithub />
                        </NavLink>
                    </div>
                </div>

                <div className={styles.home_img}>
                    <img src={Home_img} alt="home_img" />
                </div>
            </section>
        </>
    )
};

export default Home; 