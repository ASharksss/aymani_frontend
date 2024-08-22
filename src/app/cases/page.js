'use client'
import React from 'react'

import styles from '../page.module.css'
import page from './page.module.css'
import CaseItem from '@/components/case_items/case_item'
import Image from 'next/image'
import magic from '../../asserts/gifs/IIIAR.gif'
import stars from '../../asserts/gifs/stars-main.gif'
export default function Page () {
  const data = []

  for (let i = 1; i < 62; ++i) {
    data.push({
      key: i.toString(),
      name: i.toString() + ' product',
      price: Math.floor(Math.random() * 120000)
    });
  }
  return (
    <div className={styles.main}>
      <h2 className={page.h1}>Проекты</h2>
      <div className={page.GID}>
        <div className={page.bcg}>
          <Image src={stars} className={page.stars} alt={'sharic'}/>
          <Image src={stars} className={page.stars} alt={'sharic'}/>
          <Image src={stars} className={page.stars} alt={'sharic'}/>
          <Image src={stars} className={page.stars} alt={'sharic'}/>
        </div>

        <div className={page.round}>
          <div className={page.sharik}>
          <Image src={magic} className={page.first} alt={'sharic'}/>
          <Image src={magic} className={page.second} alt={'sharic'}/>
          <Image src={magic} className={page.third} alt={'sharic'}/>
          <Image src={magic} className={page.fourth} alt={'sharic'}/>
          </div>
        </div>

      </div>
      <div className={page.grid}>
        {data.map((item, index) => (
          <div className={`${page[`grid${(index % 14) + 1}`]}`}>
            <CaseItem name={item.name}  />
          </div>
        ))}
      </div>
    </div>
  )
};

