import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Header } from '../components/Header'
import { Fv } from '../components/Fv'
import { About } from '../components/About'
import { One } from '../components/One'
import { Three } from '../components/Three'
import { Footer } from '../components/Footer'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        
        <Fv />
        <About />
        <One />
        <Three />
      </main>

      <Footer />

    </div>
  )
}
