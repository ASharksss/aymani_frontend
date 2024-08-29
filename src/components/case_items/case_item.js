"use client"

import React, from 'react';
import image from "@/asserts/temp/temp.jpg"
import Image from 'next/image';
import styles from "./style.module.css"
import {useRouter} from "next/navigation";

const CaseItem = ({name, price}) => {
    const router = useRouter()
  return (
    <div className={styles.main} onClick={() => router.push('/cases/1')}>
      <figure className={styles.image}>
        <figcaption className={styles.figurecaption}>
            <h1 className={styles.text}>{name}</h1>
          {price ? <div className={styles.price}>
            <h5> {new Intl.NumberFormat("ru", { style: "currency", currency: "RUB" }).format(price + ((price/100) * 20))}</h5>
            <h3>{new Intl.NumberFormat("ru", { style: "currency", currency: "RUB" }).format(price)}</h3>
          </div> : null}
        </figcaption>
        <Image src={image} className={styles.img} alt={'image'}/>
      </figure>
    </div>
  );
};

export default CaseItem;