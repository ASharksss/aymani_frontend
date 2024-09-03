'use client'
import { useContext } from 'react'
import Image from 'next/image'

import { ThemeContext } from '@/contexts/ThemeContext'

import styles from './organization.module.css'

import developer from '../../asserts/main/DeveloperWorking.jpg'

import AiWeb from '@/components/logo/ai-web/AiWeb'

export default function Organization () {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={styles.main}>
      <div className={styles.devImage}>
        <Image src={developer.src} className={styles.backImage} alt={'developer'} width={650} height={920}/>
      </div>
        <Image src={developer.src} className={styles.frontImage} alt={'developer'} width={650} height={920}/>
      <div className={styles.logo}>
        <AiWeb color={theme === 'light' ? 'white' : 'black'}/>
      </div>
      <div className={styles.title}>
        <p>Аймани Web - это платформа, созданная командой высококвалифицированных специалистов в области IT-технологий. </p>
      </div>
    </div>
  )
}