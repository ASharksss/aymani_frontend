'use client'

import React from 'react'

import styles from './footer.module.css'

import hello_emoji from '../../../asserts/emoji/hello.png'
import eye_emoji from '../../../asserts/emoji/eye.png'
import vk from '../../../asserts/footer/VK.png'
import email from '../../../asserts/footer/Email.png'
import wa from '../../../asserts/footer/WhatsApp.png'

import Ai from '@/components/logo/ai/Ai'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function Footer ({}) {
  const router = useRouter()
  return (
    <footer className={ styles.frodo}>
      <div className={styles.content}>
        <h2>Создаем · Развиваем · Достигаем</h2>
        <div className={`${styles.description}`}>
          Адрес: РТ, г. Казань, ул. Техническая, д. 39 пом. 4.
          <br/>
          ИНН 1659180558 | ОГРН 1171690030599 | КПП 165901001
          <br/>
          Основным видом деятельности является торговля розничная по почте или по информационно-коммуникационной сети Интернет
        </div>
        <div className={styles.buttons}>
          <button className={styles.whiteButton} onClick={() => router.push('contact')}>
            <div className={styles.b_content}>
              <Image src={eye_emoji} alt={''} width={22}/>
              <div className={`${styles.textB}`}>
                Документы
              </div>
            </div>
          </button>
          <button className={styles.whiteButton}>
            <div className={styles.b_content}>
              <Image src={hello_emoji} alt={''} width={22}/>
              <div className={`${styles.textB}`}>
                Контакты
              </div>
            </div>
          </button>
        </div>
        <hr className={styles.hr}/>
        <div className={styles.coopiryte}>
          <div className={`${styles.block}`} onClick={() => router.push('/')}>
            <Ai/>
          </div>
          <div className={styles.block}>
            <div className={` ${styles.c_text}`}>
              © 2024 АЙМАНИ. Все права защищены.
            </div>
          </div>
          <div className={`${styles.block}`}>
            <div className={styles.buttons}>
              <button className={styles.button}><Image src={vk} alt={'vk'} width={15}/></button>
              <button className={styles.button}><Image src={wa} alt={'whatsApp'} width={15}/></button>
              <button className={styles.button}><Image src={email} alt={'email'} width={15}/></button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer