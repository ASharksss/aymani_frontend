"use client"

import React from 'react';
import styles from './tag.module.css'

const Tag = ({text, fsize, id}) => {
  const colors = ['#006165', '#008674', '#16A13D', '#16A13D',  '#008674','#006165', '#006165']

  return (
  <button className={styles.button}
          style={{
              background: `linear-gradient(to right, ${colors[id]}, ${colors[(id + 1) % colors.length]})`,
              fontSize: fsize,
          }}
          // style={{backgroundColor: colors[id],  fontSize: fsize }}
  >
    #{text}
  </button>
  );
};

export default Tag;