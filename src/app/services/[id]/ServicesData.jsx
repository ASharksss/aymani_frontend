'use client'
import React, {useEffect, useState} from 'react';

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
import Custom404 from "@/app/not-found";
import ServiceRequest from "@/components/main/service-request/ServiceRequest";

export default function ServicesData({data = {}}) {

    // console.log(data.promiseResult)
    // console.log(data.name)
    // console.log(data)

    const [cost, setCost] = useState(0);
    const [day, setDay] = useState(0);

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

    if (data.error !== null && data.id === undefined) {
        return (
            <Custom404/>
        )
    }

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
                            <LineBack/>
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
                                <Accordion heading={'Лендинг'}
                                           description={'Тип услуги'}
                                           faq fontSize={'middle'}/>
                                <div className={styles.checkBoxes}>
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
                                           description={'Итоговая стоимость реализации'}
                                           fontSize={'middle'}/>
                                <Accordion heading={`${cost} Рублей`}
                                           description={'Стоимость работ определяется в \n' +
                                               'зависимости от выбранных чего то там '}
                                           fontSize={'default'}/>
                                <Accordion heading={`${day} Дней`}
                                           description={'Стоимость работ определяется в \n' +
                                               'зависимости от выбранных чего то там '}
                                           fontSize={'default'}/>
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
                               link_link={'/posts'}/>
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

