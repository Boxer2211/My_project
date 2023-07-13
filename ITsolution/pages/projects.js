import styles from '../styles/Projects.module.css'
import Layout from '../components/Layout';

const Projects = () => {
    return (
        <>
            <Layout>
                <div className={styles.projects}>
                    <div className={styles.projects__navbar}>
                      
                    </div>  
                    <div className={styles.projects__container}>
                        <div className={styles.projects__item}>
                            <div className={styles.projects__img}>
                                <img src="./TelegramBot.jpg" alt="standarts" />
                            </div>
                            <p>Telegram Bot</p>
                        </div>
                        <div className={styles.projects__item}>
                            <div className={styles.projects__img}>
                                <img src="./dragon.jpg" alt="standarts" />
                            </div>
                            <p>Dragon API</p>
                        </div>
                        <div className={styles.projects__item}>
                            <div className={styles.projects__img}>
                                <img src="./lyma.jpg" alt="standarts" />
                            </div>
                            <p>Lyma Consalting</p>
                        </div>
                        <div className={styles.projects__item}>
                            <div className={styles.projects__img}>
                                <img src="./ksShop.jpg" alt="standarts" />
                            </div>
                            <p>Online Store</p>
                        </div>
                        <div className={styles.projects__item}>
                            <div className={styles.projects__img}>
                                <img src="./Rectangle2.png" alt="standarts" />
                            </div>
                            <p>Consalting</p>
                        </div>
                        <div className={styles.projects__item}>
                            <div className={styles.projects__img}>
                                <img src="./Rectangle.jpg" alt="standarts" />
                            </div>
                            <p>IT service</p>
                        </div>
                        <div className={styles.projects__item}>
                            <div className={styles.projects__img}>
                                <img src="./comment.jpg" alt="standarts" />
                            </div>
                            <p>Chat</p>
                        </div>
                        <div className={styles.projects__item}>
                            <div className={styles.projects__img}>
                                <img src="./bav.jpg" alt="standarts" />
                            </div>
                            <p>Bavfinance</p>
                        </div>
                        <div className={styles.projects__item}>
                            <div className={styles.projects__img}>
                                <img src="./TelegramBot.jpg" alt="standarts" />
                            </div>
                            <p>Telegram Bot 2</p>
                        </div>
                    </div>  
                </div>    
            </Layout>
        </>
    )
};

export default Projects;