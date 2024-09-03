'use client'
import React from 'react';

import styles from './little-post.module.css'
import Image from "next/image";
import {useRouter} from "next/navigation";

export default function LittlePost({img, title, id}) {

    const router = useRouter()

    return (
        <section className={styles.section} onClick={() => router.push(`/posts/${id}`)}>
            <figure className={styles.figure}>
            <Image src={img} title={title} alt={'Фото публикации'} className={styles.img} width={300} height={300}/>
            </figure>
            <header className={styles.header}>
                {title}
            </header>
        </section>
    );
};

