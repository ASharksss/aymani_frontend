'use client'
import React from 'react'

import styles from './case-title.module.css'
import Tag from '@/components/tags/tag'

export default function CaseTitle ({type, companyname, developers, date}) {
  return (
    <header className={styles.main}>
      <div className={styles.typeOfWork}>
        {type} для компании
      </div>
      <div className={styles.nameOfCompany}>
        &laquo;{companyname}&raquo;
      </div>
      <div className={`${styles.description}`}>
           <p>Developers: {developers}</p>
       <div className={styles.row}>
          <p className={styles.date}>Date: {date} </p> <p className={styles.tag}>#{type}</p> <div className={styles.Ctag}> <Tag text={type} /> </div>
       </div>
      </div>
    </header>
  )
};

