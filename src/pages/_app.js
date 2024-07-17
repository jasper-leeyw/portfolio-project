import Footer from '@/Components/Footer'
import NavBar from '@/Components/NavBar'
import '@/styles/globals.css'
import { Inter, Monda, Montserrat } from "next/font/google"
import Head from 'next/head'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable}  font-montserrat dark:bg-dark w-full min-h-screen `}>
        <NavBar />
        <Component {...pageProps} />
        <Footer/>
      </main>
    </>

  )
}
