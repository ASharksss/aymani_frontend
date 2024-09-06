'use client'
import React from 'react'

import styles from './work-progress.module.css'
import Image from 'next/image'
import IIIAR from '@/asserts/gifs/IIIAR.gif'
import {IMAGE_URL} from "@/utils";

export default function WorkProgress ({
  header, blockquote, numb,
  text, image, imageTitle,shar,
  colors, unique
}) {

  // console.log('clr', colors)
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
          <blockquote className={styles.text}>
            {blockquote}
          </blockquote>
        </div>
        <article className={styles.blockquote}>
          {text.replace(//g, '').split('\n').map((line, index) => (
              <p key={index}>{line}</p>
          ))}
        </article>
        {/*{console.log(colors)}*/}
        {colors ?
          <div className={styles.colorImages}>
            <div className={styles.oval} style={{background: colors[0]?.base_color, border: `1px solid ${colors[0].base_color}`, color: colors[0]?.accent_color }}>База</div>
            <div className={styles.circles}>
              <div className={styles.colors}>
                {colors[0].nuance_colors?.map((color) => (
                    <div key={color.id} className={styles.circle} style={{ background: color.color }}></div>
                    )) }
              </div>
              <article className={styles.nuans}>
                Нюанс
              </article>
            </div>
            <div className={styles.oval} style={{ background: colors[0]?.accent_color, border: `1px solid ${colors[0].accent_color}`, color: colors[0]?.base_color  }}>Акцент</div>
          </div> : null}
      </div>
      {image !== null && image !== undefined && shar === false ?
      <div className={styles.imageBlock} >
        {unique ?
            // <>
              <div className={styles.imagespan}
                   // style={{background: `${colors[0].base_color}` }}
              >
              <Image
                  src={`${IMAGE_URL}${image}`} alt={'image'}
                  title={imageTitle}
                  className={styles.logoImage}
                  // fill
                  width={1000}
                  height={600}
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 33vw"
              />
              </div>
            // </>
              :
            <Image
                src={`${IMAGE_URL}${image}`} alt={'image'}
                title={imageTitle}
                className={styles.Unique}
                // fill
                width={1000}
                height={500}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            }
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

