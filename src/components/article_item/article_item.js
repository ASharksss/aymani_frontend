'use client'

import React from 'react'
import Image from 'next/image'
import styles from './style.module.css'
import {useRouter} from "next/navigation";
import {IMAGE_URL, timeAgo} from "@/utils";
import temp from '@/asserts/temp/temp.jpg'

const ArticleItem = ({ name, type, description, views, image, id, time }) => {
  const router = useRouter()
  return (
    <div className={styles.main} onClick={() => router.push(`/posts/${id}`)} key={id}>
      {
        type === 'full' ?
          <section className={`${styles.full_container} ${styles.container}`}>
            <div className={styles.full_case_info}>
              <header>
                <h2 className={`${styles.full_title} ${styles.title}`}>{name}</h2>
              </header>
              <article className={styles.article}>
              <p className={styles.full_description}>{description}</p>
              <div className={`${styles.full_footer} ${styles.footer}`}>
                {/*<span itemProp="interactionCount">{views} просмотров</span>*/}
                <time dateTime={time}>{timeAgo(new Date(time))}</time>
              </div>
              </article>
            </div>
            <div className={styles.full_image}>
            <Image src={`${IMAGE_URL}${image}`} alt={'Изображение'} fill={true} className={styles.image}/>
            </div>
          </section>
          : type === 'flexColumn' ?
            <section className={`${styles.column_container} ${styles.container}`}>
              <div className={styles.column_image}>
                <Image src={image !== null ? `${IMAGE_URL}${image}` : temp } alt={'Изображение'} height={300} width={600} className={styles.image}/>
              </div>
              {/*<Image src={image} alt={'Изображение'} className={styles.column_image}/>*/}
              <header>
                <h2 className={`${styles.column_title} ${styles.title}`}>{name}</h2>
              </header>
              <article className={styles.article}>
              <p className={styles.column_description}>{description}</p>
              <div className={`${styles.column_footer} ${styles.footer}`}>
                {/*<span itemProp="interactionCount">{views} просмотров</span>*/}
                <time dateTime={time}>{timeAgo(new Date(time))}</time>
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
                  {/*<span itemProp="interactionCount">{views} просмотров</span>*/}
                  <time dateTime={time}>{timeAgo(new Date(time))}</time>
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
                        {/*<span itemProp="interactionCount">{views} просмотров</span>*/}
                        <time dateTime={time}>{timeAgo(new Date(time))}</time>
                      </div>
                    </article>
                  </div>
                  <div className={styles.row_image}>
                    <Image src={`${IMAGE_URL}${image}`} alt={'Изображение'} fill={true} className={styles.image}/>
                  </div>
                  {/*<Image src={image} alt={'Изображение'} className={styles.row_image}/>*/}
                </section>
                : 'НЕ НАЙДЕНО '
      }
    </div>
  )
}

export default ArticleItem