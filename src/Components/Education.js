import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type, time, place, major}) => {
        const ref = useRef(null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-32 flex flex-col justify-between'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>
                {type}
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                {time} | {place}
            </span>
            <p className='font-medium text-2xl w-full'>
                <a href='https://catalog.iastate.edu/collegeofengineering/electricalengineering/'>  
                    {major}
                </a>
            </p>
        </motion.div>

    </li>
    );
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start start", "end end"],
        }
    
    )



  return (
    <div className='mb-8 dark:text-light'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Education

        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative mb-32'>
            
            {/* Line on the left */}
            <motion.div  
            style={{scaleY: scrollYProgress}}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light  "/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                   
                   
                   {/* Zoom */}
                    <Details
                        type = "Bachelor of Science "
                        time = "2016-2018"
                        place = "Iowa State University"
                        major= "Electrical Engineering"
                    
                    />
                    
            </ul>
        </div>
        
        
    </div>
  )
}

export default Education;