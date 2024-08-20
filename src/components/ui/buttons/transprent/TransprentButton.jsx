'use client'
import React from 'react'

import styles from './transprent-button.module.css'

export default function TransprentButton ({gray = false,active= false, text, click}) {
  return (
    <button className={active ? `${styles.button} ${styles.active}` :`${styles.button} ${styles.color}`} onClick={() => click}>
        {text}
    </button>
  )
};

