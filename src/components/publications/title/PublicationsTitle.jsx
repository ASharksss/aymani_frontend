'use client'

import React, {useCallback, useEffect, useState} from 'react'

import styles from './publications-title.module.css'
import Tag from '@/components/tags/tag'
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {getTags} from "@/redux/lib/tags";
import {getByTag, getPosts} from "@/redux/lib/blogs";

export default function PublicationsTitle({small = false}) {
    const router = useRouter()
    const pathname = usePathname()
    const dispatch = useAppDispatch();
    const searchParams = useSearchParams()

    const [value, setvalue] = useState(5)

    const {tags} = useAppSelector(state => state.tags);

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)
            if(value && name.toLowerCase() === 'tagid'){
                dispatch(getByTag(value))
            }
            else{
                dispatch(getPosts())
            }
            return params.toString()
        },
        [searchParams]
    )
    // клик по тегу -> сохранение позиции
    const handleClick = (itemiId) => {
        router.push('/posts' + '?' + createQueryString('tagId', itemiId) )
    }
    // сброс тегов
    async function Reload(){
        router.push(pathname)
        createQueryString(null, null)
    }

    useEffect(() => {
        dispatch(getTags())
    },[])
    const options = {
        // weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const date = new Date()



    const data = []
    let webDevTags = ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue.js", "Node.js",
        "Express", "MongoDB", "MySQL", "Git", "GitHub", "PHP", "Python", "Django", "Ruby on Rails",
        "Sass", "Bootstrap", "TypeScript", "Webpack"];
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
                <p>Антон Антонов, Генадий Воробьев, Жора Измаился </p>
                <p className={styles.date}> {date.toLocaleString('ru-RU', options)} </p>
                <Tag text={'Бабочки среди радуги'} id={1} />
            </div>
            <hr className={styles.hr}/>
            <div className={styles.tags}>
                <div className={styles.tag} onClick={() => setvalue(data.length)} >
                    <Tag text={'Больше тегов'}/>
                </div>
                    <Tag text={'Сбросить фильтр'} click={() => Reload()}/>
                {tags?.items?.length > 0 ? tags.items.slice(0, value).map((item, index) => (
                    <div className={styles.tag} id={item.key}>
                        <Tag text={item.name} id={(index % 7)}
                             active={searchParams.get('tagId') === item.id.toString()}
                             // Click без скролла
                             // click={() => { router.push(pathname + '?' + createQueryString('tagId', item.id))}}
                             click={() => handleClick(item.id)}
                        />
                    </div>)) :
                data.slice(0, value).map((item, index) => (
                    <div className={styles.tag} id={item.key}>
                        <Tag text={item.name} id={(index % 7)}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

