"use client"

import React, {useState} from 'react';
import image from "../../app/assets/atricle_image.png"
import Image from 'next/image';
import styles from "./style.module.css"

const CaseItem = () => {
  const [height, setHeight] = useState(406)
  const [name, setName] = useState('Сайт под ключ')
  const [price, setPrice] = useState(6000)

  return (
    <div style={{height: `${height}px`}} className={styles.case_container}>
      <div className={styles.case_info}>
        <h3>{name}</h3>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default CaseItem;