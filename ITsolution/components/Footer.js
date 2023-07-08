import A from "./A";
import styles from '../styles/Footer.module.css'
import Link from "next/link"

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                
                <div className={styles.footer_item}>
                    <h2>Контакти</h2>
                    <p>Yakovets.champ@gmail.com</p>
                    <p>+38 (097) 275-75-75</p>
                    <p>м.Дніпро</p>
                </div>
                <div className={styles.footer_itemLink}>
                    <h2>Навігація по сайту</h2>
                    <div className={styles.Links}>
                    <Link href="/" className={styles.Link}>Головна</Link>
                    <Link href="/" className={styles.Link}>Наші проєкти</Link>
                    <Link href="/" className={styles.Link}>Послуги</Link>
                    <Link href="/" className={styles.Link}>Контакти</Link>
                    </div>
                </div>
                <div className={styles.footer_item}>
                    <h2>Соціальні мережі</h2>
                    <div className={styles.Links}>
                    <Link href="/" className={styles.Link}>Instagram</Link>
                    <Link href="/" className={styles.Link}>Facebook</Link>
                    <Link href="/" className={styles.Link}>Telegram</Link>
                    <Link href="/" className={styles.Link}>LinkedIn</Link>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Footer;