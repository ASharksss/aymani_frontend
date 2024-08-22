'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import image from '@/asserts/temp/temp.jpg'
import styles from './style.module.css'

/***
 * type: full, flexColumn, withoutImage, flexRow
 * @param type
 * @returns {JSX.Element}
 * @constructor
 */
const ArticleItem = ({ type, title }) => {
  const [description, setDescription] = useState('As recently as last month, U.S. intelligence officials warned that Iran aimed to stoke societal discord and undermine former president Donald Trump’s bid to regain the White House, a reprise of its online interference four years ago. Now the 2024 effort appears to have begun, with suspected hacking attempts targeting the Republican and Democratic presidential campaigns. But intelligence officials and disinformation experts remain unsure of Iran’s precise plans.\n' +
    'As recently as last month, U.S. intelligence officials warned that Iran aimed to stoke societal discord and undermine former president Donald Trump’s bid to regain the White House, a reprise of its online interference four years ago. Now the 2024 effort appears to have begun, with suspected hacking attempts targeting the Republican and Democratic presidential campaigns. But intelligence officials and disinformation experts remain unsure of Iran’s precise plans.')
  const [views, setViews] = useState(1000)

  return (
    <div className={styles.main}>
      {
        type === 'full' ?
          <section className={`${styles.full_container} ${styles.container}`}>
            <div className={styles.full_case_info}>
              <header>
                <h2 className={`${styles.full_title} ${styles.title}`}>{title}</h2>
              </header>
              <article className={styles.article}>
              <p className={styles.full_description}>{description}</p>
              <div className={`${styles.full_footer} ${styles.footer}`}>
                <span itemProp="interactionCount">{views} просмотров</span>
                <time dateTime="2024-08-19T14:30:00Z">2 часа назад</time>
              </div>
              </article>
            </div>
            <Image src={image} alt={'Изображение'} className={styles.full_image}/>
          </section>
          : type === 'flexColumn' ?
            <section className={`${styles.column_container} ${styles.container}`}>
              <Image src={image} alt={'Изображение'} className={styles.column_image}/>
              <header>
                <h2 className={`${styles.column_title} ${styles.title}`}>{name}</h2>
              </header>
              <article className={styles.article}>
              <p className={styles.column_description}>{description}</p>
              <div className={`${styles.column_footer} ${styles.footer}`}>
                <span itemProp="interactionCount">{views} просмотров</span>
                <time dateTime="2024-08-19T14:30:00Z">2 часа назад</time>
              </div>
              </article>
            </section>
            : type === 'withoutImage' ?
              <section className={`${styles.without_container} ${styles.container}`}>
                <header>
                  <h2 className={`${styles.without_title} ${styles.title}`}>{name}</h2>
                </header>
                <article className={`${styles.article}`}>
                <p className={styles.without_description}>{description}</p>
                <div className={`${styles.without_footer} ${styles.footer}`}>
                  <span itemProp="interactionCount">{views} просмотров</span>
                  <time dateTime="2024-08-19T14:30:00Z">2 часа назад</time>
                </div>
                </article>
              </section>
              : type === 'flexRow' ?
                <section className={`${styles.row_container} ${styles.container}`}>
                  <div className={styles.row_case_info}>
                    <header>
                      <h2 className={`${styles.row_title} ${styles.title}`}>{name}</h2>
                    </header>
                    <article className={styles.article}>
                      <p className={styles.row_description}>{description}</p>
                      <div className={`${styles.row_footer} ${styles.footer}`}>
                        <span itemProp="interactionCount">{views} просмотров</span>
                        <time dateTime="2024-08-19T14:30:00Z">2 часа назад</time>
                      </div>
                    </article>
                  </div>
                  <Image src={image} alt={'Изображение'} className={styles.row_image}/>
                </section>
                : 'НЕ НАЙДЕНО '
      }
    </div>
  )
}

export default ArticleItem