'use client'
import React, from 'react';

import styles from './page.module.css'
import Accordion from "@/components/accordion/Accordion";
import Definition from "@/components/definition/Definition";
import Section from "@/components/ui/section/Section";
import TextInput from "@/components/ui/inputs/text/TextInput";

export default function Page() {


    return (
        <div className={styles.main}>
            <Definition head={'Лендинг'}
                        description={'Лендинг — веб-страница, основной задачей которой является сбор контактных данных целевой аудитории. Используется для усиления эффективности рекламы, увеличения аудитории. Целевая страница обычно содержит информацию о товаре или услуге.'}/>
            <Accordion
                description={'Тут вы можете удобно определить что хотите видеть в своем будущем приложении\n' +
                    'Калькулятор удобно рассчитает время и стоимость желаемого проекта'}
                heading={'Калькулятор'}
            />
            <Accordion
                description={'Тут вы можете удобно определить что хотите видеть в своем будущем приложении\n' +
                    'Калькулятор удобно рассчитает время и стоимость желаемого проекта'}
                fontSize={'middle'}
                heading={'Калькулятор'}
            />
            <Accordion
                description={'Тут вы можете удобно определить что хотите видеть в своем будущем приложении\n' +
                    'Калькулятор удобно рассчитает время и стоимость желаемого проекта'}
                fontSize={'big'}
                heading={'Калькулятор'}
            />
            <Accordion
                description={'Тут вы можете удобно определить что хотите видеть в своем будущем приложении\n' +
                    'Калькулятор удобно рассчитает время и стоимость желаемого проекта'}
                link link_link={'/home'}
                heading={'Калькулятор'}
            />
            <Accordion
                description={'Тут вы можете удобно определить что хотите видеть в своем будущем приложении\n' +
                    'Калькулятор удобно рассчитает время и стоимость желаемого проекта'}
                heading={'Калькулятор'}
                faq faq_link={'/faq'}
            />
            <Accordion
                description={'Тут вы можете удобно определить что хотите видеть в своем будущем приложении\n' +
                    'Калькулятор удобно рассчитает время и стоимость желаемого проекта'}
                heading={'Калькулятор'}
                without
            />

            <Section/>
            <TextInput back={false} place={'Напишите что нибудь'}/>
            <div className={styles.map}>
            </div>
        </div>
    );
};


