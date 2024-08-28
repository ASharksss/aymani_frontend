'use client'
import styles from './services.module.css'
import page from "@/app/cases/page.module.css";
import CaseItem from "@/components/case_items/case_item";
import React from "react";
export default function Services () {

    const data = []

    for (let i = 1; i < 62; ++i) {
        data.push({
            key: i.toString(),
            name: i.toString() + ' product',
            price: Math.floor(Math.random() * 120000)
        });
    }

  return (
    <section className={styles.main} id={'services'}>

      <div className={styles.background}>
          <header className={styles.header}> УСЛУГИ</header>
          <p className={styles.bcg}>УСЛУГИ УСЛУГИ </p>
          <p className={styles.bcg}>УСЛУГИ УСЛУГИ</p>
      </div>
        <div className={styles.content}>
            {data.slice(0,6).map((item, index) => (
                <div className={`${page[`grid${(index % 14) + 1}`]}`}>
                    <CaseItem name={item.name}  />
                </div>
            ))}
        </div>
        <div className={styles.content2}>
            {data.slice(0,6).map((item, index) => (
                <div className={`${page[`grid${(index % 14) + 1}`]}`}>
                    <CaseItem name={item.name}  />
                </div>
            ))}
        </div>
      {/*<Image src={} alt={}*/}
    </section>
  )
}