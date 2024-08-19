'use client'

// import Image from "next/image";
import styles from './page.module.css'
import { useContext } from 'react'
import { ThemeContext } from '@/contexts/ThemeContext'
import Organization from '@/components/main/Organization'


export default function Home () {

  const { toggle } = useContext(ThemeContext)

  return (
    <main className={styles.main}>
      <button onClick={() => toggle()}>
        Change Theme
      </button>
        <Organization/>
    </main>
  )
}
