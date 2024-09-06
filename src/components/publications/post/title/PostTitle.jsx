'use client'
import React, {useCallback, useContext} from 'react'

import styles from './post-title.module.css'
import Tag from '@/components/tags/tag'
import TransprentButton from '@/components/ui/buttons/transprent/TransprentButton'
import ShareSvg from '@/components/svgs/ShareSVG'
import CommentSVG from '@/components/svgs/CommentSVG'
import {ThemeContext} from '@/contexts/ThemeContext'
import { useRouter, useSearchParams} from "next/navigation";
import {getByTag, getPosts} from "@/redux/lib/blogs";
import {useAppDispatch} from "@/redux/hooks";


export default function PostTitle({title, user, date, tag, idTag, buttons= true}) {

    const {theme} = useContext(ThemeContext)
    const router = useRouter()
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const handleLinkClick = () => {
        router.push('#comment');
    };

    const dispatch = useAppDispatch();
    const searchParams = useSearchParams()

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


    return (
        <div className={styles.main}>
            <div className={styles.description}>
                {user ? <p>{user}</p> : null}
                {date ? <p>{new Date(date).toLocaleDateString('ru-RU', options)}</p> : null}            </div>
            <nav className={styles.navigationTag}>
                <Tag text={tag} fsize={'20px'} id={1}
                     click={() => { router.push('/posts' + '?' + createQueryString('tagId', idTag))}}/>
            </nav>
            <header className={styles.header}>
                {title}
            </header>
            {buttons ?
            <nav className={styles.nav} >
                {/*<TransprentButton img={<LikeSvg color={theme === 'light' ? '#B0B0B0' : "#474747"}/>}/>*/}
                {/*<TransprentButton img={<ShareSvg color={theme === 'light' ? '#B0B0B0' : "#474747"}/>}/>*/}
                <TransprentButton img={<CommentSVG color={theme === 'light' ? '#B0B0B0' : "#474747"}/>}
                                  click={() => handleLinkClick()}
                />
            </nav> : null}
        </div>
    )
};

