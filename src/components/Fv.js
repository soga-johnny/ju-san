import Image from 'next/image'
import styles from '../components/Fv.module.scss'

export function Fv() {

    return (
        <div className={styles.fv}>
            <Image src="/gold_13.png" alt="Logo" width={400} height={300} />
        </div>
    )
}