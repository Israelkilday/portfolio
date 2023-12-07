// CSS
import styles from "./Portfolio.module.css"
// HOOKS 
import { useState } from "react";
// COMPONENT
import Transition from "../../components/Transition";
// IMGAGENS
import Portfolio_img from "../Home/imgs/home_test_img_2.0.png"
import Portfolio_img1 from "../Home/imgs/teste00.png"
import Portfolio_img2 from "../Home/imgs/teste01.png"
// REACT ICONS
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// SWIPER
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules"

const Portfolio = () => {

  return (
    <Transition>
      <section className={styles.portfolio}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Principais projetos</h1>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"4"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            
            
            pagination={{ el: '.swiper_pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper_button_next',
              prevEl: '.swiper_button_prev',
              clickable: true,
            }}
            modules={[Navigation, Pagination, EffectCoverflow]}
            className={styles.swiper_container}   
          >
            <SwiperSlide className={styles.swiper_slide}>
              <img src={Portfolio_img} alt="project_0" />
            </SwiperSlide>

            <SwiperSlide className={styles.swiper_slide}>
              <img src={Portfolio_img1} alt="project_1" />
            </SwiperSlide>

            <SwiperSlide className={styles.swiper_slide}>
              <img src={Portfolio_img2} alt="project_2" />
            </SwiperSlide>

            <SwiperSlide className={styles.swiper_slide}>
              <img src={Portfolio_img2} alt="project_3" />
            </SwiperSlide>
s
            <div className={styles.slider_controler}>
              <div className={`${styles.swiper_button_prev} ${styles.slider_arrow}`}>
                <FaArrowLeft />
              </div>

              <div className={`${styles.swiper_button_prev} ${styles.slider_arrow}`}>
                <FaArrowRight />
              </div>

              <div className={styles.swiper_pagination}></div>
            </div>
          </Swiper>
        </div>
      </section>
    </Transition>
  );
};

export default Portfolio;


















// const itemsData = [
//   {
//     name: "Project_1",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam reprehenderit at aperiam expedita maxime ratione, et dolorum illum rerum quasi soluta corporis obcaecati fugiat laudantium consectetur perferendis provident quis?",
//     image: Portfolio_img
//   },
//   {
//     name: "Project_2",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam reprehenderit at aperiam expedita maxime ratione, et dolorum illum rerum quasi soluta corporis obcaecati fugiat laudantium consectetur perferendis provident quis?",
//     image: Portfolio_img1
//   },
//   {
//     name: "Project_3",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam reprehenderit at aperiam expedita maxime ratione, et dolorum illum rerum quasi soluta corporis obcaecati fugiat laudantium consectetur perferendis provident quis?",
//     image: Portfolio_img2
//   },
//   {
//     name: "Project_4",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam reprehenderit at aperiam expedita maxime ratione, et dolorum illum rerum quasi soluta corporis obcaecati fugiat laudantium consectetur perferendis provident quis?",
//     image: Portfolio_img
//   },
//   {
//     name: "Project_5",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam reprehenderit at aperiam expedita maxime ratione, et dolorum illum rerum quasi soluta corporis obcaecati fugiat laudantium consectetur perferendis provident quis?",
//     image: Portfolio_img
//   },
//   {
//     name: "Project_6",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam reprehenderit at aperiam expedita maxime ratione, et dolorum illum rerum quasi soluta corporis obcaecati fugiat laudantium consectetur perferendis provident quis?",
//     image: Portfolio_img
//   }
// ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => {
//       const nextIndex = (prevIndex + 1) % itemsData.length;
//       console.log("Next Index:", nextIndex);
//       return nextIndex;

//     });
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => {
//       const newIndex = prevIndex === 0 ? itemsData.length - 1 : prevIndex - 1;
//       console.log("Previous Index:", newIndex);

//       return newIndex;
//     });
//   };

//     <div className={styles.container}>
//       <div className={styles.slide}>
//         {itemsData.map((item, index) => (
//           <div
//             key={index}
//             className={`${styles.item} ${index === currentIndex ? styles.active : ""}`}
//             style={{ backgroundImage: `url(${item.image})` }}
//           >
//             <div className={styles.content}>
//               <div className={styles.name}>{item.name}</div>
//               <div className={styles.description}>
//                 <p>{item.description}</p>
//               </div>
//               <button>Saiba Mais</button>
//             </div>
//           </div>
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