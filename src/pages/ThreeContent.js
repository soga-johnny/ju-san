import Image from 'next/image'
import styles from '../styles/ThreeContent.module.scss'
import { Header } from '../components/Header'
import { One } from '../components/One'
import { Footer } from '../components/Footer'
import Link from 'next/link'

export default function ThreeContent() {
  return (
    <div className={styles.container}>

      <Header />
      <div className={styles.back}>
      <Link href="/">
          <h2 className={styles.contact}>BACK TO TOP</h2>
      </Link>
      </div>

      <main className={styles.main}>
        <div className={styles.mainVisual}>
          <div className={styles.left}>
            <h2>THREE</h2>
            <span></span>
        </div>
          <Image src="/three_head.png" alt="three_head" width={549} height={665} />
        </div>
        <div className={styles.about}>
            <h2 className={styles.copy}>I’LL BE YOUR DOOR</h2>
            <p>A new you in a door. </p>
            <p> Desire to uncover your unknown enchantment.</p>
            <h3 className={styles.jap}>私のための新しい扉。</h3>
         </div> 
         <h2 className={styles.title}>COLLECTION</h2>
         <div className={styles.pic}>
         <Image src="/three_1.jpg" alt="one_head" width={824} height={998} />
         </div>
         <div className={styles.pic}>
         <Image src="/three_2.jpg" alt="one_head" width={824} height={998} />
         </div>
         <div className={styles.pic}>
         <Image src="/three_3.jpg" alt="one_head" width={824} height={998} />
         </div>
         <h2 className={styles.title}>PRODUCTS</h2>

        <One />

      </main>

      <Footer />

    </div>
  )
}
