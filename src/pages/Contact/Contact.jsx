// CSS
import styles from "./Contact.module.css"
// HOOKS
import { useEffect, useState } from "react";
// COMPONENT
import Transition from "../../components/Transition";
// EMAILJS
import emailjs from "@emailjs/browser"

const Contact = () => {
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://smtpjs.com/v3/smtp.js';
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // const form = document.querySelector("form");

  // function sendEmail() {
  //   Email.send({
  //     Host: "smtp.elasticemail.com",
  //     Username: "israel.kilday@yahoo.com.br",
  //     Password: "A7669DA9FADD95A336997B32007E62091E07A713173635C03487BE4AF8FBA7215C76D562545A2DCF10637A0931A79D99",
  //     To: 'israel.kilday@yahoo.com.br',
  //     From: "israel.kilday@yahoo.com.br",
  //     Subject: "This is the subject",
  //     Body: "And this is the body"
  //   }).then(
  //     message => alert(message)
  //   );
  // }

  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   sendEmail();
  // });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || phone === "") {
      alert("Prencha todos os campos")
    }

    const templateParams = {
      from_name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    };

      emailjs.send("service_xtwnga3", "template_wpza33d", templateParams)
  }

  return (
    <Transition>
      <section className={styles.contact}>

        <h2>
          <span>//</span>  Contate <span>Me!</span>
        </h2>

        <form className={styles.form} onSubmit={sendEmail}>
          <div className={styles.input_box}>
            <div className={`${styles.input_field} ${styles.field}`}>
              <input
                type="text"
                placeholder="Nome Completo"
                className={styles.item}
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

              <div className={styles.error_txt}>Nome não pode ficar em branco</div>
            </div>

            <div className={`${styles.input_field} ${styles.field}`}>
              <input
                type="text"
                placeholder="Endereço do Email"
                className={styles.item}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <div className={styles.error_txt}>Email não pode ficar em branco</div>

            </div>
          </div>

          <div className={styles.input_box}>
            <div className={`${styles.input_field} ${styles.field}`}>
              <input
                type="text"
                placeholder="Número do Telefone"
                className={styles.item}
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              <div className={styles.error_txt}>Telefone não pode ficar em branco</div>

            </div>

            <div className={`${styles.input_field} ${styles.field}`}>
              <input
                type="text"
                placeholder="Assunto"
                className={styles.item}
                id="subject"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
              <div className={styles.error_txt}>Assunto não pode ficar em branco</div>
            </div>
          </div>

          <div className={`${styles.textarea_field} ${styles.field}`}>
            <textarea
              name=""
              placeholder="Sua mensagem"
              id="message"
              cols="30"
              rows="10"
              className={styles.item}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            >
            </textarea>

            <div className={styles.error_txt}>Mensagem não pode ficar em branco</div>
          </div>

          <button type="submit">Enviar Mensagem</button>
        </form>
      </section>
    </Transition>
  );
};

export default Contact;


// A7669DA9FADD95A336997B32007E62091E07A713173635C03487BE4AF8FBA7215C76D562545A2DCF10637A0931A79D99


{/* <div className={styles.input_box}>
            
              <input
                type="text"
                placeholder="Nome Completo"
                className={styles.input_name}
              />

            <input type="email" placeholder="Email" className={styles.input_email} />
          </div>

          <div className={styles.input_box}>
            <input type="number" placeholder="Telefone" className={styles.input_fone} />
            <input type="email" placeholder="Assunto do Email" className={styles.input_subject} />
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
          </div> */}