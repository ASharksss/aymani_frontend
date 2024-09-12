'use client'
import React from 'react';

import styles from './accordion-list.module.css'
import SmallArrow from "@/components/svgs/SmallArrow";

export default function AccordionList({desc = '', header = '', sel, click}) {


    return (
        <div className={styles.main} onClick={click}>
            <div  className={styles.main_header} >
                <h1>
                    {header}
                </h1>
                <div className={sel ? `${styles.i_open} ${styles.icon}` : styles.icon}>
                <SmallArrow/>
                </div>
            </div>
            <div className={sel ? `${styles.open} ${styles.content}` : styles.content} >
                <p> {desc} </p>
            </div>
        </div>
    );
};


