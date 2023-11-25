// CSS
import styles from "./About.module.css"
// COMPONENT
import Transition from "../../components/Transition";
// IMGAGENS
import About_img from "../Home/imgs/home_test_img_2.0.png"
// REACT ROUTER DOM
import { NavLink } from "react-router-dom";
// REACT ICONS
import { FaReact } from "react-icons/fa6";

const About = () => {
  return (
    <Transition>
      <section className={styles.about}>
        <div className={styles.about_img_CV}>
          <img src={About_img} alt="about_img" />

          <div className={styles.btn_box}>
            <NavLink className={styles.btn}>Download CV</NavLink>
          </div>

        </div>

        <div className={styles.about_overview}>
          <div className={styles.about_content}>
            <h2><span>//</span> Sobre <span>Mim</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nihil cumque fugiat voluptas totam, rem magni? Ipsa, quas deleniti alias animi consequuntur provident minima accusantium fugit neque vero. Voluptas, beatae.
              Repellat, dignissimos! Ut consequuntur similique, natus soluta distinctio laborum assumenda minus quia cumque deleniti expedita explicabo eius esse impedit asperiores pariatur vitae, iste aspernatur. Assumenda cupiditate qui illum nesciunt deserunt?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore aspernatur fugit id perspiciatis enim, ut eveniet. Quia tempora dolor quos? Magnam, cupiditate earum nulla consequuntur expedita incidunt dolor reprehenderit at!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, molestiae enim facere minus maxime velit animi ea voluptate fugit similique odio consequuntur vitae assumenda autem dolores obcaecati id officiis nobis!</p>
          </div>

          <div className={styles.skills}>
            <h3>
              <span>//</span> Skills <span>&</span> Tolls <span>=&gt;</span> 
            </h3>
            <div className={styles.react_container}>
              <FaReact className={styles.react} />
            </div>
          </div>
        </div>

      </section>
    </Transition>
  )
}

export default About;