import Image from 'next/image'
import styles from '../styles/Header.module.scss'
import { Link } from 'next/link'

export function Header() {
  return (
 <header className={styles.header}>
    <h1>
        <Link href="/">
             <Image src="/Logo_gold.png" alt="Logo" width={149} height={64} />
        </Link>
    </h1>
 </header>
  )
}

