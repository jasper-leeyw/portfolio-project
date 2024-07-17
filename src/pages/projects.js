import AnimatedText from '@/Components/AnimatedText'
import React from 'react'
import Head from 'next/head'
import Layout from '@/Components/Layout'
import Link from 'next/link'
import { GithubIcon } from '@/Components/Icons'
import Image from 'next/image'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"


// const FeaturedProject = ({type, title, summary, image, link, github}) => {
//     return (
//         <article 
//         className="w-full flex items-center justify-between
//         relative rounded-3xl border border-solid border-dark bg-light shadow-2xl
//         p-12
//         "> 
//             {/* <div className='absolute top-0 -right-3 -z-9 w-full h-full rounded-[2.5rem] bg-dark rounded-br-3xl'></div> */}

//             {/* <div className='absolute top-0 -right-4 -z-0 w-full h-full rounded-[2.5rem] bg-dark rounded-br-3xl'></div> */}
//             <Link 
//                 href={link} 
//                 target="_blank"
//                 className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
//                 >
//                 <Image src={image} alt={title} className="w-full h-auto"/>

//             </Link>

//             <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
//                     <span className='text-primary font-medium text-xl'>{type}</span>
//                     <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
//                         <h2 className='my-2 w-full text-left text-4xl font-bold'>
//                             {title}
//                         </h2>
            
//                     </Link>
//                     <p className='my-2 font-medium text-dark'>{summary}</p> 

//                     <div className='mt-2 flex items-center'>
//                         {/* Github Icon */}
//                         <Link href={github} target="_blank" className='w-10 hover:scale-125'> 
//                             <GithubIcon /> 
//                         </Link>

//                         {/* Visit Project Button */}
//                         <Link href={link} target="_blank"
//                         className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:scale-110'
//                         > 
//                             Visit Project
//                         </Link>

//                     </div>
//             </div>

//         </article>
        
//     )
// }

const FeaturedProject = ({ type, title, summary, image, link, github }) => {
    return (
        <article className="w-full flex items-center justify-between relative rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
        dark:bg-dark dark:border-light">
        {/* Shaded Box Underneath */}
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl
        "/>

            {/* Project Content */}
            <Link 
                href={link} 
                target="_blank" 
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
            >
                <Image src={image} alt={title} className="w-full h-auto rounded-3xl hover:scale-105 transition-transform duration-300 ease-in-out" 
                priority
                    sizes="(max-width:768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    {/* Title of Project */}
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
                        {title}
                    </h2>
                </Link>

                {/*Summary of Project */}
                <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>

                <div className="mt-2 flex items-center">
                    {/* Github Icon */}
                    <Link href={github} target="_blank" className="w-10 hover:scale-125">
                        <GithubIcon />
                    </Link>

                    {/* Visit Project Button */}
                    <Link 
                    href={link} 
                    target="_blank" 
                    className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold hover:scale-110">
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
}

const Project = ({type, title, summary, image, link, github}) => {
    return(
    <article className='w-full flex flex-col items-center justify-center rounded-br-2xl 
    rounded-3xl border border-solid border-dark bg-light p-6 relative shadow-2xl dark:bg-dark dark:border-light
    '>
    {/* Shaded Box Underneath */}
    <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
        rounded-br-3xl dark:bg-light 
        '/>
            <Link 
            href={link} 
            target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
            <Image src={image} alt={title} className="w-full h-auto hover:scale-105 transition-transform duration-300 ease-in-out"/>

            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2 '>
                    {/* Title of Project */}
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light'>
                        {title}
                    </h2>
        
                </Link>
                {/* Project Summary */}
            <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p> 

            <div className='w-full mt-2 flex items-center justify-between'>
                 {/* Visit Project Button */}
                <Link 
                href={link} 
                target="_blank"
                className='ml-4 text-lg font-semibold hover:underline'
                > 
                    Visit
                </Link>

                {/* Github Icon */}
                <Link 
                href={github} 
                target="_blank" 
                className='w-8 hover:scale-125'> 
                    <GithubIcon /> 
                </Link>
                

            </div>

            </div>
        
    </article>

    )


}



const projects = () => {
  return (
    <>
        <Head>
            <title>Jasper Lee | Projects Page</title>
            <meta name="description" content="any description"/>
        </Head>

        <main className='w=full dark:text-light'>
            <Layout className='pt-16 px-32'>
                <AnimatedText text="From Data to Treasure!" 
                className='mb-16'
                />
                
                {/* One Project */}
                <div className='grid grid-cols-12 gap-24 gap-y-32'>
                    <div className='col-span-12 '>
                        <FeaturedProject
                        type="Featured Project"
                        title="Crypto Screener Application"
                        image={project1}
                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                        link="/"
                        github="/"
                        
                        />
                    </div>

                {/* Two Project side by side*/}
                    <div className='col-span-6 '>
                        <Project
                        type="Project 1"
                        title="Crypto Screener Application"
                        image={project1}
                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                        link="/"
                        github="/"
                        
                        />
                    </div>

                    <div className='col-span-6 '>
                        <Project
                            type="Project 2"
                            title="Crypto Screener Application"
                            image={project1}
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                            link="/"
                            github="/"
                            
                            />
                    </div>

                </div>
            </Layout>
        </main>
    
    </>
    
  )
}

export default projects