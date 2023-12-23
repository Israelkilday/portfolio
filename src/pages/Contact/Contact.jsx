// CSS
import styles from "./Contact.module.css"
// COMPONENT
import Transition from "../../components/Transition";

const Contact = () => {
  return (
    <Transition>
      <section className={styles.contact}>
        <h2>Contate <span>Me!</span></h2>

        <form>
          <div className={styles.input_box}>
            <input type="text" placeholder="Nome Completo" />
            <input type="email" placeholder="Email" />
          </div>

          <div className={styles.input_box}>
            <input type="number" placeholder="Telefone" />
            <input type="email" placeholder="Assunto do Email" />
          </div>

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Sua Mensagem"
          ></textarea>

          <div className={styles.btn_box}>
            <button type="submit" className={styles.btn}>
              Enviar Mensagem
            </button>
          </div>
        </form>
      </section>
    </Transition>
  );
};

export default Contact;