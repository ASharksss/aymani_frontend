import React from 'react'

import CaseData from "@/app/cases/[id]/CaseData";
import {getImageTypes, IMAGE_URL} from "@/utils";
import Custom404 from "@/app/not-found";

async function fetchData(id) {
    const response = await fetch(`${IMAGE_URL}/api/post/getCase/${id}`, {
        cache: "no-cache"
    });
    if (!response.ok)
        return null;
    return response.json();
}

export async function generateMetadata({params}) {
    const data = await fetchData(params.id);

    if (!!data.error) {
        return {
            title: 'Кейс не найден',
            description: 'Не удалось найти данные для данного кейса.',
            openGraph: {
                title: 'Кейс не найден',
                description: 'Не удалось найти данные для данного кейса.',
            }
        };
    }

    let imageType = getImageTypes(data.cover)
    return {
        title: data.name || 'Пост',
        description: data.description || 'Описание поста.',
        keywords: data.keywords,
        openGraph: {
            title: data.name || 'Пост',
            description: data.description || 'Описание поста.',
            keywords: data.keywords,
            url: `https://aimani.org/posts/${params.id}`,
            type: 'website',
            images: [{
                url: IMAGE_URL + data.cover,
                type: imageType,
                width: 1200,
                height: 630,
                alt: data.name
            }]
        }
    };
}

export default async function Page({params}) {
    const data = await fetchData(params.id);
		if (!!data.error)
			return <Custom404/>
    let result
    data.case_blocks.map(item => {
        if (item.type_block === "Результат") {
            result = {
                "desktop_version": item.desktop_version,
                "mobile_version": item.mobile_version
            }
        } else {
            result = {
                "desktop_version": null,
                "mobile_version": null
            }
        }
    })
    return (
        <CaseData data={data} result={result}/>
    )
};

