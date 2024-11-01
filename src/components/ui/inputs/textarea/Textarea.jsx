import React from 'react'

import styles from './textarea.module.css'

function Textarea ({place, rows, value, onChange,lenght, back = true, req = false}) {
  return (
    <div className={styles.main}>
      <textarea
        onChange={onChange}
        value={value}
        lang={'ru'}
        spellCheck
        maxLength={lenght ? lenght : 3000}
        className={back ? `${styles.input} ${styles.back}` : `${styles.input} ${styles.anotherBack}` }
        rows={rows}
        required={req}
        placeholder={place ? place : null}/>
    </div>
  )
}

export default Textarea