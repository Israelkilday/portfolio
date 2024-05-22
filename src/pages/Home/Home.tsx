import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";
import Transition from "../../components/Transition";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import Home_img from "../../../public/imgs/home_test_img_2.0.png";
import ParticlesBackground from "../../components/ParticlesBackground";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Transition onAnimationComplete={() => {}}>
        <section className={styles.home}>
          <div className={styles.home_content}>
            <ParticlesBackground />

            <h3 className={styles.first_h3}>
              Inovando a cada <span>Byte</span>
            </h3>

            <h1 className={styles.animate_h1}>Israel Kilday</h1>

            <div className={styles.transparent_text}>
              <h3 className={styles.animation_text}>Software Developer</h3>
            </div>

            <div className={styles.social_media}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 3,
                  delay: 1.2,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
              >
                <NavLink
                  to="https://api.whatsapp.com/send?phone=5585989295516"
                  className={styles.whatsapp_link}
                >
                  <FaWhatsapp />
                </NavLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 3,
                  delay: 1.5,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
              >
                <NavLink
                  to="https://www.instagram.com/israelkilday/"
                  className={styles.instagram_link}
                >
                  <FaInstagram />
                </NavLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 1.7,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
              >
                <NavLink
                  to="https://www.linkedin.com/in/israeldevfrontend"
                  className={styles.linkedin_link}
                >
                  <FaLinkedinIn />
                </NavLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 3,
                  delay: 1.9,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
              >
                <NavLink
                  to="https://github.com/Israelkilday"
                  className={styles.github_link}
                >
                  <FaGithub />
                </NavLink>
              </motion.div>
            </div>

            <div className={styles.btn_box}>
              <a
                href="./cv/IsraelKilday_CV_atualizado_G.docx"
                download
                className={styles.btn}
              >
                Download CV
              </a>
            </div>
          </div>

          <motion.div
            className={styles.home_img}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{
              duration: 2,
              delay: 0.7,
              ease: [0.2, 0, 0.2, 1],
            }}
          >
            <img src={Home_img} alt="home_img" />
          </motion.div>
        </section>
      </Transition>
    </>
  );
};

export default Home;
