'use client'
import React, {useContext} from 'react'

import styles from './post-title.module.css'
import Tag from '@/components/tags/tag'
import TransprentButton from '@/components/ui/buttons/transprent/TransprentButton'
import LikeSvg from '@/components/svgs/LikeSVG'
import ShareSvg from '@/components/svgs/ShareSVG'
import CommentSVG from '@/components/svgs/CommentSVG'
import {ThemeContext} from '@/contexts/ThemeContext'
import {useRouter} from "next/navigation";


export default function PostTitle({title, user, date, tag, buttons= true}) {

    const {theme} = useContext(ThemeContext)
    const router = useRouter()
    const handleLinkClick = () => {
        router.push('#comment');
        // commentRef.current.scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'center',
        // });
    };


    return (
        <div className={styles.main}>
            <div className={styles.description}>
                {user ? <p>User: {user} </p> : null } {date ?  <p>Date: {date} </p> : null}
            </div>
            <nav className={styles.navigationTag}>
                <Tag text={tag} fsize={'20px'} id={1}/>
            </nav>
            <header className={styles.header}>
                {title}
            </header>
            {buttons ?
            <nav className={styles.nav} >
                {/*<TransprentButton img={<LikeSvg color={theme === 'light' ? '#B0B0B0' : "#474747"}/>}/>*/}
                <TransprentButton img={<ShareSvg color={theme === 'light' ? '#B0B0B0' : "#474747"}/>}/>
                <TransprentButton img={<CommentSVG color={theme === 'light' ? '#B0B0B0' : "#474747"}/>}
                                  click={() => handleLinkClick()}
                />
            </nav> : null}
        </div>
    )
};

