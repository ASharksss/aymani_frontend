import React, from 'react';
import ServicesData from "@/app/services/[id]/ServicesData";
import {IMAGE_URL} from "@/utils";
import Custom404 from "@/app/not-found";

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
