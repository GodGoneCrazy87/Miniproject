//framer motion
import { motion } from 'framer-motion';
import {fadeIn } from '../../variants';

import Image from "next/image";

import Link from 'next/link';



const Services = () => {
  return (
    <div className="h-full bg-primary/50 py-16 ">
      <div className="container mx-auto">
          <div className=" ">
            <motion.h2 
              variants={fadeIn('up', 0.2)} 
              initial='hidden'
              animate='show'
              exit='hidden'
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
          </div>
        </div>
        <div>

          <Link href="/services">
          <motion.div
          variants={fadeIn('down', 0.2)} 
          initial= "hidden" 
          animate= "show"
          exit="hidden"

          
          className="w-[10vw] h-[4vw] left-[35vw] bottom-[4vw] absolute bg-black font-bold rounded-3xl shadow group hover:bg-accent delay-20">
            <div className=" text-white text-[1.6vw] text-center top-2.5 relative ">ANALYZE</div>
          </motion.div>
          </Link>

          <Link href="/">
          <motion.div
          variants={fadeIn('down', 0.2)} 
          initial= "hidden" 
          animate= "show"
          exit="hidden"
           className="w-[10vw] h-[4vw] left-[60vw] bottom-[4vw] absolute bg-black font-bold rounded-3xl shadow hover:bg-accent delay-20">
            <div className=" text-white text-[1.6vw] text-center top-2.5 relative ">STOP</div>
          </motion.div>
          </Link>

          <motion.div
          variants={fadeIn('down', 0.2)} 
          initial= "hidden" 
          animate= "show"
          exit="hidden"
           className="w-[15vw] h-[10vw] left-[10vw] top-[14vw] absolute bg-black font-bold rounded-3xl shadow">
            <div className=" text-white text-[1.4vw] left-[2vw] top-2.5 relative ">Code</div>
            <div className=" text-accent text-[1.2vw] left-[2vw] top-6 relative ">tcp.flags.syn == 1 and tcp.flags.ack==0</div>
          </motion.div>

          <motion.div
          variants={fadeIn('down', 0.2)} 
          initial= "hidden" 
          animate= "show"
          exit="hidden"
           className="w-[15vw] h-[6vw] left-[10vw] top-[28vw] absolute bg-black font-bold rounded-3xl shadow">
            <div className=" text-white text-[1vw] left-[2vw] top-2.5 relative ">Peak packets received/s</div>
            <div className=" text-accent text-[1.6vw] left-[2vw] top-2.5 relative ">24000</div>
          </motion.div>
          
          <motion.div
          variants={fadeIn('down', 0.2)} 
          initial= "hidden" 
          animate= "show"
          exit="hidden"
           className="w-[15vw] h-[6vw] left-[10vw] top-[38vw] absolute bg-black font-bold rounded-3xl shadow">
            <div className=" text-white text-[1.2vw] left-[2vw] top-2.5 relative ">System crashed</div>
            <div className=" text-accent text-[1.4vw] left-[2vw] top-2.5 relative ">5 seconds</div>
          </motion.div>

            <motion.div
            variants={fadeIn('down', 0.2)} 
          initial= "hidden" 
          animate= "show"
          exit="hidden"
           className="w-[60vw] h-[30vw] right-[10vw] top-[12vw] absolute bg-primary rounded-tl-lg rounded-tr-3xl rounded-bl-3xl rounded-br-lg shadow">
              <div className=" w-[.5vw] h-[4vw] left-[2vw] top-[16.75px] relative text-white text-[1.6vw] font-bold">Graph</div>
              <Image
                src={'/graph.png'}
                width={2600}
                height={2000}
                className="w-full h-full"
                alt=""
                />
            </motion.div>
    </div>
        </div>
  );
};

export default Services;
