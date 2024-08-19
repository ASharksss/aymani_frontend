'use client'
import AiWeb from '@/components/logo/ai-web/AiWeb'
import { useContext } from 'react'
import { ThemeContext } from '@/contexts/ThemeContext'
import Image from 'next/image'
import developer from '../../asserts/main/DeveloperWorking.jpg'
import styles from './organization.module.css'

export default function Organization () {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={styles.main}>
      <div className={styles.devImage}>
        <Image src={developer} className={styles.backImage} alt={'developer'}/>
      </div>
        <Image src={developer} className={styles.frontImage} alt={'developer'}/>
      <div className={styles.logo}>
        <AiWeb color={theme === 'light' ? 'white' : 'black'}/>
      </div>
      <div className={styles.title}>
        <p>Аймани Web - это платформа, созданная командой высококвалифицированных специалистов в области IT-технологий. </p>
      </div>
    </div>
  )
}