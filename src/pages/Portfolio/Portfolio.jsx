// CSS
import "./Portfolio.css"
import  styles from "./Portfolio.module.css"
// HOOKS 
import { useState, useRef } from "react";
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
          <h1 className="heading">Principais projetos</h1>
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
              <img src={Portfolio_img1} alt="project_0" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={Portfolio_img1} alt="project_1" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={Portfolio_img1} alt="project_2" />
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