// CSS
import "./Portfolio.css"
import styles from "./Portfolio.module.css"
// HOOKS 
import { useState, useEffect, useRef } from "react";
// REACT ROUTER DOM
import { NavLink } from "react-router-dom";
// COMPONENT
import Transition from "../../components/Transition";
// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
// REACT ICONS
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// IMGAGENS
import Portfolio_img0 from "../../../public/imgs/project_0.png"
import Portfolio_img1 from "../../../public/imgs/project_1.jpg"
import Portfolio_img2 from "../../../public/imgs/project_2.png"
import Portfolio_img3 from "../../../public/imgs/project_3.png"

const Portfolio = () => {
  const [slidePerview, setSlidePerview] = useState<number>(3);
  const [initialSlide] = useState<number>(1)
  const [transitionCompleted, setTransitionCompleted] = useState(false);

  const data = [
    {
      id: 0,
      image: Portfolio_img0,
      name: "Secret World",
      description: "Jogo de adivinhação de palavras secretas desenvolvido utilizando React, Typescript, Vite e CSS Modules. Foi adotada uma abordagem de componentização para organizar e reutilizar o código de forma eficiente. Foram utilizados hooks como useState, useEffect e useRef para gerenciar o estado dos componentes, manipular efeitos colaterais e interagir com elementos do DOM de maneira declarativa.",
      technologies: [
        "React",
        "Custom hooks",
        "Typescript",
        "Javascript",
        "CSS Modules",
        "JSX",
        "Vite",
      ],
      linkDeploy: "https://israelkilday.github.io/Secret-Word/",
      linkRepository: "https://github.com/Israelkilday/Secret-Word",
    },
    {
      id: 1,
      image: Portfolio_img3,
      name: "BarberBlend",
      description: "Plataforma de agendamento online que simplifica o processo de reserva de horários em diversas barbearias. Neste projeto, implementei uma funcionalidade de agendamento e cancelamento intuitiva e sincronizada, permitindo aos usuários marcar e desmarcar serviços de forma fácil e eficiente",
      technologies: [
        "Next.14",
        "NextAuth.js",
        "Typescript",
        "Zod",
        "React.js",
        "React Hook Form",
        "TailwindCSS",
        "Shadcn/ui",
        "Prisma ORM",
        "Supabase",
        "PostgresSQL",
        "Date-fns",
      ],
      linkDeploy: "https://fullstack-barbershop.vercel.app/",
      linkRepository: "https://github.com/Israelkilday/BARBERBLEND",
    },
    {
      id: 2,
      image: Portfolio_img1,
      name: "Music Blog",
      description: "Single Page Application(SPA) fullstack desenvolvida utilizando React, Typescript e integração com Firebase e db Firestore. Ele inclui um contexto de autenticação que fornece informações sobre o usuário autenticado para os componentes da aplicação. Nele são armazenados dados de usuários, como imagens, títulos e conteúdo de postagens do Blog.",
      technologies: [
        "React",
        "React Router Dom",
        "Context API",
        "Typescript",
        "Javascript",
        "CSS Modules",
        "JSX",
        "Firebase",
        "Firestore",
        "Vite",
      ],
      linkDeploy: "https://musicblog-drab.vercel.app/",
      linkRepository: "https://github.com/Israelkilday/musicblog",
    },
    {
      id: 3,
      image: Portfolio_img2,
      name: "Rede Social feita com ReactJS",
      description: "Projeto em produção, estou me desafiando em fazer uma Rede social utilizando ReactJs e outras tecnologias, Trabalhando para que logo esteja disponível por aqui!",
      technologies: [
        "XXX",
        "XXX",
        "XXX",
      ],
      linkRepository: "https://github.com/Israelkilday",
    },
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 580) {
        setSlidePerview(1);
      } else {
        setSlidePerview(3);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  });

  return (
    <Transition onAnimationComplete={() => setTransitionCompleted(true)}>
      {transitionCompleted && (
        <section className={styles.portfolio}>
          <h2 className={styles.heading}><span>//</span> Principais <span>Projetos</span></h2>

          <Swiper
            className="animation-cards"
            modules={[EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={false}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}

            slidesPerView={slidePerview}
            pagination={{ clickable: true }}
            navigation
            initialSlide={initialSlide}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id} className="teste" >
                <div className={styles.portfolio_container}>
                  <img src={item.image}
                    alt={item.name}
                    className={styles.item_slide}
                  />
                  <div className={styles.portfolio_content}>
                    <h2 className={styles.name}>{item.name}</h2>
                    <p className={styles.description}>{item.description}</p>

                    <div className={styles.technologies}>
                      <h3>Principais Tecnologias:</h3>
                      <ul>
                        {item.technologies && item.technologies.map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.links}>
                      <NavLink
                        to={item.linkDeploy || ""}
                        className={styles.link}
                      >
                        Deploy
                        <FaExternalLinkAlt className={styles.icon} />
                      </NavLink>

                      <NavLink
                        to={item.linkRepository || ""}
                        className={styles.link}
                      >
                        GitHub
                        <FaGithub className={styles.icon} />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}
    </Transition>
  );
};

export default Portfolio;

