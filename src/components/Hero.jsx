import { motion } from 'framer-motion';

import { styles } from '../styles'
import { ComputersCanvas} from './canvas';
const Hero = () => {
  return (
    //Background
    <section className='relative w-full h-screen mx-auto'>
  
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-zxl mx-auto flex flex-row items-start gap-5`}>
       
           <div className='flex flex-col justify-center items-center mt-5'>
           <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

          <div>
            <h1 className={`${styles.heroHeadText}
            text-white`}>Hi, I am <span className='text-[#815eff]'> Francis Jeeves</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            As a degree holder of BS in Computer Science with
            experience in <span className='text-[#815eff]'> Front-end</span>,<span className='text-[#815eff]'> Software Development</span> and <span className='text-[#815eff]'> Game Design</span>, <br className='sm:block hidden'/>I am a quick learner and interested in new
            systems and technologies. I am now seeking a new
            challenge and job opportunity where I can apply my
            skills and continue to learn and grow. With a passion
            for contributing to the success of a company, I am
            eager to find a role where I can make a meaningful
            impact
            </p>
          </div>
         </div>

         
            <ComputersCanvas />

         
    
    </section>
  )
}

export default Hero