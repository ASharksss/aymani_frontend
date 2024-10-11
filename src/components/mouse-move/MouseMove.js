'use client'
import React from 'react';

import styles from './mouse-move.module.css'

export default function MouseMove({children, parent, id, zindex = true}) {
    const move = document.querySelector(`#${id}`);

    document.addEventListener('pointermove', (event) => {
        const { clientX, clientY } = event;
        try {
            if (parent.current) {
                const parentRect = parent.current.getBoundingClientRect();
                move.animate({
                    left: `${clientX - 50 - parentRect.left}px`,
                    top: `${clientY + 100 - parentRect.top}px`
                }, { duration: 500, fill: "forwards" });
            } else {
                // console.log('if error')
                return
            }
        } catch (error) {
            return
            // console.error('try error', error);
        }
    });

    // console.log(clientX, clientY)
    return (
        <div className={zindex ? styles.container : styles.zindex } id={id}>
            {children}
        </div>
    );
};

