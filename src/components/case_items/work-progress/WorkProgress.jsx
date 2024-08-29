'use client'
import React from 'react'

import styles from './work-progress.module.css'
import Image from 'next/image'
import IIIAR from '@/asserts/gifs/IIIAR.gif'

export default function WorkProgress ({
  header, blockquote, numb,
  text, image, imageTitle,shar,
  colors, unique
}) {
  return (
    <section className={styles.section}>
      <div className={styles.leftColumn}>
        <header className={unique ? styles.uniqueHeaders : styles.header}>
          {header}
        </header>
        <div className={styles.desc}>
          <div className={styles.numb}>
            {numb}
          </div>
          <blockquote className={styles.blockquote}>
            {blockquote}
          </blockquote>
        </div>
        <article className={styles.text}>
          {text}
        </article>
        {colors !== null ?
          <div className={styles.colorImages}>
            <div className={styles.oval} style={{ background: colors?.base, border: `1px solid ${colors.base}` }}>База</div>
            <div className={styles.circles}>
              <div className={styles.colors}>
                <div className={styles.circle} style={{ background: colors?.nuans_start }}></div>
                <div className={styles.circle} style={{ background: colors?.nuans_middle }}></div>
                <div className={styles.circle} style={{ background: colors?.nuans_end }}></div>
              </div>
              <article className={styles.nuans}>
                Нюанс
              </article>
            </div>
            <div className={styles.oval} style={{ background: colors?.focus, border: `1px solid ${colors.focus}` }}>Акцент</div>
          </div> : null}
      </div>
      {image !== null  ?
      <div className={styles.imageBlock}>
        <Image src={image} alt={'image'} title={imageTitle} className={styles.Unique}/>
        {imageTitle ? <article className={styles.imageTitle}>{imageTitle}</article> : null}
      </div> : null }
      {shar ?
      <div className={styles.iiiariki}>
        <Image src={IIIAR} alt={'image'} title={imageTitle} className={`${styles.image} ${styles.mains}`}/>
        <Image src={IIIAR} alt={'image'} title={imageTitle} className={`${styles.image} ${styles.first}`}/>
        <Image src={IIIAR} alt={'image'} title={imageTitle} className={`${styles.image} ${styles.second}`}/>
        <Image src={IIIAR} alt={'image'} title={imageTitle} className={`${styles.image} ${styles.third}`}/>
        <Image src={IIIAR} alt={'image'} title={imageTitle} className={`${styles.image} ${styles.fourth}`}/>
        <Image src={IIIAR} alt={'image'} title={imageTitle} className={`${styles.image} ${styles.five}`}/>
        <Image src={IIIAR} alt={'image'} title={imageTitle} className={`${styles.image} ${styles.sixs}`}/>
      </div> : null}
    </section>
  )
};

