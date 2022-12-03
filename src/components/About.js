import styles from '../components/About.module.scss'

export function About() {

 return (
      <div className={styles.containeer}>
          <span className={styles.line}></span>
         <div className={styles.about}>
            <h2 className={styles.copy}>I’LL BE YOUR DOOR</h2>
            <p>A new you in a door. </p>
            <p> Desire to uncover your unknown enchantment.</p>
            <h3 className={styles.jap}>私のための新しい扉。</h3>
             </div>   
          <h2 className={styles.title}>PRODUCTS</h2>
      </div>
    )
}
