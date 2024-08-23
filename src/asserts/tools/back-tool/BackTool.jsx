import React from 'react'

import styles from './back-create.module.css'


import {useRouter} from "next/navigation";
import TransprentButton from "@/components/ui/buttons/transprent/TransprentButton";
import Arrow from "@/components/svgs/Arrow";
function BackTool ({sticky}) {

    const router  = useRouter()

  return (
    <div className={sticky ? `${styles.main} ${styles.sticky}` : styles.main}>
        <div className={styles.back}>
            <Arrow/>
           <TransprentButton text={'Назад'} click={() => router.back()}/>
        </div>
    </div>
  )
}

export default BackTool