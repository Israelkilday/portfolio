// CSS
import "./Portfolio.css"
import styles from "./Portfolio.module.css"
// HOOKS 
import { useState, useRef } from "react";
// REACT ROUTER DOM
import { NavLink } from "react-router-dom";
// COMPONENT
import Transition from "../../components/Transition";
// REACT ICONS
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// SWIPER
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules"
// IMGAGENS
import Portfolio_img1 from "../Home/imgs/teste00.png"

const Portfolio = () => {

  return (
    <Transition>
      {/* <section className={styles.portfolio}> */}
      <div className={styles.container}>
        <h1 className="heading"><span>//</span> Principais projetos</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}

          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <div className={styles.teste}>
              <img src={Portfolio_img1} alt="project_0" />

              <div className={styles.portfolio_content}>
                <h4 className={styles.name}>Project_0</h4>
                <p className={styles.description}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque in, iusto nisi magnam laudantium facere quas adipisci sequi cumque.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque in, iusto nisi magnam laudantium facere quas adipisci sequi cumque.
                </p>
                <div className={styles.links}>
                  <NavLink className={styles.link}>Deploy</NavLink>
                  <NavLink className={styles.link}>Saiba Mais</NavLink>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.teste}>
              <img src={Portfolio_img1} alt="project_1" />

              <div className={styles.portfolio_content}>
                <h4 className={styles.name}>Project_0</h4>
                <p className={styles.description}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque in, iusto nisi magnam laudantium facere quas adipisci sequi cumque.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque in, iusto nisi magnam laudantium facere quas adipisci sequi cumque.
                </p>
                <div className={styles.links}>
                  <NavLink className={styles.link}>Deploy</NavLink>
                  <NavLink className={styles.link}>Saiba Mais</NavLink>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.teste}>
              <img src={Portfolio_img1} alt="project_0" />

              <div className={styles.portfolio_content}>
                <h4 className={styles.name}>Project_2</h4>
                <p className={styles.description}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque in, iusto nisi magnam laudantium facere quas adipisci sequi cumque.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque in, iusto nisi magnam laudantium facere quas adipisci sequi cumque.
                </p>
                <div className={styles.links}>
                  <NavLink className={styles.link}>Deploy</NavLink>
                  <NavLink className={styles.link}>Saiba Mais</NavLink>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>

            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
      {/* </section> */}
    </Transition>
  );
};

export default Portfolio;



//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => {
//       const nextIndex = (prevIndex + 1) % itemsData.length;
//       console.log("Next Index:", nextIndex);
//       return nextIndex;

//     });
//   };

//   const handle
//             <div className={styles.content}>
//               <div className={styles.name}>{item.name}</div>
//               <div className={styles.description}>
//                 <p>{item.description}</p>
//               </div>
//               <button>Saiba Mais</button>
//             </div>
//
//         ))}
//         <div className={styles.navigate}>
//           <button className={styles.prev} onClick={handlePrev}>
//             <FaArrowLeft />
//           </button>
//           <button className={styles.next} onClick={handleNext}>
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </div>