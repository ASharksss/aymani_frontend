'use client'
import React from 'react';

import styles from './section.module.css'

export default function Section() {
    return (
        <select id="pet-select" className={styles.select} required>
            <option className={styles.placeholder} value="" >--Желаемый тип услуги--</option>
            <option className={`${styles.option}`} value="dog">Dog</option>
            <option className={`${styles.option}`} value="cat">Cat</option>
            <option className={`${styles.option}`} value="hamster">Hamster</option>
            <option className={`${styles.option}`} value="parrot">Parrot</option>
            <option className={`${styles.option}`} value="spider">Spider</option>
            <option className={`${styles.option}`} value="goldfish">Goldfish</option>
        </select>
    )
};

