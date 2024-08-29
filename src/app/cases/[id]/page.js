// 'use client'
import React from 'react'

import styles from '../../page.module.css'

import CaseTitle from '@/components/case_items/title/CaseTitle'
import WorkProgress from '@/components/case_items/work-progress/WorkProgress'
import Projects from '@/components/main/projects/Projects'

export const metadata = {
  title: `Единственный и не повторимый проект`,
  description: 'Портфолио Аймани',
}

export default function Page () {
  const data = {
    plan : {
      text: ' «ХимФармЗавод» выпускает и продает по всей стране первоклассную лакокрасочную продукцию. Заняв лидирующую позицию в отрасли, компания решила обновить сайт — мы придумали, каким он должен быть у крупнейшего отечественного производителя декоративных покрытий.'
    },
    design : {
      text: 'За основу брали цветовую палитру компании, его логотип и шрифт организации'
    },
    code : {
      text: 'Просто скажем что тут была очень заумная и муторная часть реализации проекта'
    },
    test : {
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
      image: null, //data.image
      imageTitle: 'Логотип организации', // data.imageTitle
    },
    {
      header: 'Кодинг',
      numb: '3',
      blockquote: 'На этом этапе программисты создают веб-сайт, используя выбранный дизайн и функциональные требования',
      colors: null,
      text: data?.code?.text, //data.text
      design: false,
      image: null, //asserts
      imageTitle: null, //null
    },
    {
      header: 'Тестирование',
      numb: '4',
      colors: null,
      blockquote: 'На этом этапе проверяется работоспособность и качество веб-сайта',
      text: data?.test?.text, //data.text
      design: false,
      image: null, //asserts
      imageTitle: null, //null
    }
  ]

  return (
    <section className={styles.main}>
      {/*<CaseTitle type={'Сайт визитка'} date={'12.03.2002'} companyname={'Аграном'} developers={'Yana Dasha Hola'}/>*/}
      <CaseTitle type={'Сайт визитка'} date={'12.03.2002'} companyname={'Агроном'} developers={'FOra Hola DOra'}/>
      {template.map((step) => (
      <WorkProgress  header={step.header}
                     text={step.text}
                     colors={step.colors}
                     numb={step.numb}
                     shar={step.iiiar}
                     unique={step.design}
                     blockquote={step.blockquote}
                     image={step.image}
                     imageTitle={step.imageTitle}
      />
      ))}
      <Projects text={'РЕЗУЛЬТАТ'}/>

      {/*<WorkProgress header={null} text={data.total.text} colors={null} image={null}/>*/}
      {/*<div className={styles.cost}>*/}
      {/*  <h1>ИТОГО</h1>*/}
      {/*  <p>{data.total.text}</p>*/}
      {/*<p> Цена проекта {new Intl.NumberFormat("ru", { style: "currency", currency: "RUB" }).format(12000)} </p>*/}
      {/*</div>*/}
      <span className={styles.span}> asdfasf</span>
      <WorkProgress  header={data.total.header}
                     blockquote={data.total.text}
                     text={data.total.price}
                     numb={data.total.numb}
                     colors={null}
                     image={null}
      />
    </section>
  )
};

