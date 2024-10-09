'use client'
import {useContext, useRef} from 'react'

import {ThemeContext} from '@/contexts/ThemeContext'

import styles from './organization.module.css'

import developer from '../../../public/asserts/main/DeveloperWorking.jpg'

import AiWeb from '@/components/logo/ai-web/AiWeb'
import {useRouter} from "next/navigation";

export default function Organization() {
	const {theme} = useContext(ThemeContext)
	const forme = useRef(null)

    const router = useRouter()

	return (
		<div className={styles.main} ref={forme}>
			<div className={styles.devImage}>
				<img src={developer.src} className={styles.backImage} alt={'developer'} width={650} height={920}/>
			</div>
			<img src={developer.src} className={styles.frontImage} alt={'developer'} width={650} height={920}/>
			<div className={styles.logo}>
				<AiWeb color={theme === 'light' ? 'white' : 'black'}/>
			</div>
			<div className={styles.title}>
				<p>Аймани Web - молодая команда по разработке веб-приложений и сайтов с нуля.
					</p>
                <button className={styles.button} onClick={() => router.push("#call")}>Заказать сайт</button>
			</div>
		</div>
	)
}