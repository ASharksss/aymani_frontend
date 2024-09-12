'use client'
import React from 'react';

import styles from './definition.module.css'

export default function Definition({head, description}) {
    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                <h1 className={styles.h_heading}>{head}</h1>
            </div>
            <div className={styles.description}>
                <p className={styles.p_desc}>{description}</p>
            </div>
        </div>
    );
};

