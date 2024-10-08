'use client'
import React, {useEffect, useRef, useState} from 'react';

import styles from './page.module.css'
import BackTool from "@/asserts/tools/back-tool/BackTool";
import Definition from "@/components/definition/Definition";
import LineBack from "@/components/svgs/LineBack";
import BorderTarma from "@/components/svgs/BorderTarma";
import Accordion from "@/components/accordion/Accordion";
import CheckBox from "@/components/ui/checkbox/CheckBox";
import ArticleItem from "@/components/article_item/article_item";
import page from "@/app/cases/page.module.css";
import CaseItem from "@/components/case_items/case_item";
import LoadingSceleton from "@/components/loading/LoadingSceleton";
import Nothing from "@/components/nothing/Nothing";
import ServiceRequest from "@/components/main/service-request/ServiceRequest";
import MouseMove from "@/components/mouse-move/MouseMove";

export default function ServicesData({data = {}}) {

    const [cost, setCost] = useState(0);
    const [day, setDay] = useState(0);
    const [checked, setChecked] = useState(0);
    const parent = useRef(null);

    const step_color = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
    // const step_color = ['red', 'pink', 'blue', 'green', 'yellow'];
    // const step_color = ['#ffff00', '#ffdd11', '#ffbb22', '#ff9933', '#ff7744', '#ff5555', '#dd66ff', '#bb77ff', '#9988ff', '#7799ff']
    // const step_color = ['#204a35', '#1eb157', '#1db768', '#1cc07e', '#1acd9f', '#18eecd', '#16cfbf', '#13b1b1', '#10aaa2', '#0d9b95']
    const handleCheckboxChange = (checked, dayy, costt) => {
        setDay(checked ? day + dayy : day - dayy);
        setCost(checked ? cost + costt : cost - costt);
    };

    useEffect(() => {
        const checkedFunctionals = data.functionals.filter((f) => f.checked);
        const totalCost = checkedFunctionals.reduce((acc, f) => acc + f.price, 0);
        const totalDays = checkedFunctionals.reduce((acc, f) => acc + f.days, 0);

        setCost(totalCost);
        setDay(totalDays);
    }, [data.functionals]);

    useEffect(() => {
        setChecked([...document.querySelectorAll('input:checked')].length -1)
        // console.log(checked);
    }, [[...document.querySelectorAll('input:checked')].length -1])

    return (
        <div className={styles.main}>
            <div className={styles.backToole}>
                <BackTool/>
            </div>
            <div className={styles.definitions}>
                <Definition head={data.name}
                            description={data.description}/>
            </div>
            <div className={styles.slides}>

                <input type="checkbox" className={styles.input} name="r" id={'calculator'} checked/>
                <input type="checkbox" className={`${styles.input} ${styles.name_from}`} name="r" id='name_form'/>

                <div className={`${styles.slide} ${styles.s1}`}>
                    <div className={styles.calculator}>
                        <div className={styles.lineBack}>
                            <LineBack step_color={step_color.slice(0, checked)}/>
                        </div>
                        <div className={styles.tarma}>
                            <BorderTarma/>
                        </div>
                        <div className={styles.someIndex}>
                            <Accordion heading={'Калькулятор'}
                                       description={'Тут вы можете удобно определить что хотите видеть в своем будущем приложении\n' +
                                           'Калькулятор удобно рассчитает время и стоимость желаемого проекта'}
                                       fontSize={'big'}/>
                        </div>
                        <div className={styles.columns}>

                            <div className={styles.first}>
                                <Accordion heading={data.name}
                                           description={'Тип услуги'}
                                           faq fontSize={'middle'}/>
                                <div className={styles.checkBoxes} ref={parent}>
                                    <MouseMove parent={parent} id={'move'}>
                                        <div className={styles.some}>
                                        {/*<h1>Листай</h1>*/}
                                        <svg fill="var(--focus-color-end)" opacity="0.4" width="48px" height="48px" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.293,8.707a1,1,0,0,1,0-1.414l4-4a1,1,0,0,1,1.414,0l4,4a1,1,0,1,1-1.414,1.414L12,5.414,8.707,8.707A1,1,0,0,1,7.293,8.707Zm0,8,4,4a1,1,0,0,0,1.414,0l4-4a1,1,0,0,0-1.414-1.414L12,18.586,8.707,15.293a1,1,0,1,0-1.414,1.414Z"/>
                                        </svg>
                                        </div>
                                    </MouseMove>
                                    {data?.functionals.length > 0 ?
                                        data?.functionals.map((item) => (
                                            <CheckBox id={item.id} label={item.name}
                                                      faq
                                                      onChange={(e) => handleCheckboxChange(e.target.checked, item.days, item.price)}
                                                      description={item.description}
                                                      disabled={item.checked}
                                            />
                                        )) : null
                                    }
                                </div>

                            </div>

                            <div className={styles.second}>
                                <Accordion heading={'Итог'}
                                           fontSize={'middle'}
                                            description={'Выбрано блоков: ' + checked.toString() }
                                />
                                <Accordion heading={`${cost} ₽`}
                                           description={'Стоимость работ определяется в \n' +
                                               'зависимости от выбранных чего то там '}
                                           fontSize={'middle'} />
                                <Accordion heading={`${day} Дней`}
                                           description={'Стоимость работ определяется в \n' +
                                               'зависимости от выбранных чего то там '}
                                           fontSize={'middle'}/>
                                <label className={styles.button} htmlFor='name_form'>
                                    {/*<TransprentButton text={'Заказать сайт'}/>*/}
                                    Заказать сайт
                                </label>

                                {/*<label className={styles.button} htmlFor='name_form'>*/}
                                {/*    Заказать сайт*/}
                                {/*</label>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.slide}>
                    <ServiceRequest sele_disabled />
                </div>
            </div>




            {/*BACKGROUND*/}
            <div className={styles.back_l}>
                <BorderTarma/>
            </div>
            <div className={styles.back_r}>
                <BorderTarma/>
            </div>
            {/*BACKGROUND*/}

            <div className={styles.publications}>
                <div className={styles.text}>
                    <Accordion fontSize={'big'} heading={'Публикации'} description={'Посмотреть другие посты'} link
                               link_link={'/posts'}/>
                </div>

                <div className={styles.blogs}>
                    {data?.posts?.length > 0 ?
                        data.posts.slice(0, 3).map((item) => (
                            <ArticleItem name={item.title} description={item.description} views={item.views}
                                         time={item.createdAt}
                                         image={item.cover} id={item.id}
                                         type={'flexColumn'}/>
                        ))
                        : <Nothing/>}
                </div>
            </div>

            <div className={styles.projects}>
                <div className={styles.text}>
                    <Accordion fontSize={'big'} heading={'Проекты'} description={'Посмотреть другие работы'} link
                               link_link={'/cases'}/>
                </div>
                <div className={styles.grid} key={'content'}>
                    {data?.cases?.length > 0 ?
                        data.cases.slice(0, 5).map((item, index) => (
                            <div className={`${page[`grid${(index % 14) + 1}`]} ${styles.prod_content}`} key={item.id}>
                                <CaseItem key={item.id}
                                          name={item.name}
                                          image={item?.cover}
                                          price={item.price} click={false}/>
                            </div>
                        )) : <LoadingSceleton/>}
                    {/*t odo : Было сверху .slice(0,6)*/}
                </div>
            </div>
        </div>
    );
};

