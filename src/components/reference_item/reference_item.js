"use client"

import React, {useState} from 'react';
import styles from './style.module.css'
import image from "../../app/assets/atricle_image.png"
import Image from "next/image";

const ReferenceItem = () => {

  const [name, setName] = useState('Заголововк')
  const [description, setDescription] = useState('Аймани Web - это платформа, созданная командой высококвалифицированных специалистов в области IT-технологий.')

  return (
    <div className={styles.container}>
      <Image src={image} className={styles.image}/>
      <div className={styles.info}>
        <h2>{name}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ReferenceItem;