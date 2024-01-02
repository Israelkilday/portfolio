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
import withReactContent from 'sweetalert2-react-content';

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorState, setErroState] = useState(false);

  const addEventListeners = () => {
    const inputFields = document.querySelectorAll(`.${styles.item}`);

    inputFields.forEach((item) => {
      item.addEventListener("keyup", () => {
        if (item.value !== "") {
          setErroState(false);
        } else {
          setErroState(true);
        }
      });
    });
  };

  useEffect(() => {
    addEventListeners();

    return () => {
      const inputFields = document.querySelectorAll(`.${styles.item}`);
      inputFields.forEach((item) => {
        item.removeEventListener("keyup", () => { });
      });
    };
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    const fieldsToCheck = [name, email, phone, subject, message];

    if (fieldsToCheck.some(field => field === "")) {
      setErroState(true);
      return;
    }

    // if (
    //   name === "" ||
    //   email === "" ||
    //   phone === "" ||
    //   subject === "" ||
    //   message === ""
    // ) {

    //   setErroState(true);

    //   return;
    // }

    setErroState(false);

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

  // const checkInputs = () => {
  //   item.addEventListener("keyup", () => {
  //     if (item.value != "") {
  //       setErroState(true);
  //     } else {
  //       setErroState(false);
  //     }
  //   });
  // }


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
                className={`${styles.item} ${errorState ? styles.error : ""}`}
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

              <div
                id="error_name"
                className={`${styles.error_message} ${errorState ? styles.show_message : ""}`}
              >
                Nome não pode ficar em branco</div>
            </div>

            <div className={`${styles.input_field} ${styles.field}`}>
              <input
                type="text"
                placeholder="Endereço do Email"
                className={`${styles.item} ${errorState ? styles.error : ""}`}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <div
                id="error_email"
                className={`${styles.error_message} ${errorState ? styles.show_message : ""}`}
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
                className={`${styles.item} ${errorState ? styles.error : ""}`}
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />

              <div
                id="error_phone"
                className={`${styles.error_message} ${errorState ? styles.show_message : ""}`}
              >
                Telefone não pode ficar em branco
              </div>
            </div>

            <div className={`${styles.input_field} ${styles.field}`}>
              <input
                type="text"
                placeholder="Assunto"
                id="subject"
                className={`${styles.item} ${errorState ? styles.error : ""}`}
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />

              <div
                id="error_subject"
                className={`${styles.error_message} ${errorState ? styles.show_message : ""}`}
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
              className={`${styles.item} ${errorState ? styles.error : ""}`}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            >
            </textarea>

            <div
              id="error_message"
              className={`${styles.error_message} ${errorState ? styles.show_message : ""}`}
            >
              Mensagem não pode ficar em branco</div>
          </div>

          <button type="submit">Enviar Mensagem</button>
        </form>
      </section>
    </Transition>
  );
};

export default Contact;


// function checkInputs() {
//   const items = document.querySelectorAll(".item");

//   for (const item of items) {
//     if (item.value == "") {
//       item.classList.add("error");
//       item.parentElement.classList.add("error");
//     }

//     item.addEventListener("keyup", () => {
//       if (item.value != "") {
//         item.classList.remove("error");
//         item.parentElement.classList.remove("error");

//       } else {
//         item.classList.add("error");
//         item.parentElement.classList.add("error");
//       }
//     });
//   };
// } ;








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

// function sendEmail(e) {
//     e.preventDefault();

//   if (name === "" || email === "" || phone === "") {
//     alert("Prencha todos os campos")
//   }

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
//     );
//     console.log(message)
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   sendEmail();
// });

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