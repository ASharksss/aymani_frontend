'use client'
import React from 'react';

import styles from './accordion-list.module.css'
import SmallArrow from "@/components/svgs/SmallArrow";

export default function AccordionList({desc = '', header = '', sel, click}) {


    return (
        <div className={styles.main} onClick={click}>
            <label className={styles.main_header} htmlFor={sel} >
                <h1>
                    {header}
                </h1>
                <div className={styles.icon}>
                <SmallArrow/>
                </div>
            </label>
            <input type="checkbox" id={sel} className={styles.input} />
            <div className={ styles.content} >
                <p> {desc} </p>
            </div>
        </div>
    );
};


