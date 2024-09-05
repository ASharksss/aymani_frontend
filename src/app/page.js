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

export const metadata = {
    title: 'Аймани | Главная',
    description: 'Сделать сайт просто!',
}

export default function Home() {

    return (
        <main className={styles.main}>
            <Organization/>
            <Services/>
            {/*<Link href={'/cases'} className={global.link}>Смотреть еще</Link>*/}
            <Projects/>
            <Link href={'/cases'} className={global.link}>Смотреть еще</Link>
            <AboutUs/>
            <PublicationsTitle/>
            <BlogsData/>
            <Link href={'/posts'} className={global.link}>Смотреть еще</Link>
        </main>

    )
}
