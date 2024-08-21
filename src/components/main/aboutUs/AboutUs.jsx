'use client'
import styles from './about-us.module.css'
import Image from 'next/image'
import line from '../../../asserts/main/curve line.svg'
export function AboutUs () {
  return (
    <div className={styles.main}>
      <h1>О НАС</h1>
      <div className={styles.content}>
      <div className={styles.step}>
        <h2>1</h2>
        <p>Наша цель - стать надежным партнером для бизнеса любого масштаба</p>
      </div>
        <Image src={line} className={styles.image} alt={'line'}/>
      <div className={`${styles.step} ${styles.last}`}>
        <h2>11</h2>
        <p> Мы постоянно совершенствуем свои навыки, чтобы предоставлять нашим клиентам услуги самого высокого уровня</p>
      </div>
      <div className={`${styles.step} ${styles.middle}`}>
        <h2>10</h2>
        <p>Комплексный подход к решению задач </p>
      </div>
      </div>
    </div>
  )
}