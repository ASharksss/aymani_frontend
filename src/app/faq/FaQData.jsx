'use client'
import React from 'react';

import styles from './page.module.css'
import AccordionList from "@/components/accordion/accordion-list/AccordionList";
import Accordion from "@/components/accordion/Accordion";
import Nothing from "@/components/nothing/Nothing";

export default async function FaQData({data, slice_v, mainPad}) {

    // const [selected, setSelected] = useState()
    // const toggle = (i) => {
    //     if (selected === i) {
    //         setSelected(null)
    //     }
    //     else {
    //         setSelected(i)
    //     }
    // }

    return (
        <div className={mainPad ? `${styles.mainPad} ${styles.main}` : `${styles.main} ${styles.padAuto}`} id={'faq'}>
            <div className={styles.faq}>
                <h1 className={styles.header}>ЧаВо?</h1>
            {data?.length > 0 ?
                data?.slice(slice_v).map((item, index) => (
                <AccordionList header={item.header} desc={item.content} sel={index} />
            )) : <Nothing/>
            }
            </div>
            <div className={styles.alsoAhave} >
                <h1 className={styles.header}>ЧаВо?</h1>
                <Accordion fontSize={'big'} heading={'Остались вопросы?'} description={'Напишите их нам!'}/>
                <Accordion without link_head href_head={'tel: +79673711711'} heading={'+79673711711'}/>
                <Accordion without link_head href_head={'tel: +79534911711'} heading={'+79534911711'}/>
                <Accordion without link_head href_head={'mailto: aimani.develop@gmail.com'} heading={'aimani.develop@gmail.com'}/>
            </div>
        </div>
    );
};

