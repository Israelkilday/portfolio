import "./Portfolio.css";
import styles from "./Portfolio.module.css";
import { useState, useEffect } from "react";
import Transition from "../../components/Transition";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import data from "./component/Projects";

const Portfolio = () => {
  const [slidePerview, setSlidePerview] = useState<number>(3);
  const [initialSlide] = useState<number>(1);
  const [transitionCompleted, setTransitionCompleted] = useState(false);

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
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Transition onAnimationComplete={() => setTransitionCompleted(true)}>
      {transitionCompleted && (
        <main className={styles.portfolio}>
          <h1 className={styles.heading}>
            <span>//</span> Principais <span>Projetos</span>
          </h1>

          <Swiper
            className="animation-cards"
            modules={[EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
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
              <SwiperSlide key={item.id}>
                <article className={styles.portfolio_container}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.item_slide}
                  />

                  <header className={styles.portfolio_content}>
                    <h2 className={styles.name}>{item.name}</h2>
                    <p className={styles.description}>{item.description}</p>

                    <section className={styles.technologies}>
                      <h3>Principais Tecnologias:</h3>

                      <ul>
                        {item.technologies &&
                          item.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                          ))}
                      </ul>
                    </section>

                    <section className={styles.links}>
                      <a
                        href={item.linkDeploy || ""}
                        target="blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                      >
                        Deploy
                        <FaExternalLinkAlt className={styles.icon} />
                      </a>

                      <a
                        href={item.linkRepository || ""}
                        className={styles.link}
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                        <FaGithub className={styles.icon} />
                      </a>
                    </section>
                  </header>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </main>
      )}
    </Transition>
  );
};

export default Portfolio;
