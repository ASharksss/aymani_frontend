"use client"

import React, {useState} from 'react';
import styles from './tag.module.css'

const Tag = () => {
  const colors = ['#006165', '#008674', '#16A13D']

  const [text, setText] = useState('Рандомный текст')
  const [initialColor] = useState(() => colors[Math.floor(Math.random() * colors.length)]);
  const [buttonColor, setButtonColor] = useState('');

  if (!buttonColor) {
    setButtonColor(initialColor);
  }

  return (
    <button className={styles.button} style={{backgroundColor: buttonColor}}>
      #{text}
    </button>
  );
};

export default Tag;