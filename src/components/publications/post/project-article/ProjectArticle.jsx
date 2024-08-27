'use client'

import React from 'react';

import styles from './project-article.module.css'
import Image from "next/image";

export default function ProjectArticle({img, title}) {
    return (
        <section className={styles.section}>
            <figure className={styles.figure}>
                <Image src={img} alt={`project-image`} title={'Последний проект компании'} className={styles.image}/>
            </figure>
            <header className={styles.header}>
                {title}
            </header>
        </section>
    );
};

