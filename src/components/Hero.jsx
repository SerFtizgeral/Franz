import { motion } from 'framer-motion';
import { useEffect, useState } from 'react'; // Import useState and useEffect
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import 'animate.css';

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024); // Adjust this breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto overflow-y-auto'> {/* Add overflow-y-auto to enable scrolling */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-zxl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am{' '}
            <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-reveal'>
              {' '}
              Francis Jeeves
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            As a degree holder of BS in Computer Science with experience in{' '}
            <span className='text-[#815eff]'> Front-end</span>,<span className='text-[#815eff]'> Software Development</span> and{' '}
            <span className='text-[#815eff]'> Graphic Design</span>,{' '}
            <br className='sm:block hidden' />I am a quick learner and interested in new systems and technologies. I
            am now seeking a new challenge and job opportunity where I can apply my skills and continue to learn and
            grow. With a passion for contributing to the success of a company, I am eager to find a role where I can
            make a meaningful impact
          </p>
        </div>
      </div>

      {isDesktop && <ComputersCanvas />} {/* Render ComputersCanvas only on desktop */}
    </section>
  );
};

export default Hero;
