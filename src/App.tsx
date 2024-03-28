import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { useEffect } from "react"
import {FaArrowRight} from "react-icons/fa6"
import Starfield from "react-starfield"

const COLORS = ["#0e445c","#1a7b84","#1cc5ae","#8395c3","#d1d4e8"]

function App() {
  const color = useMotionValue(COLORS[0])
  const bg = useMotionTemplate`linear-gradient(#070f2b, ${color})`

  const staggerText = {
    hidden:{},
    show:{
      transition:{
        staggerChildren:0.5,
        delayChilren:0.4,
        ease:"easeIn",
      }
    }
  }

  const textAnimation = {
    hidden:{
      opacity:0,
      y:"100%",
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:0.5,
      }
    }
  }

  const btnAnimation = {
    hidden:{
      opacity:0,
    },
    show:{
      opacity:1,
      transition:{
        delay:1.2,
        duration:0.5,
      }
    }
  }

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeIn",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    })
  },[])

  return (
    <motion.div className="h-[100svh]" style={{backgroundImage:bg}}>
      <nav className="w-full flex justify-between items-center pt-2 px-2 md:px-10">
        <h1 className="font-bold text-lg md:text-xl text-white/80">Wallpaper</h1>
        <ul className="w-[200px] md:w-[300px] flex justify-between">
          <li><a href="#" className="text-sm md:text-lg font-semibold text-white/80 hover:text-gray-400">Home</a></li>
          <li><a href="#" className="text-sm md:text-lg font-semibold text-white/80 hover:text-gray-400">Price</a></li>
          <li><a href="#" className="text-sm md:text-lg font-semibold text-white/80 hover:text-gray-400">Sell</a></li>
          <li><a href="#" className="text-sm md:text-lg font-semibold text-white/80 hover:text-gray-400">About</a></li>
        </ul>
      </nav>
      <section className="h-[800px] md:h-[600px] flex flex-col items-center justify-center space-y-4">
        <motion.div style={{color}} className="relative overflow-hidden leading-9 md:leading-[80px] z-50" variants={staggerText} initial="hidden" animate="show">
          {
            ["EXPLORE THE WAY","YOU LEARN SOMETHING"].map((text,i) => (
              <motion.h1 key={i} className="text-[2.2rem] md:text-[4.5rem] font-bold text-center" variants={textAnimation}>{text}</motion.h1>
            ))
          }
        </motion.div>
        <motion.button className="px-6 py-2 flex space-x-2 items-center text-white/80 font-semibold border-2 border-white/80 hover:backdrop-blur-2xl hover:bg-white/20 z-50 transition-all duration-300 ease-in" variants={btnAnimation} initial="hidden" animate="show">
          <span className="text-xl">Let's go</span>
          <FaArrowRight/>
        </motion.button>
      </section>
      
      <motion.div className="relative z-0" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.4,duration:0.5,ease:"easeIn"}}>
          <Starfield 
            starCount={500}
            starColor={[255,255,255]}
            speedFactor={0}
            backgroundColor="transparent"
          />
      </motion.div>

    </motion.div>
  )
}

export default App
