'use client'
import React from 'react';

import styles from './check-box.module.css'
import Link from "next/link";
import Image from "next/image";
import icon from "@/asserts/icons/help-circle.png";

export default function CheckBox({label,
                                     id,
                                     required = false,
                                     faq,
                                     faq_link,
                                     description,
                                     onChange,
                                     description_link,
                                     disabled}) {
    return (
        <div className={styles.checkbox_wrapper_46} key={id}>
            <input type="checkbox" id={id} onChange={onChange}
                   required={required}
                   className={styles.inp_cbx}
                   disabled={disabled}
                   readOnly={disabled}
                   // defaultChecked={disabled}
                   checked={disabled ? disabled : null}
            />
            <label htmlFor={id} className={disabled ? `${styles.cbx} ${styles.gray}` : styles.cbx}>
                <span>
                  <svg viewBox="0 0 12 10" height="10px" width="12px">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <p>{label ? label : 'Text plz'}</p>
                {faq ?
                    <Link href={faq_link ? faq_link : '#'} className={styles.faq}>
                        <Image src={icon} alt={'faq'}/>
                    </Link>
                    : null}

            </label>
            {description ?
                <div  className={styles.descrioption}>
                    {description_link ?
                        <Link href={description_link}
                                  className={`${styles.link} ${styles.p_desc}`}>
                            {description}
                        </Link>
                        : <p className={`${styles.p_desc}`}>{description}</p>}
                </div>
                : null}
        </div>

    );
};

