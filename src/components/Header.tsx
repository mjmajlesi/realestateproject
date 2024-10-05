import CountUp from "react-countup";
import { motion } from "framer-motion";
import Estate from "../images/realEstate.jpg";
import Container from "./container";
import Button from "./buttuns";
function Header() {
  return (
    <Container>
        <section className="text-white pb-8">
          <div className="p-8 innerWidth flex items-center flex-wrap gap-8 justify-around">
            {/* left side */}
            <div className="flex flex-col justify-center gap-12">
              <div className="relative z-10">
                <div className="h-16 w-16 rounded-lg absolute z-0" />
                <motion.h1
                className="text-6xl font-bold"
                initial={{ y: "1.5rem", opacity: 0.1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "ease-in",
                }}
                >
                  Discover <br />
                  Most Suitable
                  <br /> Property
                </motion.h1>
              </div>
              <div className="flex flex-col items-start justify-center text-sm">
                <span>Find a variety of properties that suit you very easilty</span>
                <span>Forget all difficulties in finding a residence for you</span>
              </div>

              <div className="flex items-center flex-wrap gap-8 bg-white rounded-sm border-4 py-2 px-1 w-full justify-between">
                <input className="border-none outline-none text-slate-800 px-4" type="text" />
                <Button variant="login" className="button">Search</Button>
              </div>
    
              <div className="flex items-center flex-wrap gap-8 w-full justify-between">
                <div className="flex flex-col items-center justify-center text-3xl">
                  <span>
                    <CountUp start={8800} end={9000} duration={4} /> <span className="text-orange-600">+</span>
                  </span>
                  <span className="text-sm">Premium Product</span>
                </div>
    
                <div className="flex flex-col items-center justify-center text-3xl ">
                  <span>
                    <CountUp start={1950} end={2000} duration={4} /> <span className="text-orange-600">+</span>
                  </span>
                  <span className="text-sm">Happy Customer</span>
                </div>
    
                <div className="flex flex-col items-center justify-center text-3xl">
                  <span>
                    <CountUp start={26} end={28} /> <span className=" text-orange-600">+</span>
                  </span>
                  <span className="text-sm">Awards Winning</span>
                </div>
              </div>
            </div>
    
            {/* right side */}
            <div className="flex items-center flex-wrap justify-center">
              <motion.div
                initial={{ x: "6rem", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "ease-in",
                }}
                className="w-400 h-450 overflow-hidden rounded-t-15 border-4"
              >
                <img className="w-full h-full" src={Estate} alt="houses" />
              </motion.div>
            </div>
          </div>
        </section>
    </Container>
  )
}

export default Header