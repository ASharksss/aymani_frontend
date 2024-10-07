"use client"

import React, from 'react';
import Image from 'next/image';
import styles from "./style.module.css"
// import {useRouter} from "next/navigation";
import {IMAGE_URL} from "@/utils";
import temp from '@/asserts/temp/temp.jpg'
import Link from "next/link";

const CaseItem = ({name, price, image, id, click = true, service= false}) => {
    // const router = useRouter()
    return (
        <Link className={styles.main} href={service ? `/services/${id}` : `/cases/${id}`}>
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
                <Image src={image !== null ? `${IMAGE_URL}${image}` : temp} className={styles.img} alt={'image'} fill={true}/>
            </figure>
        </Link>
    );
};

export default CaseItem;