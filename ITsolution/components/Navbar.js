import A from "./A";
import Head from "next/head";
import styles from '../styles/Navbar.module.css'


const Navbar = () => {
    return (
        <>
            <Head>
                <meta keywords="users, users list"></meta> //мета теги, ключевый слова {/* тут вписати мета теги*/}
                <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" />
                <title>Main page</title>
            </Head>
            <div className={styles.navbar}>
                <div className={styles.navbar__links}>
                    <A href={"/"} text="Головна"></A>
                    <A href={"/users"} text="Наші проєкти"></A>
                    <A href={"/users"} text="Послуги"></A>
                    <A href={"/users"} text="Контакти"></A>
                </div>
            </div>
           
        </>
    )
}

export default Navbar;