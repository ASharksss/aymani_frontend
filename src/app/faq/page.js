import React from 'react';

import styles from './page.module.css'
import FaQData from "@/app/faq/FaQData";
import {IMAGE_URL} from "@/utils";

export const metadata = {
    title: 'Аймани | Ответы',
    description: 'Ответы на часто задаваемые вопросы',
}

async function fetchData() {
    const response = await fetch(`${IMAGE_URL}/api/post/getFaq`, {
        cache: "no-cache"
    });
    if (!response.ok) {
        return null;
    }
    return response.json();
}


export default async function Page() {

    const data = await fetchData();
    return (
        <div className={styles.page}>
            <FaQData data={data}/>
        </div>
    );
};

