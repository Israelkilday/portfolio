// CSS
import styles from "./Contact.module.css"
// COMPONENT
import Transition from "../../components/Transition";

const Contact = () => {

  return (
    <Transition>
      <section className={styles.contact}>
        <h2>
          Contate <span>Me!</span>
        </h2>

        <form>
          <div className={styles.input_box}>
            <input type="text" placeholder="Nome Completo" className={styles.input_name} />
            <input type="email" placeholder="Email" className={styles.input_email} />
          </div>

          <div className={styles.input_box}>
            <input type="number" placeholder="Telefone" className={styles.input_fone} />
            <input type="email" placeholder="Assunto do Email" className={styles.input_subject}/>
          </div>

            <textarea
              className={styles.input_textarea}
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

            {/* <span className={styles.animate} style={{ "--i": 7 }}></span> */}
          </div>
        </form>
      </section>
    </Transition>
  );
};

export default Contact;