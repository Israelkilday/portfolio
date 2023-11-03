// // CSS
import styles from "./Transition.module.css"
// FRAMER MOTION
import { motion } from "framer-motion"

const Transition = ({ children }) => {
    return (
        <>
            <motion.div
                className={styles.slide_in}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />

            {children}

            <motion.div
                className={styles.slide_out}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    );
};

export default Transition;
















