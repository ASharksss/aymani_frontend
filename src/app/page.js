'use client'

// import Image from "next/image";
import styles from './page.module.css'
import {useContext} from 'react'
import {ThemeContext} from '@/contexts/ThemeContext'
import Organization from '@/components/main/Organization'
import Tag from "@/components/tags/tag";
import ReferenceItem from "@/components/reference_item/reference_item";
import Project_in_post from "@/components/project_in_post/project_in_post";
import ArticleItem from "@/components/article_item/article_item";
import CaseItem from "@/components/case_item/case_item";
import PostImage from "@/components/post_image/post_image";


export default function Home() {

  const {toggle} = useContext(ThemeContext)

  return (
    <main className={styles.main}>
      <button onClick={() => toggle()}>
        Change Theme
      </button>
      <Organization/>
      <PostImage/>
    </main>
  )
}
