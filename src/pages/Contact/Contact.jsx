// CSS
import styles from "./Contact.module.css"
// HOOKS
import { useEffect, useState } from "react";
// COMPONENT
import Transition from "../../components/Transition";
// EMAILJS
import emailjs from "@emailjs/browser"
// SWEETALERT
import Swal from 'sweetalert2';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    // validateEmail();

    if (name === "" || email === "" || phone === "" || subject === "" || message === "") {
      setNameError(name === "");
      setEmailError(email === "");
      setPhoneError(phone === "");
      setSubjectError(subject === "");
      setMessageError(message === "");

      return
    }

    setNameError(false);
    setEmailError(false);
    setPhoneError(false);
    setSubjectError(false);
    setMessageError(false);

    const templateParams = {
      from_name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message
    };

    emailjs.send(
      "service_kseykmd",
      "template_lwsac3m",
      templateParams,
      "mdijYFp_vy0CuY4_a",
    ).then((response) => {
      if (response.status === 200) {
        Swal.fire({
          title: "Otimo!",
          text: "Mensagem enviada com sucesso!",
          icon: "success"
        });
      }
      console.log("EMAIL ENVIADO", response.status, response.text)
      setName("")
      setEmail("")
      setPhone("")
      setSubject("")
      setMessage("")

    }, (error) => {
      console.log("ERRO AO ENVIAR O EMAIL ", error)
    });
  };

  // const validateEmail = (email) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //   if (setEmail !== emailRegex ) {
  //     setEmailError(true)
  //   } 
  //   return emailRegex.test(email);
  // };

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
                className={`${styles.item} ${nameError ? styles.error : ""}`}
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError(false);
                }}
                value={name}
              />

              <div
                id="error_name"
                className={`${styles.error_message} ${nameError ? styles.show_message : ""}`}
              >
                Nome não pode ficar em branco</div>
            </div>

            <div className={`${styles.input_field} ${styles.field}`}>
              <input
                type="email"
                placeholder="Endereço do Email"
                className={`${styles.item} ${emailError ? styles.error : ""}`}
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                value={email}
              />

              <div
                id="error_email"
                className={`${styles.error_message} ${emailError ? styles.show_message : ""}`}
              >
                Email não pode ficar em branco
              </div>

            </div>
          </div>

          <div className={styles.input_box}>
            <div className={`${styles.input_field} ${styles.field}`}>
              <input
                type="text"
                placeholder="Número do Telefone"
                className={`${styles.item} ${phoneError ? styles.error : ""}`}
                id="phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                  setPhoneError(false);
                }}
                value={phone}
              />

              <div
                id="error_phone"
                className={`${styles.error_message} ${phoneError ? styles.show_message : ""}`}
              >
                Telefone não pode ficar em branco
              </div>
            </div>

            <div className={`${styles.input_field} ${styles.field}`}>
              <input
                type="text"
                placeholder="Assunto"
                id="subject"
                className={`${styles.item} ${subjectError ? styles.error : ""}`}
                onChange={(e) => {
                  setSubject(e.target.value)
                  setSubjectError(false);
                }}
                value={subject}
              />

              <div
                id="error_subject"
                className={`${styles.error_message} ${subjectError ? styles.show_message : ""}`}
              >
                Assunto não pode ficar em branco
              </div>
            </div>
          </div>

          <div className={`${styles.textarea_field} ${styles.field}`}>
            <textarea
              name=""
              placeholder="Sua mensagem"
              id="message"
              cols="30"
              rows="10"
              className={`${styles.item} ${messageError ? styles.error : ""}`}
              onChange={(e) => {
                setMessage(e.target.value)
                setMessageError(false);
              }}
              value={message}
            >
            </textarea>

            <div
              id="error_message"
              className={`${styles.error_message} ${messageError ? styles.show_message : ""}`}
            >
              Mensagem não pode ficar em branco</div>
          </div>

          <div className={styles.btn_box}>
            <button className={styles.btn} type="submit">Enviar Mensagem</button>
          </div>
        </form>
      </section>
    </Transition>
  );
};

export default Contact;




