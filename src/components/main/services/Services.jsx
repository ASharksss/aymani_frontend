import styles from './services.module.css'
import page from "@/app/cases/page.module.css";
import CaseItem from "@/components/case_items/case_item";
import React from "react";
import LoadingSceleton from "@/components/loading/LoadingSceleton";
import {IMAGE_URL} from "@/utils";

async function fetchData() {
    try {
        const response = await fetch(`${IMAGE_URL}/api/post/getServices`, {cache: "no-store"})
        if (!response.ok)
            return []
        return response.json()
    } catch (error) {
        return <div><h1>Отсутствует подключение к серверу.</h1><p>Мы уже работаем над этим</p></div>
    }
}

export default async function Services() {
    const data = await fetchData()

    return (
        <section className={styles.main} id={'services'}>

            <div className={styles.background}>
                <header className={styles.header}> УСЛУГИ</header>
                <p className={styles.bcg}>УСЛУГИ УСЛУГИ </p>
                <p className={styles.bcg}>УСЛУГИ УСЛУГИ</p>
            </div>
            <div className={styles.content} key={'content'}>
                {data?.length > 0 ?
                    data.slice(0, 12).map((item, index) => (
                        <div className={`${page[`grid${(index % 14) + 1}`]}`} key={item.id}>
                            <CaseItem key={item.id}
                                      id={item.id}
                                      service
                                      name={item.name}
                                      image={item?.image_url}
                                      price={item.price} click={false}/>
                        </div>
                    )) : <LoadingSceleton/>}
                {/*t odo : Было сверху .slice(0,6)*/}
            </div>
            {/*КОСТЫЛЬ из-за positions */}
            <div className={styles.content2} key={'content2'}>
                {data?.length > 0 ?
                    data.slice(0, 12).map((item, index) => (
                        <div className={`${page[`grid${(index % 14) + 1}`]}`} key={item.id}>
                            <CaseItem name={item.name} key={item.id} image={item?.image_url} price={item.price}/>
                        </div>
                    )) : null}
            </div>
            {/*КОСТЫЛЬ*/}
        </section>
    )
}



