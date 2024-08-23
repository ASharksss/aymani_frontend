'use client'

import React from 'react';

import styles from './post-image.module.css'
import Image from "next/image";

export default function PostImage({desctiption, tag, imu}) {
    return (
        <figure className={styles.figure}>
            <Image src={imu} alt={'Error to load image'} className={styles.image} title={desctiption}/>
            <figcaption className={styles.figcaption}>Описание: {desctiption} | #{tag}</figcaption>
        </figure>
    );
};

