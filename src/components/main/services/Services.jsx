'use client'
import styles from './services.module.css'
import page from "@/app/cases/page.module.css";
import CaseItem from "@/components/case_items/case_item";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {getServices} from "@/redux/lib/services";
export default function Services () {
    const dispatch = useAppDispatch()
    const {services} = useAppSelector(state => state.services)

    useEffect(() => {
        dispatch(getServices())
    },[])


  return (
    <section className={styles.main} id={'services'} >

      <div className={styles.background}>
          <header className={styles.header}> УСЛУГИ</header>
          <p className={styles.bcg}>УСЛУГИ УСЛУГИ </p>
          <p className={styles.bcg}>УСЛУГИ УСЛУГИ</p>
      </div>
        <div className={styles.content}>
            {services?.items?.length > 0 ?
                services?.items.map((item, index) => (
                    <div className={`${page[`grid${(index % 14) + 1}`]}`}>
                        <CaseItem name={item.name} image={item?.image_url}  price={item.price} click={false}/>
                    </div>
                )) : null}


            {/*todo : Исправить сверху .slice(0,6)*/}
        </div>
        {/*КОСТЫЛЬ из-за positions */}
        <div className={styles.content2}>
            {services?.items?.length > 0 ?
                services?.items.map((item, index) => (
                    <div className={`${page[`grid${(index % 14) + 1}`]}`}>
                        <CaseItem name={item.name} image={item?.image_url}  price={item.price} />
                    </div>
                )) : null}
        </div>
        {/*КОСТЫЛЬ*/}
    </section>
  )
}