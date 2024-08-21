'use client'
import React from 'react'

import styles from './transprent-button.module.css'
import Image from 'next/image'

export default function TransprentButton ({gray = false,active= false,
  text,
  click,
  img,
  form}) {
  return (
    <button className={active ? `${styles.button} ${styles.active}` :`${styles.button} ${styles.color}`}
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

