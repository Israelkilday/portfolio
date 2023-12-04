// CSS
import styles from "./Portfolio.module.css"
// HOOKS 
import { useState } from "react";
// COMPONENT
import Transition from "../../components/Transition";
// IMGAGENS
import Portfolio_img from "../Home/imgs/home_test_img_2.0.png"
// REACT ICONS
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";








 
const Portfolio = () => {
  const itemsData = [
    {
      name: "Project_1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam reprehenderit at aperiam expedita maxime ratione, et dolorum illum rerum quasi soluta corporis obcaecati fugiat laudantium consectetur perferendis provident quis?",
      image: Portfolio_img
    },
    {
      name: "Project_2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam reprehenderit at aperiam expedita maxime ratione, et dolorum illum rerum quasi soluta corporis obcaecati fugiat laudantium consectetur perferendis provident quis?",
      image: Portfolio_img
    },
    {
      name: "Project_3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam reprehenderit at aperiam expedita maxime ratione, et dolorum illum rerum quasi soluta corporis obcaecati fugiat laudantium consectetur perferendis provident quis?",
      image: Portfolio_img
    },
    {
      name: "Project_4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam reprehenderit at aperiam expedita maxime ratione, et dolorum illum rerum quasi soluta corporis obcaecati fugiat laudantium consectetur perferendis provident quis?",
      image: Portfolio_img
    },
    {
      name: "Project_5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam reprehenderit at aperiam expedita maxime ratione, et dolorum illum rerum quasi soluta corporis obcaecati fugiat laudantium consectetur perferendis provident quis?",
      image: Portfolio_img
    },
    {
      name: "Project_6",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam reprehenderit at aperiam expedita maxime ratione, et dolorum illum rerum quasi soluta corporis obcaecati fugiat laudantium consectetur perferendis provident quis?",
      image: Portfolio_img
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsData.length);
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? itemsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        {itemsData.map((item, index) => (
          <div
            key={index}
            className={`${styles.item} ${index === currentIndex ? styles.active : ""}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className={styles.content}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.description}>
                <p>{item.description}</p>
              </div>
              <button>Saiba Mais</button>
            </div>
          </div>
        ))}
        <div className={styles.navigate}>
          <button onClick={handlePrev}>
            <FaArrowLeft />
          </button>
          <button onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;





















// const next = document.querySelector(".next");
// const prev = document.querySelector(".prev");

// next.addEventListener("click", function() {
//   const items = document.querySelectorAll(".item");
//   document.querySelector(".slide").appendChild(items[0]);
// })

// next.addEventListener("click", function() {
//   const items = document.querySelectorAll(".item");
//   document.querySelector(".slide").prepend(items[items.length - 1]);
// })


//   return (
//     <Transition>
//       <div className={styles.container}>
//         <div className={styles.slide}>
//           {projects.map((item, index) => (
//             <div
//               key={index}
//               className={`${styles.item} ${index === currentIndex ? styles.active : ""}`}
//               style={{ backgroundImage: `url(${item.image})` }}
//             >  
//           )}
//               <div className={styles.content}>
//                 <div className={styles.item} style={{ backgroundImage: `url(${Portfolio_img})` }}>
//                   <div className={styles.name}>Project_1</div>
//                   <div className={styles.description}>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam reprehenderit at aperiam expedita maxime ratione, et dolorum illum rerum quasi soluta corporis obcaecati fugiat laudantium consectetur perferendis provident quis?
//                   </div>
//                   <button>Saiba Mais</button>
//                 </div>
//               </div>

//               <div className={styles.item} style={{ backgroundImage: `url(${Portfolio_img})` }}>
//                 <div className={styles.content}>
//                   <div className={styles.name}>Project_2</div>
//                   <div className={styles.description}>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam reprehenderit at aperiam expedita maxime ratione, et dolorum illum rerum quasi soluta corporis obcaecati fugiat laudantium consectetur perferendis provident quis?
//                     </p>
//                   </div>
//                   <button>Saiba Mais</button>
//                 </div>
//               </div>

//               <div className={styles.item} style={{ backgroundImage: `url(${Portfolio_img})` }}>
//                 <div className={styles.content}>
//                   <div className={styles.name}>Project_3</div>
//                   <div className={styles.description}>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam reprehenderit at aperiam expedita maxime ratione, et dolorum illum rerum quasi soluta corporis obcaecati fugiat laudantium consectetur perferendis provident quis?
//                     </p>
//                   </div>
//                   <button>Saiba Mais</button>
//                 </div>
//               </div>

//               <div className={styles.item} style={{ backgroundImage: `url(${Portfolio_img})` }}>
//                 <div className={styles.content}>
//                   <div className={styles.name}>Project_4</div>
//                   <div className={styles.description}>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam reprehenderit at aperiam expedita maxime ratione, et dolorum illum rerum quasi soluta corporis obcaecati fugiat laudantium consectetur perferendis provident quis?
//                     </p>
//                   </div>
//                   <button>Saiba Mais</button>
//                 </div>
//               </div>

//               <div className={styles.item} style={{ backgroundImage: `url(${Portfolio_img})` }}>
//                 <div className={styles.content}>
//                   <div className={styles.name}>Project_5</div>
//                   <div className={styles.description}>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam reprehenderit at aperiam expedita maxime ratione, et dolorum illum rerum quasi soluta corporis obcaecati fugiat laudantium consectetur perferendis provident quis?
//                     </p>
//                   </div>
//                   <button>Saiba Mais</button>
//                 </div>
//               </div>

//               <div className={styles.item} style={{ backgroundImage: `url(${Portfolio_img})` }}>
//                 <div className={styles.content}>
//                   <div className={styles.name}>Project_6</div>
//                   <div className={styles.description}>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam reprehenderit at aperiam expedita maxime ratione, et dolorum illum rerum quasi soluta corporis obcaecati fugiat laudantium consectetur perferendis provident quis?
//                     </p>
//                   </div>
//                   <button>Saiba Mais</button>
//                 </div>
//               </div>

//               <div className={styles.navigate}>
//                 <button className={styles.next}><FaArrowLeft /></button>
//                 <button className={styles.prev}><FaArrowRight /></button>
//               </div>

//             </div>
//       </div>
//     </Transition>
//   );
// };

// export default Portfolio;