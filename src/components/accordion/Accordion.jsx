'use client'
import React from 'react';

import styles from './accordion.module.css'
import Link from "next/link";
import Image from "next/image";

import icon from '../../asserts/icons/help-circle.png'

export default function Accordion({
                                      fontSize = 'default',
                                      faq = false,
                                      faq_link,
                                      link_link,
                                      link = false,
                                      without = false,
                                      heading,
                                      link_head = false,
                                      href_head,
                                      description,
                                  }) {


    return (
        <div className={styles.main}>
            <section className={styles.section}>
                <div className={styles.flex}>
                    {link_head ?
                        <Link href={href_head} className={`${styles.heading} ${styles.head_hover}`}>
                            {fontSize === 'default' ?
                                <h3>{heading}</h3> :
                                fontSize === 'middle' ?
                                    <h2>{heading}</h2> :
                                    fontSize === 'big' ?
                                        <h1>{heading}</h1> : null
                            }
                        </Link>
                        :
                        <div className={styles.heading}>
                            {fontSize === 'default' ?
                                <h3>{heading}</h3> :
                                fontSize === 'middle' ?
                                    <h2>{heading}</h2> :
                                    fontSize === 'big' ?
                                        <h1>{heading }  </h1> : null
                            }
                        </div>}
                    {faq ?
                        <Link href={faq_link ? faq_link : '#'} className={styles.faq}>
                            <Image src={icon} alt={'faq'}/>
                        </Link>
                        : null}
                </div>
                {without ? null :
                    <div className={styles.descrioption}>
                        {link ? <Link href={link_link ? link_link : "#"}
                                      className={`${styles.link} ${styles.p_desc}`}>{description}</Link>
                            : <p className={`${styles.p_desc}`}>{description}</p>}
                    </div>}
            </section>
        </div>
    );
};

