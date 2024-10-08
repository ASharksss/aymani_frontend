import React from 'react'

import styles from '../page.module.css'
import page from './page.module.css'
import Data from "@/app/cases/Data";
import {IMAGE_URL} from "@/utils";

export const metadata = {
    title: 'Портфолио',
    description: 'Портфолио Аймани',
}

async function fetchCases() {
    try {
        const response = await fetch(`${IMAGE_URL}/api/post/getCases`)
        if (!response.ok) {
            return [];
        }
        return response.json();

    } catch (error) {
        return console.log('Отсутствует подключение к серверу @CASES@')
    }
}

export default async function Page() {
    const data = await fetchCases()

  return (
    <div className={styles.main}>
      <h2 className={page.h1}>Проекты</h2>
      <div className={page.GID}>
        <div className={page.bcg}>
          <img src={'/asserts/gifs/stars-main.gif'} className={page.stars} alt={'sharic'}/>
          <img src={'/asserts/gifs/stars-main.gif'} className={page.stars} alt={'sharic'}/>
          <img src={'/asserts/gifs/stars-main.gif'} className={page.stars} alt={'sharic'}/>
          <img src={'/asserts/gifs/stars-main.gif'} className={page.stars} alt={'sharic'}/>
        </div>

        <div className={page.round}>
          <div className={page.sharik}>
          <img src={'/asserts/gifs/IIIAR.gif'} className={page.first} alt={'sharic'}/>
          <img src={'/asserts/gifs/IIIAR.gif'} className={page.second} alt={'sharic'}/>
          <img src={'/asserts/gifs/IIIAR.gif'} className={page.third} alt={'sharic'}/>
          <img src={'/asserts/gifs/IIIAR.gif'} className={page.fourth} alt={'sharic'}/>
          </div>
        </div>
      </div>
        <Data cases={data}/>
    </div>
  )
};

