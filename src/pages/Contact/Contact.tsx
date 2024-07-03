import styles from "./Contact.module.css";
import { useState } from "react";
import Transition from "../../components/Transition";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [subjectError, setSubjectError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      subject === "" ||
      message === ""
    ) {
      setNameError(name === "");
      setEmailError(email === "");
      setPhoneError(phone === "");
      setSubjectError(subject === "");
      setMessageError(message === "");

      return;
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
      message: message,
    };

    emailjs
      .send(
        "service_7um5d2w",
        "template_wpza33d",
        templateParams,
        "SzK4tZv53k8B-JB4j",
      )
      .then(
        (response) => {
          if (response.status === 200) {
            Swal.fire({
              title: "Otimo!",
              text: "Mensagem enviada com sucesso!",
              icon: "success",
            });
          }

          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setPhone("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.log("ERRO AO ENVIAR O EMAIL ", error);
        },
      );
  }

  return (
    <Transition onAnimationComplete={() => {}}>
      <main className={styles.contact}>
        <header className={styles.header_container}>
          <h1 className={styles.header_h2}>
            <span>//</span> Contate <span>Me!</span>
          </h1>

          <article className={styles.social_media}>
            <motion.div
              className={styles.icon_container}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 3,
                delay: 1.2,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <a
                href="https://api.whatsapp.com/send?phone=5585989295516"
                className={styles.whatsapp_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </motion.div>

            <motion.div
              className={styles.icon_container}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 3,
                delay: 1.5,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <a
                href="https://www.instagram.com/israelkilday/"
                className={styles.instagram_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </motion.div>

            <motion.div
              className={styles.icon_container}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 1.7,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <a
                href="https://www.linkedin.com/in/israeldevfrontend"
                className={styles.linkedin_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </motion.div>

            <motion.div
              className={styles.icon_container}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 3,
                delay: 1.9,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <a
                href="https://github.com/Israelkilday"
                className={styles.github_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </motion.div>
          </article>
        </header>

        <form className={styles.form} onSubmit={sendEmail}>
          <fieldset className={styles.input_box}>
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
                className={`${styles.error_message} ${
                  nameError ? styles.show_message : ""
                }`}
              >
                Nome não pode ficar em branco
              </div>
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
                className={`${styles.error_message} ${
                  emailError ? styles.show_message : ""
                }`}
              >
                Email não pode ficar em branco
              </div>
            </div>
          </fieldset>

          <fieldset className={styles.input_box}>
            <div className={`${styles.input_field} ${styles.field}`}>
              <input
                type="number"
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
                className={`${styles.error_message} ${
                  phoneError ? styles.show_message : ""
                }`}
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
                  setSubject(e.target.value);
                  setSubjectError(false);
                }}
                value={subject}
              />

              <div
                id="error_subject"
                className={`${styles.error_message} ${
                  subjectError ? styles.show_message : ""
                }`}
              >
                Assunto não pode ficar em branco
              </div>
            </div>
          </fieldset>

          <fieldset className={`${styles.textarea_field} ${styles.field}`}>
            <textarea
              name=""
              placeholder="Sua mensagem"
              id="message"
              cols={30}
              rows={10}
              className={`${styles.item} ${messageError ? styles.error : ""}`}
              onChange={(e) => {
                setMessage(e.target.value);
                setMessageError(false);
              }}
              value={message}
            ></textarea>

            <div
              id="error_message"
              className={`${styles.error_message} ${
                messageError ? styles.show_message : ""
              }`}
            >
              Mensagem não pode ficar em branco
            </div>
          </fieldset>

          <div className={styles.btn_box}>
            <button className={styles.btn} type="submit">
              Enviar Mensagem
            </button>
          </div>
        </form>
      </main>
    </Transition>
  );
};

export default Contact;
