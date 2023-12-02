// CSS
import styles from "./Portfolio.module.css"
// COMPONENT
import Transition from "../../components/Transition";
// IMGAGENS
import Portfolio_img from "../Home/imgs/home_test_img_2.0.png"

const Portfolio = () => {
  // document.getElementById("root").appendChild(container);
  const slideRef = document.createElement("div");
  const loadingProgress = 0;

  const handleClickNext = () => {
    let items = slideRef.querySelectorAll(".item");
    slideRef.appendChild(items[0]);
  }

  const handleClickPrev = () => {
    let items = slideRef.querySelectorAll(".item");
    slideRef.prepend(items[items.length - 1]);
  }

  const data = [
    {
      project_0: <Portfolio_img />,
      name: "Secret Word",
      description: ""
    },

    {
      project_1: <Portfolio_img />,
      name: "Music Blog",
      description: ""
    }

  ];

  const container = document.createElement("div");
  container.classList.add("container");

  const loadbar = document.createElement("div");
  loadbar.classList.add("loadbar");
  loadbar.style.width = `${loadingProgress}%`

  // container.appendChild("loadbar");
  // container.appendChild("slideRef");

  data.forEach((item) => {
    const slideItem = document.createElement("div");
    slideItem.style.backgroundImage = item.project_0 

    const content = document.createElement("div");
    content.classList.add("content");

    const name = document.createElement("div");
    name.classList.add("name");
    name.textContent = item.name;

    const description_project = document.createElement("div");
    description_project.classList.add("description_project");
    description_project.textContent = item.description;

  });




  return (
    <Transition>
      <section className={styles.portfolio}></section>
      <div className={styles.container}>
        <div className={styles.item}></div>
        
        <div className={styles.item}></div>
      </div>
    </Transition>
  );
};

export default Portfolio;