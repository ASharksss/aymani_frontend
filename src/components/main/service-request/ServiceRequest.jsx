'use client'
import React, {useState} from 'react';

import styles from './service-request.module.css'
import Accordion from "@/components/accordion/Accordion";
import TextInput from "@/components/ui/inputs/text/TextInput";
import TransprentButton from "@/components/ui/buttons/transprent/TransprentButton";
import LineBack from "@/components/svgs/LineBack";
import BorderTarma from "@/components/svgs/BorderTarma";
import {useAppDispatch} from "@/redux/hooks";
import {takeMyMoneyReq} from "@/redux/lib/takeMyMoney";
import CheckBox from "@/components/ui/checkbox/CheckBox";
import Link from "next/link";

export default function ServiceRequest({sele_disabled = false}) {
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [dis, setDis] = useState(true)

    const dispatch = useAppDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        const functions = [...document.querySelectorAll('input:checked')]
            .map(e => Number(e.id))
            .filter(item => !isNaN(item));

            const data = {
                name: name,
                contact: number,
                functions: functions,
            };
            try {
                dispatch(takeMyMoneyReq(data));

                alert('Форма отправлена')
                // dispatch(getComments(id))
                // location.reload()
            } catch (e) {
                console.error('Error:', e);
            }
    };




    return (
        <div className={styles.main} id={'call'}>
            <div className={styles.lineBack}>
                <LineBack/>
            </div>
            <div className={styles.tarma}>
                <BorderTarma/>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <Accordion without heading={'Оставьте заявку на услугу!'} fontSize={'big'}/>
                    <form className={styles.gap30} onSubmit={handleSubmit} id={'TakeMyMoney'}>
                        {/*form*/}
                        <TextInput req back={false} place={'Как к вам обращаться?'}
                                   value={name ? name : null}
                                    onChange={(e) => setName(e.target.value)}
                        />
                        <TextInput req back={false} place={'Номер телефона или email для связи'}
                                    value={number ? number : null}
                                   onChange={(e) => setNumber(e.target.value)}
                        />
                        <div className={styles.gap20}>
                            {/*{sele_disabled ? null : <Section /> }*/}
                            <div className={styles.desic}>
                                <p>Или можете сразу написать (WhatsApp Telegram) по номеру &nbsp; <Link href={'tel: +79673711711'}> +79673711711 </Link>
                                </p>
                            </div>
                            <div className={styles.checkbox}>
                                <CheckBox
                                    required
                                    onChange={() => setDis(!dis)}
                                    id={'myCheckBox'}
                                    description={'Не переживайте данные никуда не утекут'}
                                    label={'Согласен на обработку персональных данных'}/>
                            </div>
                            <div className={styles.buttons} >
                                {sele_disabled ?
                                    <label htmlFor={'name_form'}>
                                        Отмена
                                    </label> :
                                null }
                                <TransprentButton text={'Отправить'}
                                                  disabled={dis}
                                                  // active={dis}
                                                  // click={() => hadle()}
                                                  type={'submit'} from={'TakeMyMoney'}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

