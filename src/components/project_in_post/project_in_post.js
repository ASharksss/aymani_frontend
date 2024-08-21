"use client"

import React, {useState} from 'react';
import Image from "next/image";
import styles from "./style.module.css"
import image from "../../app/assets/atricle_image.png"

const Project_in_post = () => {
  const [name, setName] = useState('Достаточно длинный заголовок на две строчки')

  return (
    <div className={styles.container}>
      <Image src={image} className={styles.image}/>
      <h2 className={styles.title}>{name}</h2>
    </div>
  );
};

export default Project_in_post;