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
  const  pathname  = usePathname()
  return (
    <header className={styles.header}>
      <section className={styles.section}>
        {/*<div className={styles.logo}>*/}
          <header title={'Аймани'} className={styles.logo} onClick={() => router.push('/')}>
            <Ai color={theme === 'light' ? 'white' : 'black'}/>
          </header>
        {/*</div>*/}
        <nav className={styles.buttons}>
          <TransprentButton text={'Блоги'} active={pathname === '/posts'} click={() => router.push('/posts')}/>
          <TransprentButton text={'О нас'} active={pathname === '/'} click={() => router.push('/')} />
          <TransprentButton text={'Кейсы'} active={pathname === '/cases'} click={() => router.push('/cases')}/>
          <TransprentButton text={'Услуги'} active={pathname === '/services'} click={() => router.push('/services')}/>
          <TransprentButton text={'Сменить тему'} click={() => toggle()}/>
        </nav>
      </section>
    </header>
  )
};

