import Image from 'next/image'
import styles from '../components/One.module.scss'
import Link from 'next/link'

export function One() {

    return (
        <div className={styles.containeer}>
        <div className={styles.caption}>
            <h2 className={styles.one}>ONE</h2>
            <span className={styles.line}></span>
            <p>A new you in a door. </p>
            <p> Desire to uncover your unknown enchantment.</p>
            <h3 className={styles.jap}>私のための新しい扉。</h3>
                <Link href="/OneContent">
                    <h2 className={styles.collection}>COLLECTION</h2>
                  </Link>
         </div>

         <div className={styles.img}>
             <Image src="/one_head.png" alt="one_head" width={549} height={665} />
         </div>

        </div>   
    )
}
