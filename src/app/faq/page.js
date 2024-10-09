import React from 'react';

import styles from './page.module.css'
import FaQData from "@/app/faq/FaQData";
import {IMAGE_URL} from "@/utils";

export const metadata = {
    title: 'Аймани | ЧаВо?',
    description: 'Ответы на часто задаваемые вопросы',
}

async function fetchData() {
    try {
        const response = await fetch(`${IMAGE_URL}/api/post/getFaq`, {
            cache: "no-cache"
        });
        if (!response.ok) {
            return null;
        }
        return response.json();

    } catch (error) {
        return console.log('500 Отсутствует подключение к серверу. Мы уже работаем над этим')
    }
}


export default async function Page() {

    const data = await fetchData();
    return (
        <div className={styles.page}>
            <FaQData data={data}/>
        </div>
    );
};

