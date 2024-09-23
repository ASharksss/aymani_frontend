'use client'
import React, from 'react';


import ServicesData from "@/app/services/[id]/ServicesData";
import {IMAGE_URL} from "@/utils";

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
    return (
        <ServicesData data={service}/>
    );
};


