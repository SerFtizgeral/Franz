import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { arts } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  tags,
  image,
  source_code_link,
}) => {
  const handleImageClick = (e) => {
    const elem = e.currentTarget;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
      elem.msRequestFullscreen();
    } else {
      console.log("Fullscreen API is not supported by this browser.");
    }
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]' onClick={handleImageClick}>
          <img
            src={image}
            alt='arts_image'
            className='w-full h-full object-cover rounded-2xl cursor-pointer'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={(e) => {
                e.stopPropagation(); // Prevent the fullscreen from triggering when clicking the icon
                window.open(source_code_link, "_blank");
              }}
              className='custom-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
         
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Arts = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>2d Designs.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects serve as examples of my previous work in graphic design
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {arts.map((arts, index) => (
          <ProjectCard key={`arts-${index}`} index={index} {...arts} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Arts, "");
