import Image from 'next/image'
import styles from '../components/Three.module.scss'
import Link from 'next/link'

export function Three() {

    return (
        <div className={styles.containeer}>
            <Image src="/three_head.png" alt="three_head" width={549} height={665} />

        <div className={styles.caption}>
            <h2 className={styles.three}>THREE</h2>
            <span className={styles.line}></span>
            <p>A new you in a door. </p>
            <p> Desire to uncover your unknown enchantment.</p>
            <h3 className={styles.jap}>私のための新しい扉。</h3>
                <Link href="/ThreeContent">
                    <h2 className={styles.collection}>COLLECTION</h2>
                  </Link>
         </div>

        </div>   
    )
}
