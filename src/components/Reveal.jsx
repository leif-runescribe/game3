import React, {useRef, useEffect} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"


const Reveal = ({children, width = "fit-content"}) => {
    const ref = useRef(null);
    const inView = useInView(ref, {once: true});
    const mainCtrl = useAnimation()
    const slideCtrl = useAnimation()
    useEffect(()=>{
        if(inView){
            mainCtrl.start("visible");
            slideCtrl.start("visible")
        }

    }, [inView])

  return (
    <div style={{position: "relative", width, overflow: "hidden"}}>
        <motion.div
        variant={{hidden: {opacity: 0, y: 50},visible: {opacity:1, y:0},
        }}
        initial="hidden"
        animate={mainCtrl}
        transition={{duration: 0.5, delay: 0.25}}>
            {children}
        </motion.div>
        <motion.div
        variants={{
            hidden: {left: 0},
            visible: {left: "100%"}
        }}
        inital="hidden"
        animate={slideCtrl}
        transition= {{duration: 0.5, ease: "easeIn"}}
        style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right:0,
            background: "var(--brand)",
            zIndex: 20,
        }}>

        </motion.div>
    </div>
  )
}

export default Reveal