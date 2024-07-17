import styles from "./Home.module.css";
import Transition from "../../components/Transition";
import Home_img from "../../../public/imgs/home_test_img_2.0.png";
import ParticlesBackground from "../../components/ParticlesBackground";
import { motion } from "framer-motion";
import SocialMedia from "../../components/SocialMedia";

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

            <SocialMedia />

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
