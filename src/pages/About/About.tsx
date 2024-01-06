// CSS
import styles from "./About.module.css"
// COMPONENT
import Transition from "../../components/Transition";
// IMGAGENS
import About_img from "../../../public/imgs/home_test_img_2.0.png";
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
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const About = () => {
  return (
    <Transition onAnimationComplete={() => { }}>
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
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.6,
                ease: [0.2, 0, 0.2, 1]
              }}
            >
              <h3>
                <span>//</span> Skills <span>&</span> Tolls
              </h3>
            </motion.div>

            <motion.div
              className={styles.icons_container}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>React</span>
                <BiLogoReact className={styles.react} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Redux</span>
                <BiLogoRedux className={styles.redux} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Typescript</span>
                <BiLogoTypescript className={styles.typescript} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Javascript</span>
                <BiLogoJavascript className={styles.javascript} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>MySQL</span>
                <GrMysql className={styles.mysql} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Bootstrap</span>
                <BiLogoBootstrap className={styles.bootstrap} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Git</span>
                <FaGitAlt className={styles.git} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>CSS</span>
                <BiLogoCss3 className={styles.css} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>HTML</span>
                <BiLogoHtml5 className={styles.html} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Firebase</span>
                <BiLogoFirebase className={styles.firebase} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Canva</span>
                <SiCanva className={styles.canva} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>VScode</span>
                <BiLogoVisualStudio className={styles.vscode} />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div>
          <motion.div className={styles.about_content}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.2, 0, 0.2, 1]
            }}
          >
            <h2><span>//</span> Quem é <span>Israel Kilday</span></h2>

            <p>
              - Olá, prazer em conhecer! Me chamo Israel Kilday.
              Desenvolvedor web apaixonado e dedicado, com uma sólida experiência de 15 anos na área de vendas trago de bagagem softs skills que julgo serem importantes para area de desenvolvimento, estou atualmente em transição de carreira para seguir minha paixão pela programação. Possuo um amplo conhecimento em tecnologias web, incluindo JavaScript, React e TypeScript. Entusiasmado em aprender e evoluir constantemente, estou comprometido em aplicar minha experiência para criar soluções web inovadoras e impactantes. Determinado a contribuir ativamente para projetos desafiadores e colaborar em equipes dinâmicas.
              Comunicativo por natureza, estou sempre pronto para desempenhar um papel em soluções inovadoras.
              Vamos construir algo incrível juntos!
            </p>
          </motion.div>
        </div>
      </section>
    </Transition>
  );
};

export default About;