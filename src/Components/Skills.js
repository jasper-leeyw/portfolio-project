import React from 'react'
import { motion } from 'framer-motion'

const Skill_name = ({name, x, y}) => {

  return(
    <motion.div 
          className='flex items-center justify-center rounded-full font-semibold
        bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        '
          whileHover={{
            scale: 1.05,
          }}
          initial={{x:0,y:0}}
          animate={{x:x, y:y}}
          transition={{duration: 1.5}}
        
        >
          {name}
        </motion.div>

  )

}



const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>
        Skills
      </h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
        
        <motion.div 
          className='w-16 h-16 flex items-center justify-center rounded-full font-semibold
        bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light
        '
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "mirror",
        }}
        >
          Skills
        </motion.div>

        {/* Orbiting Elements */}
        <Skill_name name="CSS" x="-5vw" y="-8vw"/>
        <Skill_name name="HTML" x="-20vw" y="-2vw"/>
        <Skill_name name="Python" x="20vw" y="6vw"/>
        <Skill_name name="SQL" x="0vw" y="12vw"/>
        <Skill_name name="Github" x="-20vw" y="-15vw"/>
        <Skill_name name="Javascript" x="15vw" y="-12vw"/>
        <Skill_name name="NextJS" x="32vw" y="-5vw"/>
        <Skill_name name="Tailwind CSS" x="0vw" y="-20vw"/>
        <Skill_name name="MongoDB" x="-25vw" y="18vw"/>
        <Skill_name name="GCP" x="18vw" y="18vw"/>

      </div>
    </>
    
  )
}

export default Skills