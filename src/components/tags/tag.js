"use client"

import React, {useState} from 'react';
import styles from './tag.module.css'
import {useSearchParams} from "next/navigation";

const Tag = ({text, fsize, id, click, active}) => {
  // const colors = ['#006165', '#008674', '#16A13D', '#16A13D',  '#008674','#006165', '#006165']
    const [colors, setColor] = useState(['#006165', '#008674', '#16A13D', '#16A13D',  '#008674','#006165', '#006165'])



  return (
  <button className={styles.button} onClick={click}
          style={{
              background: active ? 'var(--base-color)' : `linear-gradient(to right, ${colors[id]}, ${colors[(id + 1) % colors.length]})`,
              fontSize: fsize,
          }}
          // style={{backgroundColor: colors[id],  fontSize: fsize }}
  >
    #{text}
  </button>
  );
};

export default Tag;