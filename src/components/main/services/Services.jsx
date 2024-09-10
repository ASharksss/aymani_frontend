'use client'
import styles from './services.module.css'
import page from "@/app/cases/page.module.css";
import CaseItem from "@/components/case_items/case_item";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {getServices} from "@/redux/lib/services";
import LoadingSceleton from "@/components/loading/LoadingSceleton";
export default function Services () {
    const dispatch = useAppDispatch()
    const {services} = useAppSelector(state => state.services)

    useEffect(() => {
        dispatch(getServices())
    },[])

    // if(services.status === 'loading'){
    //     return (
    //         <LoadingSceleton/>
    //     )
    // }


  return (
    <section className={styles.main} id={'services'} >

      <div className={styles.background}>
          <header className={styles.header}> УСЛУГИ</header>
          <p className={styles.bcg}>УСЛУГИ УСЛУГИ </p>
          <p className={styles.bcg}>УСЛУГИ УСЛУГИ</p>
      </div>
        <div className={styles.content} key={'content'}>
            {services?.items?.length > 0 ?
                services?.items.slice(0,12).map((item, index) => (
                    <div className={`${page[`grid${(index % 14) + 1}`]}`} key={item.id}>
                        <CaseItem key={item.id}
                                  name={item.name}
                                  image={item?.image_url}
                                  price={item.price} click={false}/>
                    </div>
                )) : <LoadingSceleton/>}
            {/*todo : Исправить сверху .slice(0,6)*/}
        </div>
        {/*КОСТЫЛЬ из-за positions */}
        <div className={styles.content2} key={'content2'}>
            {services?.items?.length > 0 ?
                services?.items.slice(0,12).map((item, index) => (
                    <div className={`${page[`grid${(index % 14) + 1}`]}`} key={item.id}>
                        <CaseItem name={item.name} key={item.id} image={item?.image_url}  price={item.price} />
                    </div>
                )) : null}
        </div>
        {/*КОСТЫЛЬ*/}
    </section>
  )
}