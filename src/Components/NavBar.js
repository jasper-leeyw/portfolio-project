import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { TwitterIcon, LinkedInIcon, GithubIcon, MediumIcon, MoonIcon, SunIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'


/* Links on top left hand corner of webpage  */
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  // console.log(router)
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`
      h-[1px] inline-block w-0 bg-dark
      absolute left-0 bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 
      ${router.asPath === href ? 'w-full' : 'w-0'}
      dark:bg-light
      `} 
      >
        &nbsp;
      </span>
    </Link>


  )
}

const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher();

  return (
    <header
      className='w-full px-32 py-8 font-mont flex items-center justify-between
      dark:text-light'
    >
      <nav>
        <CustomLink href="/" title="Home" className='mr-4' />
        <CustomLink href="/about" title="About" className='mx-4' />
        <CustomLink href="/projects" title="Projects" className='mx-4' />
        <CustomLink href="/CV" title="CV" className='ml-4' />
      </nav>

      {/* Icons on the top right hand side */}
      <nav className="flex items-center justify-center flex-wrap ">
        {/* LinkedIn Icon */}
        <motion.a href="https://www.linkedin.com/in/jasper-lee1/" target={"_blank"}
          whileHover={{
            y: -2,
            scale: 1.2
          }}
          whileTap={{
            scale:0.9
          }}
          className="w-10 mr-4 dark:text-light"
        >
          <LinkedInIcon />
        </motion.a>

        {/* Github Icon */}
        <motion.a href="https://github.com/jasper-leeyw?tab=repositories" target={"_blank"}
          whileHover={{
            y: -2,
            scale: 1.2
          }}
          whileTap={{
            scale:0.9
          }}
          className="w-10 mx-4 dark:text-light "
        >
          <GithubIcon />
        </motion.a>

        {/* Medium Icon */}
        <motion.a href="https://medium.com/@yaowlee" target={"_blank"}
          whileHover={{
            y: -2,
            scale: 1.2
          }}
          whileTap={{
            scale:0.9
          }}
          className="w-10 mx-4 dark:text-light "
        >
          <MediumIcon />
        </motion.a>

        <button
            onClick={() => setMode(mode === "light" ? "dark" : "light" )}
            className={`w-10 ml-4 flex items-center justify-center rounded-full p-1
            ${mode === "light" ? "bg-dark text-light":"bg-light text-dark"}
            `}
            >
              
            {
              mode === "dark" ?
              <SunIcon className={"fill-dark"}/>
              : <MoonIcon className={"fill-dark"}/>
            }

        </button>
      </nav>

      {/* Middle Logo with Animation  */}
      <div className='absolute left-[50%] translate-x-[-50%] top-2 '>
        <Logo />
      </div>

    </header>
  )
}

export default NavBar