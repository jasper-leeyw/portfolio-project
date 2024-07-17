import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
        const ref = useRef(null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-32 flex flex-col  justify-between dark:text-light'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>
                {position}&nbsp;
                <a href={companyLink}
                target='blank'
                className='text-primary dark:text-primaryDark capitalize'
                >
                    @{company}
                </a>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>

    </li>
    );
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"],
        }
    
    )



  return (
    <div className='mb-8 dark:text-light '>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Experience

        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>
            
            {/* Line on the left */}
            <motion.div  
            style={{scaleY: scrollYProgress}}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                   
                   
                   {/* Zoom */}
                    <Details
                        position = "Software Engineer"
                        company= "Google"
                        companyLink= "https://www.google.com/about/careers/applications/"
                        time = "2022-Present" 
                        address = "Mountain View, CA"
                        work= "Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization."
                    
                    />
                    {/* Cisco */}
                    <Details
                        position = "Software Engineer"
                        company= "Google"
                        companyLink= "https://www.google.com/about/careers/applications/"
                        time = "2022-Present" 
                        address = "Mountain View, CA"
                        work= "Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization."
                    
                    />

                    {/* BV */}
                    <Details
                        position = "Software Engineer"
                        company= "Google"
                        companyLink= "https://www.google.com/about/careers/applications/"
                        time = "2022-Present" 
                        address = "Mountain View, CA"
                        work= "Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization."
                    
                    />
                    {/* Sporton */}
                    <Details
                        position = "Software Engineer"
                        company= "Google"
                        companyLink= "https://www.google.com/about/careers/applications/"
                        time = "2022-Present" 
                        address = "Mountain View, CA"
                        work= "Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization."
                    
                    />
            </ul>
        </div>
        
        
    </div>
  )
}

export default Experience