import styles from '../styles/contacts.module.css'
import Layout from '../components/Layout';

const Contacts = () => {
    return (
        <Layout>
             <div className={styles.projects__navbar}>
                      
            </div> 
            <div className={styles.projects__container}>
                
            <h2>Контакти</h2>
                    <p>Yakovets.champ@gmail.com</p>
                    <p>+38 (097) 275-75-75</p>
                    <p>м.Дніпро</p>
            </div> 

        </Layout>
    )
}

export default Contacts;