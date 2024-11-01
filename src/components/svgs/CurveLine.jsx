'use client'
import React from 'react';

import styles from './styles.module.css'

export default function CurveLine({color = 'var(--base-color'}) {
    return (
        <div className={styles.image}>
            <svg width="399" height="378" viewBox="0 0 399 378" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4.5C76.9551 113.086 341.5 83 384.5 167C427.5 251 357.988 347.058 240 364" stroke={color} strokeWidth="3"/>
                <path d="M240.5 366C240.5 371.86 235.963 376.5 230.5 376.5C225.037 376.5 220.5 371.86 220.5 366C220.5 360.14 225.037 355.5 230.5 355.5C235.963 355.5 240.5 360.14 240.5 366Z" stroke={color} strokeWidth="3"/>
                <path d="M395.5 172C395.5 177.86 390.963 182.5 385.5 182.5C380.037 182.5 375.5 177.86 375.5 172C375.5 166.14 380.037 161.5 385.5 161.5C390.963 161.5 395.5 166.14 395.5 172Z" fill='var(--nuans-color)' stroke={color} strokeWidth="3"/>
                <path d="M21.5 12C21.5 17.8598 16.9633 22.5 11.5 22.5C6.03668 22.5 1.5 17.8598 1.5 12C1.5 6.1402 6.03668 1.5 11.5 1.5C16.9633 1.5 21.5 6.1402 21.5 12Z" fill='var(--nuans-color)' stroke={color} strokeWidth="3"/>
            </svg>
        </div>
    );
};

