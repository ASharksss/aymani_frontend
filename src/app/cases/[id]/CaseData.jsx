'use client'
import React, {useEffect} from 'react';
import styles from '../../page.module.css'
import page from "@/app/page.module.css";

import CaseTitle from "@/components/case_items/title/CaseTitle";
import WorkProgress from "@/components/case_items/work-progress/WorkProgress";
import Projects from "@/components/main/projects/Projects";
import temp from "@/asserts/temp/temp.jpg";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {getCases, getOneCase} from "@/redux/lib/cases";
import {useParams} from "next/navigation";
import CaseItem from "@/components/case_items/case_item";
import Link from "next/link";


export default function CaseData() {

    const data = {
        plan: {
            text: ' «ХимФармЗавод» выпускает и продает по всей стране первоклассную лакокрасочную продукцию. Заняв лидирующую позицию в отрасли, компания решила обновить сайт — мы придумали, каким он должен быть у крупнейшего отечественного производителя декоративных покрытий.'
        },
        design: {
            text: 'За основу брали цветовую палитру компании, его логотип и шрифт организации'
        },
        code: {
            text: 'Просто скажем что тут была очень заумная и муторная часть реализации проекта'
        },
        test: {
            text: 'На этом этапе проверяется работоспособность и качество веб-сайта'
        },
        total: {
            header: 'ИТОГО',
            text: 'Мы наворошили кучу статей и что то как то сделали, чтобы оно работало!!!!',
            price: 'Цена проекта составила 12 000 рублей',
            numb: 0,
        }
    }
    const template = [
        {
            header: 'Планирование',
            numb: '1',
            blockquote: 'На этом этапе проводится анализ требований клиента и определяются цели и задачи. Важно определить основные функциональные и дизайнерские требования, установить сроки',
            text: data?.plan?.text, //data.text
            colors: null,
            design: false,
            image: null, //data.image
            // imageTitle: 'шарики', //data.imageTitle
            iiiar: true,
        },
        {
            header: 'Дизайн',
            numb: '2',
            blockquote: 'В этой фазе разрабатывается визуальное представление сайта. Дизайнер создает макеты, учитывая требования клиента и современные дизайнерские тенденции',
            text: data.design.text, //data.text
            design: true,
            colors: {
                base: 'blue',
                nuans_start: 'black',
                nuans_middle: 'gray',
                nuans_end: 'white',
                focus: 'red',
            },
            image: temp, //data.image
            imageTitle: 'Логотип организации', // data.imageTitle
        },
        {
            header: 'Кодинг',
            numb: '3',
            blockquote: 'На этом этапе программисты создают веб-сайт, используя выбранный дизайн и функциональные требования',
            colors: null,
            text: data?.code?.text, //data.text
            design: false,
            image: temp, //asserts
            imageTitle: null, //null
        },
        {
            header: 'Тестирование',
            numb: '4',
            colors: null,
            blockquote: 'На этом этапе проверяется работоспособность и качество веб-сайта',
            text: data?.test?.text, //data.text
            design: false,
            image: temp, //asserts
            imageTitle: null, //null
        }
    ]

    const dispatch = useAppDispatch()
    const {id} = useParams()
    const {oneCase} = useAppSelector(state => state.cases)
    const { cases } = useAppSelector(state => state.cases)

    useEffect(() => {
        dispatch(getOneCase(id))
    }, [])
    useEffect(() => {
        dispatch(getCases())
    }, [])
        // console.log(oneCase?.result)

    return (
        <section className={styles.main}>
            {oneCase?.items.length !== 0 ?
                <CaseTitle type={oneCase?.items.name}
                           tag={oneCase?.items.tag.name}
                           date={oneCase?.items.createdAt} companyname={oneCase?.items.customer}
                           developers={'FOra Hola DOra'}/>
                :
                <CaseTitle type={'NULL'} date={'NULL'} companyname={'NULL'}
                           developers={'NULL'}/>
            }

            {oneCase?.items.length !== 0 ?
                oneCase?.items.case_blocks.map((step, index) => (
                        <WorkProgress header={step.type_block}
                                      text={step.text}
                                      colors={step.color_shems.length > 0 ? step.color_shems : false}
                                      numb={index + 1}
                                      shar={step.type_block.toLowerCase() === 'планирование'}
                                      unique={step.color_shems.length > 0}
                                      blockquote={step.attachment_title}
                                      image={step.attachment}
                                      imageTitle={step.attachment_title}
                        />
                    ))
                : null}
            <Projects text={'РЕЗУЛЬТАТ'} tablet={oneCase?.result.desktop_version} mobile={oneCase?.result.mobile_version}/>

            <span className={styles.span}> asdfasf</span>
            <WorkProgress header={data.total.header}
                          blockquote={data.total.text}
                          text={data.total.price}
                          numb={data.total.numb}
                          colors={null}
                          image={null}
            />

                <div className={styles.anotherProjects}>
                    {cases?.items.length > 0 ?
                        cases?.items.slice(0,3).map((item) => (
                            <div className={styles.project}>
                            <CaseItem name={item.name} image={item.cover} id={item.id} />
                            </div>
                        )) : null
                    }
                </div>
                <Link href={'/cases'} className={page.link}>Смотреть еще</Link>
        </section>
    );
};

