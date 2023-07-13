import styles from '../styles/services.module.css'
import Layout from '../components/Layout';

const Services = () => {
    return (
        <Layout>
             <div className={styles.projects__navbar}>
                      
            </div> 
            <div className={styles.projects__container}>
                <div className={styles.projects__item}>
                <p>Створення сайтів</p>
                <p>від 4000грн</p>
                            <div className={styles.projects__img}>
                                <img src="./lyma.jpg" alt="standarts" />
                            </div>  
                </div>
                <div className={styles.projects__item}>
                <p>Створення Телеграм ботів</p>
                <p>від 2000грн</p>
                            <div className={styles.projects__img}>
                                <img src="./TelegramBot.jpg" alt="standarts" />
                            </div>  
                </div>
                <div className={styles.projects__item}>
                <p>Програм обліку</p>
                <p>від 10 000грн</p> 
                            <div className={styles.projects__img}>
                                <img src="./Rectangle2.png" alt="standarts" />
                            </div>  
                </div>
                <div className={styles.projects__item}>
                <p>Дизайн візиток та їх виготовлення</p>
                <p>від 800грн</p>
                            <div className={styles.projects__img}>
                                <img src="./visit.png" alt="standarts" />
                            </div>  
                </div>
                <div className={styles.projects__item}>
                <p>Створення сторінок в Instagram та Facebook </p>
                <p>від 4000грн</p>
                            <div className={styles.projects__img}>
                                <img src="./inst.png" alt="standarts" />
                            </div>  
                </div>
                <div className={styles.projects__item}>
                <p>Дизайн логотипу</p>
                <p>від 800грн</p>
                            <div className={styles.projects__img}>
                                <img src="./dlogo.avif" alt="standarts" />
                            </div>  
                </div>
                <div className={styles.projects__item}>
                <p>Реклама в Instagram та Facebook </p>
                <p>від 20 000грн</p> 
                            <div className={styles.projects__img}>
                                <img src="./inst.png" alt="standarts" />
                            </div>  
                </div>
                
                  
             
            </div> 

        </Layout>
    )
}

export default Services;