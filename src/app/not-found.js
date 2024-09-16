import React from 'react';

import styles from './page.module.css'
export default async function Custom404()
{
    return (
        <div >
            <div className={styles.flex}>
            <img src={'/asserts/ERROR/404.svg'} alt={'ERROR 404'}/>
            </div>
        </div>
    );
}
;

