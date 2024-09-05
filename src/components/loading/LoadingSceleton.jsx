'use client'
import React from 'react';

import styles from './loading.module.css'

export default function LoadingSceleton() {
    return (
        // <div className={styles.main}>
        //     <h1>
        //         Загрузка...
        //     </h1>
        // </div>
        <div className={styles.main}>

            <div className={styles.container}>
                {Array(16).fill().map((_, index) => (
                    <div className={styles.circle} data-index={index} key={index}/>
                ))}
            </div>
            <h1>
                Загрузка...
            </h1>
        </div>
    );
};

