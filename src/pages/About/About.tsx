import Transition from "../../components/Transition";
import { motion } from "framer-motion";
import { TbBrandNextjs, TbBrandPrisma } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa6";
import { SiNestjs, SiPostman, SiJest, SiVitest } from "react-icons/si";
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
  BiLogoFigma,
  BiLogoNodejs,
} from "react-icons/bi";

const iconsBack = [
  { id: 0, img: BiLogoNodejs, name: "NodeJs" },
  { id: 1, img: SiNestjs, name: "NestJs" },
  { id: 2, img: SiPostman, name: "Postman" },
  { id: 3, img: TbBrandPrisma, name: "Prisma" },
  { id: 4, img: BiLogoFirebase, name: "Firebase" },
  { id: 5, img: FaGitAlt, name: "Git" },
  { id: 6, img: BiLogoPostgresql, name: "PostgreSQL" },
  { id: 7, img: SiJest, name: "Jest" },
  { id: 7, img: SiVitest, name: "Vitest" },
];

const iconsFront = [
  { id: 0, img: TbBrandNextjs, name: "NextJs" },
  { id: 1, img: BiLogoReact, name: "React" },
  { id: 2, img: BiLogoRedux, name: "Redux" },
  { id: 3, img: BiLogoTypescript, name: "Typescript" },
  { id: 4, img: BiLogoCss3, name: "CSS" },
  { id: 5, img: BiLogoTailwindCss, name: "Tailwind" },
  { id: 6, img: BiLogoFigma, name: "Figma" },
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
      <main className="px-11 pt-48 md:px-[15%] lg:flex lg:px-[6%] lg:pr-0">
        <section className="mb-16 items-center justify-center rounded-xl border-[1px] border-solid border-white/10 bg-[linear-gradient(110deg,#1f242d,45%,#2a3a4a,55%,#1f242d)] bg-[length:400%_100%] bg-[position:50%_50%] px-10 pt-10 text-sm transition-colors lg:max-h-[415px] lg:min-w-[550px]">
          <header className="flex flex-col gap-2">
            <h1 className="bg-gradient-to-b from-[#0ef] to-white bg-clip-text text-5xl font-semibold text-transparent">
              Quem é Israel Kilday
            </h1>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.6,
                ease: [0.2, 0, 0.2, 1],
              }}
            >
              <p className="text-[15px] leading-[1.5] text-neutral-300 lg:text-[16px]">
                Iniciei minha jornada na área de tecnologia em 2021, praticando
                algoritmos e estruturas de dados, o que me estabeleceu uma base
                sólida para minha carreira. Atuo como desenvolvedor Web Full
                Stack e um solucionador de problemas com ampla experiência no
                uso das principais tecnologias do mercado, utilizo testes
                unitários e de integração com TDD garantindo a qualidade e
                confiabilidade do meu código. Proficiente no padrão MVC e outras
                abordagens para desenvolvimento estruturado. Entusiasta de boas
                práticas para garantir a escalabilidade e manutenção dos
                projetos. Atuei por mais de dez anos na área de vendas, o que me
                proporcionou habilidades interpessoais excepcionais para
                colaboração e trabalho em equipe.
              </p>
            </motion.div>
          </header>
        </section>

        <section className="flex w-full flex-col items-center justify-between lg:min-w-[700px] lg:flex-row lg:pl-[6%]">
          <div className="mb-16 inline-flex items-center justify-center rounded-xl border-[1px] border-solid border-white/10 bg-[linear-gradient(110deg,#1f242d,45%,#2a3a4a,55%,#1f242d)] bg-[length:400%_100%] bg-[position:50%_50%] pb-11 pt-10 text-sm transition-colors md:min-w-full lg:max-h-[415px] lg:min-w-[500px] lg:px-7">
            <header>
              <h2 className="mb-7 border-solid bg-gradient-to-b from-[#0ef] to-white bg-clip-text text-3xl font-semibold text-transparent">
                Skills do Lado do Cliente:
              </h2>

              <motion.ul
                className="grid min-w-full grid-cols-5 gap-5"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {iconsFront.map((icon) => {
                  return (
                    <motion.li
                      key={icon.id}
                      variants={item}
                      className="flex flex-col items-center"
                    >
                      <span className="text-center text-xl text-neutral-100">
                        {icon.name}
                      </span>
                      <icon.img className="mt-2 text-left text-7xl text-[#0ef] lg:text-6xl" />
                    </motion.li>
                  );
                })}
              </motion.ul>

              <h2 className="mb-7 mt-10 border-solid bg-gradient-to-b from-[#0ef] to-white bg-clip-text text-3xl font-semibold text-transparent">
                Skills do Lado do Servidor:
              </h2>

              <motion.ul
                className="grid min-w-full grid-cols-5 gap-5"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {iconsBack.map((icon) => {
                  return (
                    <motion.li
                      key={icon.id}
                      variants={item}
                      className="flex flex-col items-center"
                    >
                      <span className="text-center text-xl text-neutral-100">
                        {icon.name}
                      </span>
                      <icon.img className="mt-2 text-left text-7xl text-[#0ef] lg:text-6xl" />
                    </motion.li>
                  );
                })}
              </motion.ul>
            </header>
          </div>
        </section>
      </main>
    </Transition>
  );
};

export default About;
