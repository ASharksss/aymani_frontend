'use client'
import styles from './prjects.module.css'

import desktop from '../../../asserts/devices/desktop.png'
import mobi from '../../../asserts/devices/mobile.png'


import {useRouter} from "next/navigation";
import React from "react";
import {IMAGE_URL} from "@/utils";
// import MouseMove from "@/components/mouse-move/MouseMove";

export default function Projects({text, mobile, tablet}) {
    const router = useRouter()
    // const project = useRef(null)
    // const ipad = useRef(null)

    return (
        <div className={styles.main} >


            <h1 onClick={() => router.push('/cases')}>
                {text ? text : 'ПРОЕКТЫ'}
            </h1>
            <div className={styles.devices}  >
                <div className={styles.Iphone} >
                    <div className={styles.contain_image_phone}>
                        <img loading={"lazy"} src={mobile ? `${IMAGE_URL}${mobile}` : mobi.src} alt={'projects'}
                             className={styles.image}

                        />
                    </div>
                </div>
                <span></span>
                <div className={styles.Ipad} >
                    <div className={styles.contain_image}>
                        <img loading={"lazy"} src={tablet ? `${IMAGE_URL}${tablet}` : desktop.src} alt={'projects'}
                             className={`${styles.image} ${styles.index}`}
                        />
                    </div>
                </div>


            </div>
        </div>
    )
}