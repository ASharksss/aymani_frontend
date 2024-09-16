import React from 'react'

import styles from './nothing.module.css'
import Image from "next/image";

function Nothing ({text}) {
  return (
    <div className={styles.main}>
      <Image src={'/asserts/ERROR/Nothing.png'} alt={'not found'} className={styles.img} height={200} width={280}/>
      <div className={styles.d2}> {text ? text : 'Ничего не найдено'} </div>
      {/*<div className={global.d3}> Перезагрузите страницу если ничего не происходит </div>*/}
    </div>
  )
}

export default Nothing