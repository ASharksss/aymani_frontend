'use client'

import React, { useContext, useState } from 'react'

import styles from './header.module.css'
import TransprentButton from '@/components/ui/buttons/transprent/TransprentButton'
import { ThemeContext } from '@/contexts/ThemeContext'
import Ai from '@/components/logo/ai/Ai'
import { usePathname, useRouter } from 'next/navigation'

export default function Header () {
  const router = useRouter()
  const { theme } = useContext(ThemeContext)
  const  pathname  = usePathname()
  console.log(pathname)
  return (
    <header className={styles.header}>
      <section className={styles.section}>
        {/*<div className={styles.logo}>*/}
          <header title={'Аймани'} className={styles.logo} onClick={() => router.push('/')}>
            <Ai color={theme === 'light' ? 'white' : 'black'}/>
          </header>
        {/*</div>*/}
        <nav className={styles.buttons}>
          <TransprentButton text={'Блоги'} active={pathname === '/blog'}/>
          <TransprentButton text={'О нас'} active={pathname === '/'} />
          <TransprentButton text={'Кейсы'} active={pathname === '/cases'}/>
          <TransprentButton text={'Услуги'} active={pathname === '/services'}/>
        </nav>
      </section>
    </header>
  )
};

