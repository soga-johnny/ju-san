import Image from 'next/image'
import styles from '../components/Header.module.scss'
import Link from 'next/link'
import React, {useState} from "react"

export function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const menuFunction = () => {
      setOpenMenu(!openMenu);
    }

  return (
<div>
<header className={styles.header}>
    <div className={styles.headerInline}>
    <h1>
        <Link href="/index">
             <Image src="/Logo_gold.png" alt="Logo" width={149} height={64} />
        </Link>
    </h1>
    <div className={styles.humburger} onClick={() => menuFunction()}>
        <div className={openMenu ? styles.open : undefined}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          </div>
    </div>
 </header>

 <div className={`${styles.menu} ${openMenu ? styles.open : undefined}`}>
    <ul>
    <div className={styles.close} onClick={() => menuFunction()}>
    <span></span>
    <span></span>
    </div>
    <div className={styles.menuLogo}>
        <Image src="/white_13.png" alt="menu13" width={150} height={100} />
        <Link href="/index">
             <Image src="/white_logo.png" alt="menuLogo" width={149} height={64} />
        </Link>
    </div>


    <li>
    <Link href="/">
        <h2 className={styles.one}>ONE</h2>
    </Link>
    </li>
    <li>
    <Link href="/">
        <h2 className={styles.three}>THREE</h2>
    </Link>
    </li>
    <li>
    <Link href="/">
        <h2 className={styles.contact}>CONTACT</h2>
    </Link>
    </li>
    <li>
    <Link href="/">
        <h2 className={styles.social}>Instagram   /   Twitter</h2>
    </Link>
    </li>
    </ul>
 </div>
</div>
  )
}

