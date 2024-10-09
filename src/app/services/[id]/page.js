import React, from 'react';
import ServicesData from "@/app/services/[id]/ServicesData";
import {IMAGE_URL} from "@/utils";
import Custom404 from "@/app/not-found";


export async function generateMetadata({ params }) {
    // read route params
    const id = params.id
    // fetch data
    const serv = await fetch(`${IMAGE_URL}/api/post/getService/${id}`).then((res) => res.json())

    return {
        title: serv.name,
        description: serv.description,
        openGraph: {
            title: serv.name || 'Пост',
            description: serv.description || 'Описание поста.',
            url: `https://aimani.org/services/${id}`,
            type: 'website',
            images: [{
                url: IMAGE_URL + serv.image_url,
                // type: imageType,
                width: 1200,
                height: 630,
                alt: serv.name
            }]
        }
    }
}



async function fetchService(id) {
    // Запрос данных по ID
    const response = await fetch(`${IMAGE_URL}/api/post/getService/${id}`, {
        cache: "no-store"
    });
    if (!response.ok) {
        return null;
    }
    return response.json();
}

export default async function Page({params}) {

    const service = await fetchService(params.id);

    if(service.error){
        return <Custom404/>;
    }

    return (
        <ServicesData data={service}/>
    );
};
