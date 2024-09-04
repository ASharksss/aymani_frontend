'use client'
import React from 'react'

import styles from './transprent-button.module.css'

export default function TransprentButton ({active= false,
  text, fsize,
  click,
  img}) {
  return (
    <button className={active ? `${styles.button} ${styles.active}` :`${styles.button} ${styles.color}`}
            style={{fontSize: fsize}}
            onClick={click}
            title={text}
    >
        {text}
      {img ?
      img
        : null
      }
    </button>
  )
};

