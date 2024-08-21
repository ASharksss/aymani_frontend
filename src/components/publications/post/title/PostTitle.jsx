'use client'
import React, { useContext } from 'react'

import styles from './post-title.module.css'
import Tag from '@/components/tags/tag'
import TransprentButton from '@/components/ui/buttons/transprent/TransprentButton'
import LikeSvg from '@/components/svgs/LikeSVG'
import ShareSvg from '@/components/svgs/ShareSVG'
import CommentSVG from '@/components/svgs/CommentSVG'
import { ThemeContext } from '@/contexts/ThemeContext'

export default function PostTitle ({title, user, date, tag}) {

  const { theme } = useContext(ThemeContext)

  return (
    <div className={styles.main}>
      <div className={styles.description}>
        <p>User: {user} |</p>  <p>Date: {date} </p>
      </div>
      <nav className={styles.navigationTag}>
        <Tag text={tag} fsize={'20px'}/>
      </nav>
      <header className={styles.header}>
        {title}
      </header>
      <nav className={styles.nav}>
        <TransprentButton img={<LikeSvg color={theme === 'light' ? '#B0B0B0' :  "#474747"}/>}/>
        <TransprentButton img={<ShareSvg color={theme === 'light' ? '#B0B0B0' :  "#474747"}/>}/>
        <TransprentButton img={<CommentSVG color={theme === 'light' ? '#B0B0B0' :  "#474747"}/>}/>
      </nav>
    </div>
  )
};

