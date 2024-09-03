'use client'
import styles from './services.module.css'
import page from "@/app/cases/page.module.css";
import global from '@/app/page.module.css'
import CaseItem from "@/components/case_items/case_item";
import React, {useEffect, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {getCases} from "@/redux/lib/cases";
import Link from "next/link";
export default function Services () {
    const dispatch = useAppDispatch()
    const {cases} = useAppSelector(state => state.cases)

    useEffect(() => {
        dispatch(getCases())
    },[])


  return (
    <section className={styles.main} id={'services'} >

      <div className={styles.background}>
          <header className={styles.header}> УСЛУГИ</header>
          <p className={styles.bcg}>УСЛУГИ УСЛУГИ </p>
          <p className={styles.bcg}>УСЛУГИ УСЛУГИ</p>
      </div>
        <div className={styles.content}>
            {cases?.items?.length > 0 ?
            cases.items.map((item, index) => (
                <div className={`${page[`grid${(index % 14) + 1}`]}`}>
                    <CaseItem name={item.name}  image={item.cover} />
                </div>
            )) : null}
            {/*todo : Исправить сверху .slice(0,6)*/}
        </div>
        <div className={styles.content2}>
            {cases?.items?.length > 0 ?
                cases.items.map((item, index) => (
                <div className={`${page[`grid${(index % 14) + 1}`]}`}>
                    <CaseItem name={item.name}  image={item.cover}/>
                </div>
            )) : null }
        </div>
      {/*<Image src={} alt={}*/}
    </section>
  )
}