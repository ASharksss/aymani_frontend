'use client'
import React from 'react';

import styles from './service-request.module.css'
import Accordion from "@/components/accordion/Accordion";
import TextInput from "@/components/ui/inputs/text/TextInput";
import Section from "@/components/ui/section/Section";
import TransprentButton from "@/components/ui/buttons/transprent/TransprentButton";
import LineBack from "@/components/svgs/LineBack";
import BorderTarma from "@/components/svgs/BorderTarma";

export default function ServiceRequest() {
    return (
        <div className={styles.main}>
            <div className={styles.lineBack}>
                <LineBack/>
            </div>
            <div className={styles.tarma}>
                <BorderTarma/>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <Accordion without heading={'Оставьте заявку на услугу!'} fontSize={'big'}/>
                    <form className={styles.gap30}>
                        <TextInput req back={false} place={'Как к вам обращаться?'}/>
                        <TextInput req back={false} place={'Номер телефона или email для связи'}/>
                        <div className={styles.gap20}>
                            <Section/>
                            <div className={styles.desic}>
                                <p>Или можете сразу написать (WhatsApp Telegram) по номеру +79232465647 </p>
                            </div>
                            <div className={styles.buttons}>
                                <TransprentButton text={'Отмена'} active/>
                                <TransprentButton text={'Отправить'}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

