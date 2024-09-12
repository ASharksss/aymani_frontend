'use client'
import React from 'react';

import styles from './text.module.css'

export default function TextInput({place, value, onChange, lenght, back = true, req = false}) {
    return (
        <div className={styles.main}>
      <input
          onChange={onChange}
          type={'text'}
          value={value}
          lang={'ru'}
          spellCheck
          maxLength={lenght ? lenght : 3000}
          className={back ? `${styles.input} ${styles.back}` : `${styles.input} ${styles.anotherBack}` }
          required={req}
          placeholder={place ? place : null}/>
        </div>
    )
};

