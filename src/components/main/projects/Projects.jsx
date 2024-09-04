'use client'
import styles from './prjects.module.css'
import blogs from '../../../asserts/devices/Блоги.png'
import blog from '../../../asserts/devices/Блог.png'
import {useRouter} from "next/navigation";
import React from "react";
import {IMAGE_URL} from "@/utils";

export default function Projects ({text, mobile, tablet}) {
    const router = useRouter()
  return (
    <div className={styles.main}>
      <h1 onClick={() => router.push('/cases')}>
        {text ? text : 'ПРОЕКТЫ'}
      </h1>
      <div className={styles.devices}>
        <div className={styles.Iphone}>
          <div className={styles.contain_image_phone}>
            <img loading={"lazy"} src={mobile ? `${IMAGE_URL}${mobile}` : blog.src} alt={'projects'} className={styles.image}

            />
          </div>
        </div>
        <span></span>
        <div className={styles.Ipad}>
          <div className={styles.contain_image}>
            <img loading={"lazy"} src={tablet ? `${IMAGE_URL}${tablet}` : blogs.src} alt={'projects'} className={`${styles.image} ${styles.index}`}/>
          </div>
        </div>
      </div>
    </div>
  )
}