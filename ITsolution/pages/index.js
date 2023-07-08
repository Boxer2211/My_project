import styles from '../styles/Index.module.css'
import Layout from '../components/Layout';
import Link from "next/link"

const Index = () => {
    return (
        <>
           <Layout>
                <div className={styles.Mainpage}>
                    <div className={styles.image} >
                        <img src="./Rectangle.jpg" alt="mainImage" />
                        <div className={styles.textOnImg}>
                            <p>IT студія</p>
                            <h1>Ми створюємо прості рішення<br />складних завдань</h1>
                            <Link href='/' className={styles.linkOnProjects}>Наші проєкти</Link>
                        </div>
                    </div>

                    <div className={styles.services} >
                        <div className={styles.services__container} >
                            <div className={styles.services__header} >   
                                <h2>Ми створюємо сайти та мобільні додатки для різних бізнесів</h2>
                                <h3>від невеликих магазинів до великих корпорацій</h3>
                                <p>З переліком наших послуг можна ознайомитись за посиланням нижче</p>                        
                            </div>
                            <div className={styles.services__items} >   
                                <div className={styles.services__item} >   
                                        <div className={styles.item__Img}>
                                            <img src="./project.png" alt="pictures" />
                                        </div>
                                        <div className={styles.item__text}>
                                            <h3>Створення сайтів</h3>
                                                <li>Сайт візитка</li>
                                                <li>Інтернет-магазин</li>
                                                <li>B2b платформ</li>
                                        </div>               
                                </div>
                                <div className={styles.services__item} >   
                                       <div className={styles.item__Img}>
                                            <img src="./project.png" alt="pictures" />
                                        </div>
                                        <div className={styles.item__text}>
                                            <h3>Створення логотипів</h3>
                                            <li>Логотип для бренду</li>
                                            <li>Логотип магазину</li>
                                            <li>Логотип для сайту</li>
                                        </div>                   
                                </div>
                                <div className={styles.services__item} >   
                                        <div className={styles.item__Img}>
                                            <img src="./project.png" alt="pictures" />
                                        </div>
                                        <div className={styles.item__text}>
                                            <h3>Створення додатків</h3>
                                            <li>Мобільні додатки</li>
                                            <li>Веб додатки</li>
                                            <li>Десктоп додатки</li>
                                        </div>               
                                </div>                        
                            </div>
                            <div className={styles.servises__button}><Link href='/' className={styles.linkOnProjects}>Всі послуги</Link></div>
                            
                        </div>
                    </div>

                    <div className={styles.standarts}>
                        <div className={styles.standarts__container}>
                            <div className={styles.standarts__textAimg}>
                                <div className={styles.standarts__text}>
                                    <h1>Високі стандарти розробки</h1>
                                    <p>Ми використовуємо тільки сучасні інструменти для розробки. Для кліентської сторони: HTML5, CSS, JavaScript
                                        TypeScript. Та сучасні фреймворки React, React Native, Next.js, Redux Toolkit. 
                                        Для серверної частини: Node.js та фреймворк Express, в якості баз данних ми віддаємо перевагу 
                                        тільки перевіриним ресурсам - Mongo та FireBase.
                                        Файли Вашого проєкту ми зберігаємо на GitHub, для Вашого вільного доступу.
                                        Кожен проект ми деплоїм на обраний вами хостинг.
                                    </p>
                                    <Link href='/' className={styles}>Наші проєкти</Link>
                                </div>
                                <div className={styles.standarts__img}>
                                    <img src="./Rectangle2.png" alt="standarts" />
                                </div>
                            </div>
                            <div className={styles.standarts__items}>
                                <div className={styles.standarts__item}>
                                    <img src="./11.svg" alt="" />
                                    <h2>100%</h2>
                                    <p>Якості</p>
                                </div>
                                <div className={styles.standarts__item}>
                                    <img src="./13.svg" alt="" />
                                    <h2>200+</h2>
                                    <p>Кліентів</p>
                                </div>
                                <div className={styles.standarts__item}>
                                    <img src="./14.svg" alt="" />
                                    <h2>530</h2>
                                    <p>Партнерів</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.projects}>
                        <div className={styles.projects__container}>
                            <div className={styles.projects__header}>
                                <h1>Наші проєкти</h1>
                                <p>В наших проєктах використовуємо тільки сучасні інструменти для розробки. Для кліентської сторони: HTML5, CSS, JavaScript TypeScript. Та сучасні фреймворки React, React Native, Next.js, Redux Toolkit. Для серверної частини: Node.js та фреймворк Express, в якості баз данних ми віддаємо перевагу тільки перевіриним ресурсам - Mongo та FireBase. Файли Вашого проєкту ми зберігаємо на GitHub, для Вашого вільного доступу. Кожен проект ми деплоїм на обраний вами хостинг.</p>
                            </div>
                            <div className={styles.projects__items}>
                                <div className={styles.projects__item}>
                                    <div className={styles.projects__img}>
                                        <img src="./TelegramBot.jpg" alt="standarts" />
                                    </div>
                                    <p>Telegram Bot</p>
                                </div>
                                <div className={styles.projects__item}>
                                    <div className={styles.projects__img}>
                                        <img src="./ksShop.jpg" alt="standarts" />
                                    </div>
                                    <p>Інтернет-магазин</p>
                                </div>
                                <div className={styles.projects__item}>
                                    <div className={styles.projects__img}>
                                        <img src="./dragon.jpg" alt="standarts" />
                                    </div>
                                    <p>Інформаційний сайт</p>
                                </div>
                                <div className={styles.projects__item}>
                                    <div className={styles.projects__img}>
                                        <img src="./lyma.jpg" alt="standarts" />
                                    </div>
                                    <p>Лендінг</p>
                                </div>
                            </div>

                            <div className={styles.servises__button}><Link href='/' className={styles.linkOnProjects}>Всі проекти</Link></div>
                        </div>
                    </div>

                </div>
            </Layout>
        </>
    )
};

export default Index;