'use client'
import {useContext, useRef} from 'react'
import Image from 'next/image'

import {ThemeContext} from '@/contexts/ThemeContext'

import styles from './organization.module.css'

import developer from '../../asserts/main/DeveloperWorking.jpg'

import AiWeb from '@/components/logo/ai-web/AiWeb'
import {useRouter} from "next/navigation";

export default function Organization() {
    const {theme} = useContext(ThemeContext)

    const router = useRouter()

    return (
        <div className={styles.main} >
            <div className={styles.devImage}>
                <Image src={developer.src} className={styles.backImage} alt={'developer'} width={650} height={920}/>
            </div>
            <Image src={developer.src} className={styles.frontImage} alt={'developer'} width={650} height={920}/>
            <div className={styles.logo}>
                <AiWeb color={theme === 'light' ? 'white' : 'black'}/>
            </div>
            <div className={styles.title} >
                <p>Аймани Web - это платформа, созданная командой высококвалифицированных специалистов в области
                    IT-технологий. </p>
                <button className={styles.button} onClick={() => router.push("#call")}>Заказать сайт</button>
            </div>
        </div>)
}