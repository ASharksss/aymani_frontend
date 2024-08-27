'use client'

import React, {useState} from 'react'

import styles from './publications-title.module.css'
import Tag from '@/components/tags/tag'
import {useRouter} from "next/navigation";

export default function PublicationsTitle({small = false}) {
    const router = useRouter()
    const [value, setvalue] = useState(5)
    const data = []
    let webDevTags = ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue.js", "Node.js", "Express", "MongoDB", "MySQL", "Git", "GitHub", "PHP", "Python", "Django", "Ruby on Rails", "Sass", "Bootstrap", "TypeScript", "Webpack"];
    for (let i = 0; i < 60; ++i){
        data.push({
            key: i,
            name: webDevTags[(i % 19) + 1]
        })
    }


    return (
        <div className={styles.main}>
            {small ? <h2>ПУБЛИКАЦИИ</h2> : <h1 onClick={() => router.push('/posts')}>ПУБЛИКАЦИИ</h1>}
            <div className={small ? `${styles.description} ${styles.small}` : `${styles.description} ${styles.big}`}>
                <p>User: Антон Антонов, Генадий Воробьев, Жора Измаился </p>  <p className={styles.date}>Date: date </p>  <Tag text={'style'}/>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.tags}>
                <div className={styles.tag} onClick={() => setvalue(data.length)} >
                    <Tag text={'Открыть'}/>
                </div>
                {data.slice(0, value).map((item) => (
                    <div className={styles.tag} id={item.key}>
                        <Tag text={item.name}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

