import React from 'react'

import styles from '../page.module.css'
import page from './page.module.css'
import Image from 'next/image'
import magic from '../../asserts/gifs/IIIAR.gif'
import stars from '../../asserts/gifs/stars-main.gif'
import Data from "@/app/cases/Data";
import {IMAGE_URL} from "@/utils";

export const metadata = {
    title: 'Портфолио',
    description: 'Портфолио Аймани',
}

async function fetchCases() {
    try {
        const response = await fetch(`${IMAGE_URL}/api/post/getCases`)
        if (!response.ok) {
            return [];
        }
        return response.json();

    } catch (error) {
        return <div><h1>Отсутствует подключение к серверу.</h1><p>Мы уже работаем над этим</p></div>
    }
}

export default async function Page() {
    const data = await fetchCases()

    return (
        <div className={styles.main}>
            <h2 className={page.h1}>Проекты</h2>
            <div className={page.GID}>
                <div className={page.bcg}>
                    <Image src={stars} className={page.stars} alt={'sharic'}/>
                    <Image src={stars} className={page.stars} alt={'sharic'}/>
                    <Image src={stars} className={page.stars} alt={'sharic'}/>
                    <Image src={stars} className={page.stars} alt={'sharic'}/>
                </div>

                <div className={page.round}>
                    <div className={page.sharik}>
                        <Image src={magic} className={page.first} alt={'sharic'}/>
                        <Image src={magic} className={page.second} alt={'sharic'}/>
                        <Image src={magic} className={page.third} alt={'sharic'}/>
                        <Image src={magic} className={page.fourth} alt={'sharic'}/>
                    </div>
                </div>
            </div>
            <Data cases={data}/>
        </div>
    )
};

