// CSS
import styles from "./Transition.module.css"
// HOOKS
import { useRef, useEffect } from "react";
// GSAP
import {Power4} from "gsap"

const Transition = ({ timeline }) => {
    const trans = useRef(null)

    useEffect(() => {
        timeline.to(trans.current, {
            duration: 7,
            x: 2600,
            ease: Power4.easeOut,
        });
    }, []);

    return (
        <div>
            <div className={styles.transition_effect} ref={trans}></div>
        </div>
    );
};

export default Transition;