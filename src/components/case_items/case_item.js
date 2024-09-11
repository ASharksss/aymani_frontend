"use client"

import React, from 'react';
import Image from 'next/image';
import styles from "./style.module.css"
import {useRouter} from "next/navigation";
import {IMAGE_URL} from "@/utils";

const CaseItem = ({name, price, image, id, click = true}) => {
    const router = useRouter()

    return (
        <div className={styles.main} onClick={() => click ? router.push(`/cases/${id}`) : null}>
            <figure className={styles.image}>
                <figcaption className={styles.figurecaption}>
                    <h1 className={styles.text}>{name}</h1>
                    {price ? <div className={styles.price}>
                        <h5> {new Intl.NumberFormat("ru", {
                            style: "currency",
                            currency: "RUB"
                        }).format(price + ((price / 100) * 20))}</h5>
                        <h3>{new Intl.NumberFormat("ru", {style: "currency", currency: "RUB"}).format(price)}</h3>
                    </div> : null}
                </figcaption>
                <Image src={`${IMAGE_URL}${image}`} className={styles.img} alt={'image'} fill={true}/>
            </figure>
        </div>
    );
};

export default CaseItem;