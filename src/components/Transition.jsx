// // CSS
import styles from "./Transition.module.css"
// // HOOKS
// import { useRef, useEffect, useState } from "react";
// // GSAP
// import {Power4, gsap} from "gsap"

// const Transition = ({ timeline }) => {
//     const trans = useRef(null)

//     useEffect(() => {
//         timeline.to(trans.current, {
//             duration: 7,
//             x: 2600,
//             // x: 1600,
//             ease: Power4.easeOut,
//         });
//     }, []);





//     return (
//         <div>
//             <div className={styles.transition_effect} ref={trans}></div>
//         </div>
//     );
// };

// export default Transition;

import { motion } from "framer-motion"

const Transition = () => {
    return () => {
        <>
            <motion.div
                className={styles.slide_in}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.div
                className={styles.slide_out}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    };
};

export default Transition;
















