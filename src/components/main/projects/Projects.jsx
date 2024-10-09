'use client'
import styles from './prjects.module.css'

import desktop from '../../../asserts/devices/desktop.png'
import mobi from '../../../asserts/devices/mobile.png'


import {useRouter} from "next/navigation";
import React, {useRef} from "react";
import {IMAGE_URL} from "@/utils";
// import MouseMove from "@/components/mouse-move/MouseMove";

export default function Projects({text, mobile, tablet}) {
    const router = useRouter()
    const project = useRef(null)
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
                <span>
                    <div className={styles.some}>
                        {/*<h1>Листай</h1>*/}
                        <svg fill="var(--focus-color-end)" opacity="0.4" width="48px" height="48px" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.293,8.707a1,1,0,0,1,0-1.414l4-4a1,1,0,0,1,1.414,0l4,4a1,1,0,1,1-1.414,1.414L12,5.414,8.707,8.707A1,1,0,0,1,7.293,8.707Zm0,8,4,4a1,1,0,0,0,1.414,0l4-4a1,1,0,0,0-1.414-1.414L12,18.586,8.707,15.293a1,1,0,1,0-1.414,1.414Z"/>
                        </svg>
                    </div>
                </span>
                <div className={styles.Ipad} ref={project}>
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