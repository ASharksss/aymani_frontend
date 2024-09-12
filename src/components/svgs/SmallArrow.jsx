'use client'
import React from 'react';

import styles from './styles.module.css'

export default function SmallArrow({color = "var(--base-color)"}) {
    return (
        <div className={styles.small_arrow}>
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L5 5.5L9 1.5" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
};

