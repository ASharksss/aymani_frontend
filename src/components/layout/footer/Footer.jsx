'use client'

import React from 'react'

import styles from './footer.module.css'

import Ai from '@/components/logo/ai/Ai'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from "next/link";

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
          <button className={styles.whiteButton} >
            <div className={styles.b_content}>
              <Image src={'/asserts/emoji/eye.png'} alt={''} width={22} height={22}/>
              <div className={`${styles.textB}`}>
                Документы
              </div>
            </div>
          </button>
          <button className={styles.whiteButton} onClick={() => router.push('/contact')}>
            <div className={styles.b_content}>
              <Image src={'/asserts/emoji/hello.png'} alt={''} width={22} height={22}/>
              <div className={`${styles.textB}`} >
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
              © {new Date().getFullYear()} АЙМАНИ. Все права защищены.
            </div>
          </div>
          <div className={`${styles.block}`}>
            <div className={styles.buttons}>
              <Link href={`https://t.me/@aimani_web`} className={styles.button}>
                <Image src={'/asserts/footer/TG.png'} alt={'tg'} width={26} height={26}/>
              </Link>
              <Link type={'number'} href={'https://wa.me/79673711711'} className={styles.button}>
                <Image src={'/asserts/footer/WhatsApp.png'} alt={'whatsApp'} width={18} height={18}/>
              </Link>
              <Link type={'email'} href={'mailto: aimani.develop@gmail.com'} className={styles.button}>
                <Image src={'/asserts/footer/Email.png'} alt={'email'} width={18} height={18}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer