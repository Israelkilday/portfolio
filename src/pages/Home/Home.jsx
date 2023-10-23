// CSS
// import "./Home.css"
import styles from "./Home.module.css"
// REACT ROUTER DOM
import { NavLink } from "react-router-dom";
// COMPONENTS
import Transition from '../../components/Transition';
// REACT ICONS
// import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
// IMGAGENS
import Home_img from "./imgs/home_new_img2.png"
// PARTICLES
import ParticlesBackground from '../../components/ParticlesBackground';
// GSAP
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import { motion } from "framer-motion";

// HOOKS
import { useLayoutEffect, useEffect, useRef } from "react";

const Home = () => {
    const transitionPages = gsap.timeline();

    // useLayoutEffect(() => { 
    //     gsap.to("h3", {
    //         x: 0,
    //         opacity: 1,
    //         delay: 0.4

    //     })

    //     gsap.to("h1", {
    //         x: 0,
    //         opacity: 1,
    //         delay: 0.8
    //     })

    //     gsap.to(".animation_text", {
    //         x: 0,
    //         opacity: 1,
    //         delay: 1
    //     });

    //     return () => {
    //         gsap.killTweensOf("h3,h1");
    //     }
    // }, []);


    // const home = gsap.timeline();
    // const homeh3 = useRef(null);
    // // const homeImg = useRef(null);

    // useEffect(() => {
    //     home.from(homeh3.current, {
    //         duration: .7,
    //         // skewX: 10,
    //         x: 0,
    //         scale: 1,
    //         opacity: 1,
    //         ease: "power2.out",
    //     })
    // },"-=3.5")

    return (
        <>
            <Transition timeline={transitionPages} />

            <section className={styles.home}>
                <div className={styles.home_content}>
                    <ParticlesBackground />

                    <motion.h3
                        initial={{ opacity: 0, scaleY: 0, x: "-100%" }}
                        animate={{ opacity: 1, scaleY: 1, x: "0%" }}
                        transition={{
                            duration: 0.8,
                            delay: 0.4,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >Olá eu sou</motion.h3>

                    <motion.h1
                        initial={{ opacity: 0, scaleY: 0, x: "-100%" }}
                        animate={{ opacity: 1, scaleY: 1, x: "0%" }}
                        transition={{
                            duration: 0.8,
                            delay: 0.8,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}

                    >Israel Kilday</motion.h1>




                    <motion.div className={styles.transparent_text}
                        initial={{ opacity: 0, scale: 0.5,   }}
                        animate={{ opacity: 1, scale: 1,   }}
                        transition={{
                            duration: 0.3,
                            delay: 1.4,
                            ease: [0, 0.71, 0.2, 1.01],
                            scale: {
                                type: "spring",
                                damping: 9,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }}
                    >

                        <h3 className={styles.animation_text}>Front-End Developer</h3>
                    </motion.div>

                    {/* <div className={styles.social_media}>
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
                    </div> */}
                </div>

                <div className={styles.home_img}>
                    <img src={Home_img} alt="home_img" />
                </div>
            </section>
        </>
    )
};

export default Home; 