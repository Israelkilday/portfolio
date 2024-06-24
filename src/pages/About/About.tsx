import Transition from "../../components/Transition";
import { motion } from "framer-motion";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa6";
import { SiNestjs, SiPrisma, SiPostman } from "react-icons/si";
import {
  BiLogoTypescript,
  BiLogoReact,
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoFirebase,
  BiLogoRedux,
  BiLogoPostgresql,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { FaFigma, FaNodeJs } from "react-icons/fa";

const iconsBack = [
  { id: 0, img: FaNodeJs, name: "NodeJs" },
  { id: 1, img: SiNestjs, name: "NestJs" },
  { id: 2, img: SiPostman, name: "Postman" },
  { id: 3, img: SiPrisma, name: "Prisma" },
  { id: 4, img: BiLogoFirebase, name: "Firebase" },
  { id: 5, img: FaGitAlt, name: "Git" },
  { id: 6, img: BiLogoPostgresql, name: "PostgreSQL" },
];

const iconsFront = [
  { id: 0, img: TbBrandNextjs, name: "NextJs" },
  { id: 1, img: BiLogoReact, name: "React" },
  { id: 2, img: BiLogoRedux, name: "Redux" },
  { id: 3, img: BiLogoTypescript, name: "Typescript" },
  { id: 4, img: BiLogoCss3, name: "CSS" },
  { id: 5, img: BiLogoTailwindCss, name: "Tailwind" },
  { id: 6, img: FaFigma, name: "Figma" },
  { id: 7, img: BiLogoHtml5, name: "HTML" },
  { id: 8, img: BiLogoJavascript, name: "Javascript" },
];

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
      <div className="px-11 pt-48 md:px-[15%] lg:flex lg:px-[6%] lg:pr-0">
        <div className="mb-16 items-center justify-center rounded-xl border-[1px] border-solid border-white/10 bg-[linear-gradient(110deg,#1f242d,45%,#2a3a4a,55%,#1f242d)] bg-[length:400%_100%] bg-[position:50%_50%] px-10 pt-10 text-sm transition-colors lg:max-h-[450px] lg:max-w-[500px]">
          <div className="flex flex-col gap-2">
            <h3 className="bg-gradient-to-b from-[#0ef] to-white bg-clip-text text-5xl font-semibold text-transparent">
              Quem é Israel Kilday
            </h3>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.6,
                ease: [0.2, 0, 0.2, 1],
              }}
            >
              <p className="text-[15px] leading-[1.5] text-neutral-300">
                Iniciei minha jornada na área de tecnologia em 2022 praticando
                algoritmos e estruturas de dados, o que me estabeleceu uma base
                sólida para minha carreira. Atualmente, sou um desenvolvedor Web
                Full Stack e um solucionador de problemas com ampla experiência
                no uso das principais tecnologias do mercado, incluindo
                TypeScript, JavaScript, React, Node.js e PostgreSQL. Sou
                dedicado à implementação de boas práticas para garantir a
                eficiência, escalabilidade e manutenção dos projetos. Antes de
                ingressar na tecnologia, atuei por mais de dez anos na área de
                vendas, o que me proporcionou um conjunto valioso de soft
                skills, essenciais para qualquer equipe de desenvolvimento.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-between lg:min-w-[700px] lg:flex-row lg:pl-[6%]">
          <div className="mb-16 inline-flex items-center justify-center rounded-xl border-[1px] border-solid border-white/10 bg-[linear-gradient(110deg,#1f242d,45%,#2a3a4a,55%,#1f242d)] bg-[length:400%_100%] bg-[position:50%_50%] px-7 pb-11 pt-10 text-sm transition-colors lg:min-w-[500px]">
            <div>
              <h3 className="mb-7 border-solid bg-gradient-to-b from-[#0ef] to-white bg-clip-text text-3xl font-semibold text-transparent">
                Skills do Lado do Cliente:
              </h3>

              <motion.div
                className="grid min-w-full grid-cols-5 gap-5"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {iconsFront.map((icon) => {
                  return (
                    <motion.div
                      key={icon.id}
                      variants={item}
                      className="flex flex-col items-center"
                    >
                      <span className="text-center text-xl font-semibold tracking-[2px] text-neutral-200">
                        {icon.name}
                      </span>
                      <icon.img className="mt-2 text-left text-7xl text-[#0ef] lg:text-6xl" />
                    </motion.div>
                  );
                })}
              </motion.div>

              <h3 className="mb-7 mt-10 border-solid bg-gradient-to-b from-[#0ef] to-white bg-clip-text text-3xl font-semibold text-transparent">
                Skills do Lado do Servidor:
              </h3>

              <motion.div
                className="grid min-w-full grid-cols-5 gap-5"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {iconsBack.map((icon) => {
                  return (
                    <motion.div
                      key={icon.id}
                      variants={item}
                      className="flex flex-col items-center"
                    >
                      <span className="text-center text-xl font-semibold tracking-[2px] text-neutral-200">
                        {icon.name}
                      </span>
                      <icon.img className="mt-2 text-left text-7xl text-[#0ef] lg:text-6xl" />
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default About;
