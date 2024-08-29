// 'use client'

// import Image from "next/image";
import styles from './page.module.css'
import Organization from '@/components/main/Organization'
import Services from '@/components/main/services/Services'
import Projects from '@/components/main/projects/Projects'
import { AboutUs } from '@/components/main/aboutUs/AboutUs'
import PublicationsTitle from '@/components/publications/title/PublicationsTitle'
import page from "@/app/posts/page.module.css";
import ArticleItem from "@/components/article_item/article_item";
import React from "react";

export const metadata = {
    title: 'Аймани | Главная',
    description: 'Сделать сайт просто!',
}

export default function Home () {

    const data = []

    for (let i = 1; i < 62; ++i) {
        data.push({
            key: i.toString(),
            name: i.toString() + ' product',
            price: Math.floor(Math.random() * 120000)
        });
    }
    const flexRow = [2, 3, 6, 7, 8, 10, 11, 14];
    const flexColumn = [4, 12];
    const without = [5, 13];


  return (
    <main className={styles.main}>
        <Organization/>
        <Services/>
        <Projects/>
        <AboutUs/>
        <PublicationsTitle/>
        <div className={styles.content}>
            {data.slice(0,7).map((item, index) => (
                <div className={`${page[`grid${(index % 14) + 1}`]}`} >
                    {/*<CaseItem name={item.name}  />*/}
                    <ArticleItem name={`${index} title`}
                                 type={flexRow.includes((index % 14) + 1) ? 'flexRow' : flexColumn.includes((index % 14) + 1) ? 'flexColumn'
                                     : without.includes((index % 14) + 1) ? 'withoutImage' : 'full' }/>
                </div>
            ))}
        </div>
    </main>
  )
}
