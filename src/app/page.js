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
import {fetchTags, IMAGE_URL} from "@/utils";
import FaQData from "@/app/faq/FaQData";
import ServiceRequest from "@/components/main/service-request/ServiceRequest";
// import LoadingSceleton from "@/components/loading/LoadingSceleton";

export const metadata = {
    title: 'Аймани Web - официальный сайт',
    description: 'Аймани Web - это платформа, созданная командой высококвалифицированных специалистов в области IT-технологий. Казань',
    alternates: {
        canonical: "https://aimani.org"
    }
}

async function fetchFaq() {
    try{
        const response = await fetch(`${IMAGE_URL}/api/post/getFaq`, {
            cache: "no-cache"
        });
        if (!response.ok) {
            return null;
        }
        return response.json();
    }
    catch (error){
        return console.log('Нет подключения к серверу @ЧаВо?@')
    }
}


export default async function Home() {
    const tags = await fetchTags()
    const faq = await fetchFaq()

    return (
        <main className={styles.main}>
            <Organization/>
            <AboutUs/>
            <Services/>
            <Projects/>
            <Link href={'/cases'} className={global.link}>Смотреть еще</Link>
            <ServiceRequest />
            <FaQData slice_v={'0, 10'} data={faq} mainPad/>
            <Link href={'/faq'} className={global.link}>Посмотреть больше</Link>
            <PublicationsTitle tags={tags}/>
            <BlogsData/>
            <Link href={'/posts'} className={global.link}>Смотреть еще</Link>
        </main>

    )
}
