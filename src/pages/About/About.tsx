// CSS
import styles from "./About.module.css"
// COMPONENT
import Transition from "../../components/Transition";
// IMGAGENS
import About_img from "../../../public/imgs/home_test_img_2.0.png";
// FRAMER MOTION
import { motion } from "framer-motion";
// REACT ICONS
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa6";
import { SiCanva, SiMongodb, SiPrisma, SiTailwindcss } from "react-icons/si";
import {
  BiLogoTypescript,
  BiLogoReact,
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoFirebase,
  BiLogoRedux,
  BiLogoVisualStudio,
  BiLogoPostgresql,
  // BiLogoBootstrap
} from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";

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
                <BiLogoReact className={styles.icon} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Redux</span>
                <BiLogoRedux className={styles.icon} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Typescript</span>
                <BiLogoTypescript className={styles.icon} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Javascript</span>
                <BiLogoJavascript className={styles.icon} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>PostgreSQL</span>
                <BiLogoPostgresql className={styles.icon} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Tailwind</span>
                <SiTailwindcss className={styles.icon} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Git</span>
                <FaGitAlt className={styles.icon} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>CSS</span>
                <BiLogoCss3 className={styles.icon} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>HTML</span>
                <BiLogoHtml5 className={styles.icon} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Firebase</span>
                <BiLogoFirebase className={styles.icon} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Canva</span>
                <SiCanva className={styles.icon} />
              </motion.div>

              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>VScode</span>
                <BiLogoVisualStudio className={styles.icon} />
              </motion.div>
              
              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Prisma</span>
                <SiPrisma className={styles.icon} />
              </motion.div>
              
              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Next.js</span>
                <TbBrandNextjs  className={styles.icon} />
              </motion.div>
              
              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>Node.js</span>
                <FaNodeJs className={styles.icon}/>
              </motion.div>
              
              <motion.div variants={item} className={styles.box_icon}>
                <span className={styles.icon_descripition}>MongoDB</span>
                <SiMongodb className={styles.icon}/>
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