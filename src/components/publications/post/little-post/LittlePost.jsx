'use client'
import React from 'react';

import styles from './little-post.module.css'
import Image from "next/image";

export default function LittlePost({img, title}) {
    return (
        <section className={styles.section}>
            <figure className={styles.figure}>
            <Image src={img} title={title} alt={'Фото публикации'} className={styles.img}/>
            </figure>
            <header className={styles.header}>
                {title}
            </header>
        </section>
    );
};

