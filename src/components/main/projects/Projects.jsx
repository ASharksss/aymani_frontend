'use client'
import styles from './prjects.module.css'
import Image from 'next/image'
import blogs from '../../../asserts/devices/Блоги.png'
import blog from '../../../asserts/devices/Блог.png'

export default function Projects () {
  return (
    <div className={styles.main}>
      <h1>
        ПРОЕКТЫ
      </h1>
      <div className={styles.devices}>
        <div className={styles.Iphone}>
          <div className={styles.contain_image_phone}>
            <Image src={blog} alt={'projects'} className={styles.image}/>
          </div>
        </div>
        <span></span>
        <div className={styles.Ipad}>
          <div className={styles.contain_image}>
            <Image src={blogs} alt={'projects'} className={styles.image}/>
          </div>
        </div>
      </div>
    </div>
  )
}