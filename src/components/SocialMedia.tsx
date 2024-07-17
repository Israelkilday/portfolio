import { motion } from "framer-motion";
import styles from "./SocialMedia.module.css";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <main className="flex items-center lg:items-start">
      <article className={styles.social_media}>
        <motion.ul
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
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5585989295516"
              className={styles.whatsapp_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </li>
        </motion.ul>

        <motion.ul
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
          <li>
            <a
              href="https://www.instagram.com/israelkilday/"
              className={styles.instagram_link}
              target="blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
        </motion.ul>

        <motion.ul
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
          <li>
            <a
              href="https://www.linkedin.com/in/israeldevfrontend"
              className={styles.linkedin_link}
              target="blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </motion.ul>

        <motion.ul
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
          <li>
            <a
              href="https://github.com/Israelkilday"
              className={styles.github_link}
              target="blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
        </motion.ul>
      </article>
    </main>
  );
};

export default SocialMedia;
