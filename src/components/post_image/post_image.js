"use client"

import React, {useState} from 'react'
import Image from "next/image";
import image from '../../app/assets/atricle_image.png'
import styles from './styles.module.css';

const PostImage = () => {
  const [description, setDescription] = useState('Название фотографии')
  const [tag, setTag] = useState('Web-тег')

  return (
    <div className={styles.container}>
      <figure>
        <Image src={image} alt={description} className={styles.image}/>
        <figcaption className={styles.image_description}>Описание: {description} | #{tag}</figcaption>
      </figure>
    </div>
  );
};

export default PostImage;