import React from 'react';

import page from "@/app/page.module.css";
import styles from './styles.module.css'

import Link from "next/link";

export const metadata = {
    title: 'Контакты',
    description: 'Контактные данные Аймани',
}

export default async function Page() {

    return (
        <main className={page.main}>
            <div className={styles.minus}>

            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    {/*<Image src={temp} alt={'name of image'} className={styles.image} />*/}
                    <div style={{position:'relative', overflow:'hidden', display: 'flex', justifyContent: 'center'}}>
                        <a
                            href="https://yandex.ru/maps/43/kazan/?utm_medium=mapframe&utm_source=maps"
                            style={{color:'#eee', fontSize:'12px', position:'absolute', top:'0px'}}>
                            Казань
                        </a>
                        <a
                            href="https://yandex.ru/maps/43/kazan/house/tekhnicheskaya_ulitsa_39/YEAYdwVoTEEPQFtvfXt0dn1hZQ==/?ll=49.129884%2C55.757212&utm_medium=mapframe&utm_source=maps&z=17.69"
                            style={{color:'#eee', fontSize:'12px', position:'absolute', top:'14px'}}>
                            Техническая улица, 39 — Яндекс
                            Карты
                        </a>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?ll=49.129884%2C55.757212&mode=whatshere&whatshere%5Bpoint%5D=49.128488%2C55.757175&whatshere%5Bzoom%5D=17&z=17.69"
                            width="700" height="500" frameBorder="1" allowFullScreen="true"
                            style={{position:'relative'}}></iframe>
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <h1 className={styles.name}>Контакты</h1>
                    <p className={styles.address}><Link href={'https://yandex.ru/maps/-/CDDa6TJZ'}> РТ, г. Казань, ул. Техническая, д. 39 пом. 4 </Link></p>
                    <p className={styles.contact}>Телефон/WhatsApp: <Link href={'tel: +79673711711'}> +79673711711 </Link></p>
                    <p className={styles.contact}>Телефон/WhatsApp: <Link href={'tel: +79534911711'}> +79534911711 </Link></p>
                    <p className={styles.contact}>Email:<Link href={'mailto: aimani.develop@gmail.com'}> aimani.develop@gmail.com </Link> </p>
                    <p className={styles.contact}>Telegram: <Link href={'https://t.me/@aimani_web'}> @aimani_web </Link>  </p>
                </div>
            </div>

            </div>
        </main>
    );
};

