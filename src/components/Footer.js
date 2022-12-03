import Image from 'next/image'
import styles from '../components/Footer.module.scss'
import Link from 'next/link'

export function Footer() {

    return (
        <div className={styles.footer}>
            <ul className={styles.footerInfo}>
                <li>
                <Link href="/">
                    <h2 className={styles.contact}>CONTACT US</h2>
                  </Link>
                </li>
                <li>
              <Link href="/">
                  <h2 className={styles.social}>Instagram   /   Twitter</h2>
                 </Link>
             </li>
             <li>
             <Link href="/">
                  <h2 className={styles.pp}>Corporate   Privasy policy </h2>
                 </Link>
             </li>
             <p>©︎For Two. All Reserved.</p>
    
            </ul>
             <h2 className={styles.footerLogo}>
        <Link href="/">
             <Image src="/gold_13.png" alt="Logo" width={200} height={150} />
        </Link>
             </h2>
        </div>   
    )
}
