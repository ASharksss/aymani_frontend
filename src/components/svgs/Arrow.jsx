'use client'

import React from 'react';

import styles from './styles.module.css'

export default function Arrow({color = "var(--base-color)"}) {
    return (
        <div className={styles.back}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_290_6765)">
                    <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill={color} />
                </g>
                <defs>
                    <clipPath id="clip0_290_6765">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

