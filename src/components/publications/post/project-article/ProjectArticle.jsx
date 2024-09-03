'use client'

import React from 'react';

import styles from './project-article.module.css'
import Image from "next/image";
import {useRouter} from "next/navigation";

export default function ProjectArticle({img, title, id}) {

    const router = useRouter()

    return (
        <section className={styles.section} onClick={() => router.push(`/cases/${id}`)}>
            <figure className={styles.figure}>
                <Image src={img} alt={`project-image`} title={'Последний проект компании'} className={styles.image} fill/>
            </figure>
            <header className={styles.header}>
                {title}
            </header>
        </section>
    );
};

