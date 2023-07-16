import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";


import { styles } from "../styles";
import { services } from "../constants";
import {fadeIn, textVariant} from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({index, title, icon}) => {
  
  //Under Overview 
  return(
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[10px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-primary rounded-[20px] py-5 px-12 min-h-[180px] flex justify-evenly items-center'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-6 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
      }

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    
    <motion.p 
    variants={fadeIn("","", 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
        Im a fresh graduate with a solid understanding of the fundamental principles of front-end and software development, I am eager to continue honing my skills and expanding my knowledge.
        With a grasp of the core concepts, I can create basic but functional interfaces, focusing on usability and user experience.
        Additionally, my foundation in software development fundamentals allows me to contribute to projects and collaborate effectively with teams.
   </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    
    </>
  )
}

export default SectionWrapper (About, "about")