import styles from "./Home.module.css";
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
    <main>
      <Transition onAnimationComplete={() => {}}>
        <section className={styles.home}>
          <header className={styles.home_content}>
            <ParticlesBackground />

            <h3 className={styles.first_h3}>
              Inovando a cada <span>Byte</span>
            </h3>

            <h1 className={styles.animate_h1}>Israel Kilday</h1>

            <div className={styles.transparent_text}>
              <h3 className={styles.animation_text}>Software Developer</h3>
            </div>

            <article className={styles.social_media}>
              <motion.ul
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
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=5585989295516"
                    className={styles.whatsapp_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                </li>
              </motion.ul>

              <motion.ul
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
                <li>
                  <a
                    href="https://www.instagram.com/israelkilday/"
                    className={styles.instagram_link}
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </li>
              </motion.ul>

              <motion.ul
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
                <li>
                  <a
                    href="https://www.linkedin.com/in/israeldevfrontend"
                    className={styles.linkedin_link}
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </motion.ul>

              <motion.ul
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
                <li>
                  <a
                    href="https://github.com/Israelkilday"
                    className={styles.github_link}
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </li>
              </motion.ul>
            </article>

            <div className={styles.btn_box}>
              <a
                href="./cv/IsraelKilday_CV_atualizado_G.docx"
                download
                className={styles.btn}
                target="blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </header>

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
            <img src={Home_img} alt="Imagem de I.A de Israel Kilday" />
          </motion.div>
        </section>
      </Transition>
    </main>
  );
};

export default Home;
