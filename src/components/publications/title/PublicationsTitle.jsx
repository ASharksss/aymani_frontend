'use client'

import React from 'react'

import styles from './publications-title.module.css'
import Tag from '@/components/tags/tag'

export default function PublicationsTitle ({small = false}) {

  return (
    <div className={styles.main}>
      {small ?  <h2>ПУБЛИКАЦИИ</h2> : <h1>ПУБЛИКАЦИИ</h1> }
      <div className={small ? `${styles.description} ${styles.small}` : `${styles.description} ${styles.big}`}>
        <p>User: Антон Генадий Жора |</p>  <p>Date: date |</p>  <Tag/>
      </div>
      <hr className={styles.hr}/>
      <div className={styles.tags}>
        <Tag/>
        <Tag/>
        <Tag/>
        <Tag/>
        <Tag/>
        <Tag/>
      </div>
    </div>
  )
}

