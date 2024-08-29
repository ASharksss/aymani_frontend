'use client'
import React from 'react';

import styles from './page.module.css'
import Image from "next/image";
import err from '../asserts/ERROR/404.svg'
export default function Custom404()
{
    return (
        <div >
            <div className={styles.flex}>
            <Image src={err} alt={'ERROR 404'}/>
            </div>
        </div>
    );
}
;

