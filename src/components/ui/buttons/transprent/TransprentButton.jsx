'use client'
import React from 'react'

import styles from './transprent-button.module.css'

export default function TransprentButton ({active= false,
  text, fsize, disabled= false,
  click, type, from,
  img}) {
  return (
    <button className={active ? `${styles.button} ${styles.active}` :`${styles.button} ${styles.color}`}
            style={{fontSize: fsize}}
            onClick={click}
            disabled={disabled}
            title={text}
            type={type}
            form={from}
    >
        {text}
      {img ?
      img
        : null
      }
    </button>
  )
};

