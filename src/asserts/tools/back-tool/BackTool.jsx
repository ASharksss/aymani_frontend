import React from 'react'

import styles from './back-create.module.css'


import {useRouter} from "next/navigation";
import TransprentButton from "@/components/ui/buttons/transprent/TransprentButton";
import Arrow from "@/components/svgs/Arrow";
function BackTool () {

    const router  = useRouter()

  return (
    <div className={styles.main}>
        <div className={styles.back} onClick={() => router.back()}>
            <Arrow/>
           <TransprentButton text={'Назад'} />
        </div>
    </div>
  )
}

export default BackTool