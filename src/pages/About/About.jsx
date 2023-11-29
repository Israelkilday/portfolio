// CSS
import styles from "./About.module.css"
// COMPONENT
import Transition from "../../components/Transition";
// IMGAGENS
import About_img from "../Home/imgs/home_test_img_2.0.png"
// REACT ROUTER DOM
import { NavLink } from "react-router-dom";
// FRAMER MOTION
import { motion } from "framer-motion";
// REACT ICONS
import { FaGitAlt } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { SiCanva } from "react-icons/si";
import {
  BiLogoTypescript,
  BiLogoReact,
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoFirebase,
  BiLogoRedux,
  BiLogoVisualStudio,
  BiLogoBootstrap
} from "react-icons/bi";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const About = () => {
  return (
    <Transition>
      <section className={styles.about}>
        <div className={styles.container_img_skills}>
          <motion.div
            initial={{ opacity: 0, y: "80%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{
              duration: 2,
              delay: 0.3,
              ease: [0.3, 0, 0.2, 1]
            }}
          >
            <img src={About_img} alt="about_img" />
          </motion.div>

          <div className={styles.skills}>
            <h3>
              <span>//</span> Skills <span>&</span> Tolls 
            </h3>

            <motion.div
              className={styles.icons_container}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={item}>
                <BiLogoReact className={styles.react} />
              </motion.div>

              <motion.div variants={item}>
                <BiLogoRedux className={styles.redux} />
              </motion.div>

              <motion.div variants={item}>
                <BiLogoTypescript className={styles.typescript} />
              </motion.div>

              <motion.div variants={item}>
                <BiLogoJavascript className={styles.javascript} />
              </motion.div>

              <motion.div variants={item}>
                <GrMysql className={styles.mysql} />
              </motion.div>

              <motion.div variants={item}>
                <BiLogoBootstrap className={styles.bootstrap} />
              </motion.div>

              <motion.div variants={item}>
                <FaGitAlt className={styles.git} />
              </motion.div>

              <motion.div variants={item}>
                <BiLogoCss3 className={styles.css} />
              </motion.div>

              <motion.div variants={item}>
                <BiLogoHtml5 className={styles.html} />
              </motion.div>

              <motion.div variants={item}>
                <BiLogoFirebase className={styles.firebase} />
              </motion.div>

              <motion.div variants={item}>
                <SiCanva className={styles.canva} />
              </motion.div>

              <motion.div variants={item}>
                <BiLogoVisualStudio className={styles.vscode} />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className={styles.about_overview}>
          <motion.div className={styles.about_content}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.2, 0, 0.2, 1]
            }}
          >
            <h2><span>//</span> Sobre <span>Mim</span></h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nihil cumque fugiat voluptas totam, rem magni? Ipsa, quas deleniti alias animi consequuntur provident minima accusantium fugit neque vero. Voluptas, beatae.
              Repellat, dignissimos! Ut consequuntur similique, natus soluta distinctio laborum assumenda minus quia cumque deleniti expedita explicabo eius esse impedit asperiores pariatur vitae, iste aspernatur. Assumenda cupiditate qui illum nesciunt deserunt?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore aspernatur fugit id perspiciatis enim, ut eveniet. Quia tempora dolor quos? Magnam, cupiditate earum nulla consequuntur expedita incidunt dolor reprehenderit at!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, molestiae enim facere minus maxime velit animi ea voluptate fugit similique odio consequuntur vitae assumenda autem dolores obcaecati id officiis nobis!</p>
          </motion.div>
        </div>

      </section>
    </Transition>
  );
};

export default About;