// 'use client'
import React from "react";

import styles from './page.module.css'
import global from "@/app/page.module.css";

import Organization from '@/components/main/Organization'
import Services from '@/components/main/services/Services'
import Projects from '@/components/main/projects/Projects'
import PublicationsTitle from '@/components/publications/title/PublicationsTitle'
import BlogsData from "@/components/main/blog-data/BlogsData";
import AboutUs from '@/components/main/aboutUs/AboutUs'

import Link from "next/link";
import {fetchTags} from "@/utils";
import FaQData from "@/app/faq/FaQData";
import ServiceRequest from "@/components/main/service-request/ServiceRequest";

export const metadata = {
    title: 'Аймани | Главная',
    description: 'Сделать сайт просто!',
    alternates: {
        canonical: "https://aimani.org"
    }
}

export default async function Home() {
    const tags = await fetchTags()

    const data = [
        {
            header: 'Как мы работаем?',
            content: 'Как то так ну вот так 5 минут 10 пятнадцать пятого'
        },
        {
            header: 'Какой стаж работы?',
            content: 'Как то так ну вот так 5 минут 10 пятнадцать пятого'
        },
        {
            header: 'Лендинг',
            content: 'Лендинг — веб-страница, основной задачей которой является сбор контактных данных целевой аудитории. Используется для усиления эффективности рекламы, увеличения аудитории. Целевая страница обычно содержит информацию о товаре или услуге.'
        },
        {
            header: 'Калькулятор',
            content: 'Тут вы можете удобно определить что хотите видеть в своем будущем приложении\n' +
                'Калькулятор удобно рассчитает время и стоимость желаемого проекта'
        },
        {
            header: 'Как мы работаем?',
            content: 'Как то так ну вот так 5 минут 10 пятнадцать пятого'
        },
    ]

    return (
        <main className={styles.main}>
            <Organization/>
            <Services/>
            <Projects/>
            <Link href={'/cases'} className={global.link}>Смотреть еще</Link>
            <AboutUs/>
            <PublicationsTitle tags={tags}/>
            <BlogsData/>
            <Link href={'/posts'} className={global.link}>Смотреть еще</Link>
            <ServiceRequest/>
            <FaQData slice_v={'0, 10'} data={data} mainPad/>
            <Link href={'/faq'} className={global.link}>Посмотреть больше</Link>
        </main>

    )
}
