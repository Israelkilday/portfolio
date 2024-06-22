import styles from "./About.module.css";
import Transition from "../../components/Transition";
import About_img from "../../../public/imgs/home_test_img_2.0.png";
import { motion } from "framer-motion";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa6";
import { SiCanva, SiNestjs, SiPrisma, SiTailwindcss } from "react-icons/si";
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
} from "react-icons/bi";
import { FaFigma, FaNodeJs } from "react-icons/fa";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const About = () => {
  return (
    <Transition onAnimationComplete={() => {}}>
      <div className="w-full px-11 pt-48">
        <div className="mb-10 inline-flex min-w-full max-w-[350px] items-center justify-center rounded-xl border border-white/10 bg-[linear-gradient(110deg,#1f242d,45%,#2a3a4a,55%,#1f242d)] bg-[length:400%_100%] bg-[position:50%_50%] px-7 pt-10 text-sm transition-colors">
          <div className="flex flex-col gap-2">
            <h3 className="bg-gradient-to-b from-[#0ef] to-white bg-clip-text text-3xl font-semibold text-transparent">
              Quem é Israel Kilday
            </h3>

            <p className="text-2xl leading-[1.5] text-neutral-300">
              Iniciei minha jornada na área de tecnologia em 2022 praticando
              algoritmos e estruturas de dados, o que me estabeleceu uma base
              sólida para minha carreira. Atualmente, sou um desenvolvedor Web
              Full Stack e um solucionador de problemas com ampla experiência no
              uso das principais tecnologias do mercado, incluindo TypeScript,
              JavaScript, React, Node.js e PostgreSQL. Sou dedicado à
              implementação de boas práticas para garantir a eficiência,
              escalabilidade e manutenção dos projetos. Antes de ingressar na
              tecnologia, atuei por mais de dez anos na área de vendas, o que me
              proporcionou um conjunto valioso de soft skills, essenciais para
              qualquer equipe de desenvolvimento.
            </p>
          </div>
        </div>

        <div>
          <div className="mb-10 inline-flex min-w-full max-w-[350px] items-center justify-center rounded-xl border border-white/10 bg-[linear-gradient(110deg,#1f242d,45%,#2a3a4a,55%,#1f242d)] bg-[length:400%_100%] bg-[position:50%_50%] px-7 pt-10 text-sm transition-colors">
            <div className="flex flex-col gap-2">
              <h3 className="bg-gradient-to-b from-[#0ef] to-white bg-clip-text text-3xl font-semibold text-transparent">
                Skills do Lado do Cliente (Frontend):
              </h3>

              <div className="grid"></div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default About;

{
  /* <section className={styles.about}>
        <motion.div
          className={styles.box_about}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0.2, 0, 0.2, 1],
          }}
        >
          <h2 className={styles.title_about_box}>
            <span>//</span> Quem é Israel Kilday
          </h2>

          <p className={styles.p_box_about}>
          </p>
        </motion.div>

        <div>
          <h2>teste</h2>
        </div>
      </section> */
}

{
  /* <div className={styles.container_img_skills}>
<div className={styles.skills}>
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 1,
      delay: 0.6,
      ease: [0.2, 0, 0.2, 1],
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
      <span className={styles.icon_descripition}>Figma</span>
      <FaFigma className={styles.icon} />
    </motion.div>

    <motion.div variants={item} className={styles.box_icon}>
      <span className={styles.icon_descripition}>Prisma</span>
      <SiPrisma className={styles.icon} />
    </motion.div>

    <motion.div variants={item} className={styles.box_icon}>
      <span className={styles.icon_descripition}>Next.js</span>
      <TbBrandNextjs className={styles.icon} />
    </motion.div>

    <motion.div variants={item} className={styles.box_icon}>
      <span className={styles.icon_descripition}>Node.js</span>
      <FaNodeJs className={styles.icon} />
    </motion.div>

    <motion.div variants={item} className={styles.box_icon}>
      <span className={styles.icon_descripition}>NestJS</span>
      <SiNestjs className={styles.icon} />
    </motion.div>
  </motion.div>
</div>
</div>

<div>
<motion.div
  className={styles.about_content}
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 1,
    delay: 0.6,
    ease: [0.2, 0, 0.2, 1],
  }}
>
  <h2>
    <span>//</span> Quem é <span>Israel Kilday</span>
  </h2>

  <p>
    Desenvolvedor Web Full stack e solucionador de problemas com ampla
    experiência no uso das principais tecnologias do mercado,
    incluindo Typerscript, JavaScript, React, Node.js e PostgreSQL.
    Comprometido com a implementação de boas práticas para garantir a
    eficiência, escalabilidade e manutenção dos projetos. Atuei por
    mais de dez anos na área de vendas, o que me proporcionou um
    conjunto de Soft Skills valiosas para qualquer equipe de
    desenvolvimento.
  </p>
</motion.div>
</div> */
}
