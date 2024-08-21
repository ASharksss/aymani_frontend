'use client'
import React from 'react'

import styles from '../../page.module.css'
import CaseTitle from '@/components/case_items/title/CaseTitle'

export default function Page () {
  return (
    <section className={styles.main}>
      {/*<CaseTitle type={'Сайт визитка'} date={'12.03.2002'} companyname={'Аграном'} developers={'Yana Dasha Hola'}/>*/}
      <CaseTitle type={'Сайт визитка'} date={'12.03.2002'} companyname={'Аграном'} developers={'Yana Dasha Hola'}/>
    </section>
  )
};

