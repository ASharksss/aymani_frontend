'use client'

import styles from './about-us.module.css'
import CurveLine from "@/components/svgs/CurveLine";
export default function AboutUs () {
  return (
    <div className={styles.main}  id={'about'}>
      <h1>О НАС</h1>
      <div className={styles.content}>
      <div className={`${styles.step} ${styles.start}`}>
        <h2>1</h2>
        <p>Мы не боимся публиковать цены! (В услугах вы можете самостоятельно рассчитать  приближенную стоимость вашего проекта)</p>
      </div>
          <CurveLine />
        {/*<Image src={line} className={styles.image} alt={'line'}/>*/}
      <div className={`${styles.step} ${styles.last}`}>
        <h2>11</h2>
        <p>С нами не нужно заниматься брифингом, длительными переговорами. Мы первые кто предлагает насладиться процессом</p>
      </div>
      <div className={`${styles.step} ${styles.middle}`}>
        <h2>10</h2>
        <p>Мы готовы вносить ваши правки в проект. При этом не возьмем с вас дополнительной платы (в пределах разумного)</p>
      </div>
      </div>
    </div>
  )
}