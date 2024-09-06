'use client'

import React, { useContext } from 'react'

import styles from './header.module.css'
import TransprentButton from '@/components/ui/buttons/transprent/TransprentButton'
import { ThemeContext } from '@/contexts/ThemeContext'
import Ai from '@/components/logo/ai/Ai'
import { usePathname, useRouter } from 'next/navigation'

export default function Header () {

  const router = useRouter()
  const { theme, toggle } = useContext(ThemeContext)
  const  pathname  = usePathname();

  const Imaru = () => {
      return(
          <div title="cart"  className="label"  >
              {/*<input id="cart" name="page" type="radio"/>*/}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="inherit" xmlns="http://www.w3.org/2000/svg"
                   className="icon theme">
                  <path
                      d="M12,24 C18.6274547,24 24,18.6274547 24,12 C24,5.37254525 18.6274547,0 12,0 C5.37254525,0 0,5.37254525 0,12 C0,18.6274547 5.37254525,24 12,24 Z M12,22 L12,2 C16.9706013,2 21,6.02939872 21,12 C21,17.9706013 16.9706013,22 12,22 Z"
                      fill="var(--base-color)">
                  </path>
              </svg>
          </div>
      )
    }

  return (
    <nav className={styles.header}>
      <section className={styles.section}>
        {/*<div className={styles.logo}>*/}
          <header title={'Аймани'} className={styles.logo} onClick={() => router.push('/')}>
            <Ai color={theme === 'light' ? 'white' : 'black'}/>
          </header>
        {/*</div>*/}
        <nav className={styles.buttons}>
          <TransprentButton text={'О нас'} active={pathname === '/'} click={() => router.push('/')} />
          <TransprentButton text={'Блог'} active={pathname === '/posts'} click={() => router.push('/posts')}/>
          <TransprentButton text={'Услуги'} active={pathname === '/#services'} click={() => router.push('/#services')}/>
          <TransprentButton text={'Кейсы'} active={pathname === '/cases'} click={() => router.push('/cases')}/>
          <TransprentButton
              img={<Imaru/>}
              click={() => toggle()}/>
        </nav>
      </section>
    </nav>
  )
};

