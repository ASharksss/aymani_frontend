// 'use client'
// 'use server'
import React from 'react'

import PostTitle from '@/components/publications/post/title/PostTitle'
import CommentForm from '@/components/forms/comment-form/CommentForm'
import Comment from '@/components/publications/post/comment/Comment'
import BackTool from "@/asserts/tools/back-tool/BackTool";

import temp from '../../../asserts/temp/temp.jpg'

import page from '../../page.module.css'
import styles from './page.module.css'
import PostImage from "@/components/publications/post/image/PostImage";
import ProjectArticle from "@/components/publications/post/project-article/ProjectArticle";
import LittlePost from "@/components/publications/post/little-post/LittlePost";

export const metadata = {
    title: 'Пост',
    description: 'Пост один',
}
export default async function Page() {
    // const commentRef = useRef()
    const dart = '<li><p>\n' +
        '            - <a href={\'#\'}> NEW500 </a> - скидка 500 рублей на первый заказ от 3 500 рублей. При использовании данного\n' +
        '            промокода вы можете получить скидку 500 рублей при покупке от 3500 рублей, применив его\n' +
        '            только в приложении при оформлении заказа. Промокод действует только на первый заказ и\n' +
        '            не распространяется на товары из акции "Одна цена". Активен до 30 сентября.</p>\n' +
        '    </li>';

    const commentData = {
        id: 1,
        nickname: 'User1',
        time: '2 часа назад',
        text: 'Это основной комментарий.',
        likes: 1200,
        replies: [
            {
                id: 2,
                nickname: 'User2',
                time: '1 час назад',
                text: 'Это ответ на основной комментарий.',
                likes: 300,
                replies: [
                    {
                        id: 3,
                        nickname: 'User3',
                        time: '30 минут назад',
                        text: 'Это ответ на первый ответ.',
                        likes: 100,
                        replies: []
                    }
                ]
            },
            {
                id: 4,
                nickname: 'User4',
                time: '45 минут назад',
                text: 'Еще один ответ на основной комментарий.',
                likes: 150,
                replies: [
                    {
                        id: 2,
                        nickname: 'User2',
                        time: '1 час назад',
                        text: 'Это ответ на основной комментарий.',
                        likes: 300,
                        replies: [
                            {
                                id: 3,
                                nickname: 'User3',
                                time: '30 минут назад',
                                text: 'Это ответ на первый ответ.',
                                likes: 100,
                                replies: [
                                    {
                                        id: 2,
                                        nickname: 'User2',
                                        time: '1 час назад',
                                        text: 'Это ответ на основной комментарий.',
                                        likes: 300,
                                        replies: [
                                            {
                                                id: 3,
                                                nickname: 'User3',
                                                time: '30 минут назад',
                                                text: 'Это ответ на первый ответ.',
                                                likes: 100,
                                                replies: []
                                            }
                                        ]
                                    },
                                    {
                                        id: 4,
                                        nickname: 'User4',
                                        time: '45 минут назад',
                                        text: 'Еще один ответ на основной комментарий.',
                                        likes: 150,
                                        replies: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 4,
                        nickname: 'User4',
                        time: '45 минут назад',
                        text: 'Еще один ответ на основной комментарий.',
                        likes: 150,
                        replies: []
                    }
                ]
            }
        ]
    };

    return (
        <main className={page.main}>
            <section className={styles.grid}>
        <span className={styles.span}>
          <BackTool/>
        </span>
                <div>
                    <PostTitle
                        title={'Как играть на скрипке, я это вообще не понимаю так то'}
                        tag={'Web-developers'}
                        date={'12.02.2002'}
                        user={'Антон Антонов'}
                    />
                </div>
                <span className={styles.anotherSpan}></span>
                <div className={styles.content}>
                    <div className={`${styles.spanImage} ${styles.text}`}>
                        <div className={`${styles.mainImage}`}>
                            <PostImage tag={'Web-программирование'} desctiption={'Обои моего рабочего стола'}
                                       imu={temp}/>
                        </div>
                    </div>
                    <div className={styles.text}>
                        <h2>
                            Выгодные предложения от Алиэкспресс вместе с купонами от Пикабу Промокоды:
                        </h2>
                        <ul>
                            <li>
                                <p>

                                    - <a href={'#'}> NEW500 </a> - скидка 500 рублей на первый заказ от 3 500 рублей.
                                    При использовании данного
                                    промокода вы можете получить скидку 500 рублей при покупке от 3500 рублей, применив
                                    его
                                    только в приложении при оформлении заказа. Промокод действует только на первый заказ
                                    и
                                    не распространяется на товары из акции "Одна цена". Активен до 30 сентября.
                                </p>
                            </li>
                            <pre><code>{dart}</code></pre>
                            <li>
                                <p>
                                    - <a href={'#'}> PIKABU700 </a> - 700 баллов в подарок для новых пользователей. При
                                    следующей покупке можно
                                    списать 40% от суммы с использованием этих баллов. Действует только в мобильном
                                    приложении. Активен до 30 сентября.
                                </p>
                            </li>
                        </ul>
                        <blockquote>
                            А еще на Алиэкспресс сейчас среди покупателей проходит акция “Звездные купоны 2.0”.
                            Выполняйте
                            задания, получайте за них звезды и меняйте их на купоны! Правила акции можно посмотреть тут.
                            Механика акции доступна только для РФ.
                        </blockquote>

                        В рамках акции разыгрываются купоны на Баллы Программы лояльности AliExpress:

                        <ul>
                            <li>
                                - 1 000 купонов, каждый на 1000 Баллов;
                            </li>
                            <li>
                                - 100 купонов, каждый на 10 000 Баллов;
                            </li>
                            <li>
                                - 10 купонов, каждый на 100 000 Баллов;
                            </li>
                            <li>
                                - 5 купонов, каждый на 200 000 Баллов;
                            </li>
                            <li>
                                - Главный приз – 1 купон на 1 млн Баллов.
                            </li>
                        </ul>
                        <PostImage tag={'Web-программирование'} desctiption={'Обои моего рабочего стола'}
                                   imu={temp}/>
                        <ol>
                            <li>

                                1. CHOVERY Робот-мойщик окон - 3 703 ₽ вместо 11 368 ₽
                                Алиэкспресс
                                <p>

                                    Подходит для стекол любой толщины, может очистить 1 квадратный метр за 4 минуты.
                                    Мощность
                                    всасывания достигает 5 600 Pa, что позволяет прочно удерживать робот на поверхности.
                                    AI
                                    Technology V2.0 может рассчитывать маршрут и очистку автоматически, также робот
                                    остановится
                                    после завершения очистки. 4-метровый высокопрочный страховочный трос, алгоритм
                                    защиты от
                                    падения, автоматическое определение краев окна для предотвращения падений.
                                </p>
                            </li>
                            <li>

                                2. Blackview Oscal ELITE 1 Планшет 12,1”, 8/256 ГБ - 18 005 ₽ вместо 45 986 ₽
                                Алиэкспресс
                                <p>

                                    Образцово-показательный повседневный планшет с 12,1-дюймовым IPS-экраном, четырьмя
                                    динамиками,
                                    ёмкой батареей, а также поддержкой сотовых сетей 4G и GPS-навигации.
                                </p>
                            </li>
                            <li>

                                3. Робот-пылесос Dreame D9 Max - 17 699 ₽ вместо 27 999 ₽
                                Алиэкспресс
                                <p>
                                    Робот-пылесос для сухой и влажной уборки с мощностью всасывания 4000 Па. Лазерная
                                    система
                                    навигации и удобное приложение. По сравнению с предыдущей моделью, мощность
                                    всасывания
                                    увеличилась, а также, улучшенная основная щетка с системой от наматывания волос.
                                </p>
                            </li>
                            <blockquote>
                                Подборка отличных скидок! Покупка, Скидки, Промокод, Распродажа, Доставка, Акции,
                                Длиннопост
                            </blockquote>
                            <li>
                                4. Смартфон realme 12 Pro 5G, 8/256 ГБ - 22 893 ₽ вместо 57 199 ₽
                                Алиэкспресс
                                <p>
                                    Смартфон REALME 12 Pro 5G – это модель 2024 года, оснащенная экраном с насыщенными
                                    цветами,
                                    процессором для повседневных задач и камерой с высоким разрешением. Смартфон имеет
                                    большой экран
                                    – его диагональ составляет 6,7 дюйма. Высокое разрешение Full HD+ обеспечивает
                                    отличную
                                    детализацию и незаметный размер пикселей. Восьмиядерный процессор Qualcomm
                                    Snapdragon 6
                                    Gen 1
                                    справится с подавляющим большинством приложений. Ему помогает оперативная память
                                    объемом
                                    8 ГБ,
                                    которая позволяет избежать зависаний и вылетов программ. На смартфон установлена
                                    последняя на
                                    момент выхода версия Android 14.
                                </p>
                            </li>
                            <li>

                                5. ТВ-приставка ATV на Android 14 с Bluetooth 5 - 1 744 ₽ вместо 4 979 ₽
                                Алиэкспресс

                                Удобный гаджет, чтобы превратить любой телевизор в Смарт ТВ. Процессор: Amlogic S905W2
                                до 1,2
                                ГГц, четырехъядерный чип Cortex-A35. SDRAM 2 ГБ/4 ГБ, а флэш-память EMMC 16 ГБ/64 ГБ.
                            </li>
                            <li>
                                6. Внешний аккумулятор UGREEN, 22,5 Вт, 10000 мАч - 1 674 ₽ вместо 5 339 ₽
                                Алиэкспресс

                                Компактный внешний аккумулятор, поддерживает быструю зарядку, есть светодиодный
                                индикатор.
                            </li>
                        </ol>
                        <p>
                            Подборка отличных скидок! Покупка, Скидки, Промокод, Распродажа, Доставка, Акции, Длиннопост
                            Разбирайте скидки пока они еще горячие! Цены могут поменяться в любую минуту, либо товар
                            может
                            закончиться. Не забывайте проверять свой регион доставки.
                        </p>
                        <p>
                            Больше выгодных предложений ищите в разделе Пикабу Промокоды. Вы сами решаете судьбу скидок,
                            голосуя за топовые варианты. Механика ничем не отличается от Пикабу: есть плюсы, минусы и
                            комментарии. Выводите в Горячее классные предложения или добавляйте свои!
                        </p>

                        <p>
                            <hr/>
                            <strong>
                                Реклама.<br/>
                            </strong>
                            <hr/>
                            Рекламодатель. ООО "АЛИБАБА.КОМ (РУ)" ИНН 7703380158, erid: Kra2449mN
                        </p>
                    </div>
                </div>
                {/*</form>*/}
                <aside className={styles.recomends}>
                    <div className={styles.project}>
                        <ProjectArticle title={'Web - приложение для попита '} img={temp}/>
                    </div>
                    <div className={styles.sticky}>
                        <div className={styles.news}>
                            <h3>Новинки</h3>
                            <LittlePost title={'The quick brown fox jumps over the lazy dog'} img={temp}/>
                            <LittlePost title={'The quick brown fox jumps over the lazy dog'} img={temp}/>
                        </div>
                        <div className={styles.news}>
                            <h3>Похожее</h3>
                            <LittlePost title={'The quick brown fox jumps over the lazy dog'} img={temp}/>
                            <LittlePost title={'The quick brown fox jumps over the lazy dog'} img={temp}/>
                        </div>
                    </div>
                </aside>
                <div className={styles.commentForm} id={'comment'}>
                    <CommentForm cancle={false}/>
                    <Comment comment={commentData} replies={commentData.replies}/>
                </div>
                <span></span>
            </section>
        </main>
    )
};

