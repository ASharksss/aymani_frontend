import React from 'react'
import page from '../../page.module.css'
import PostData from "@/app/posts/[id]/PostData";
import {getImageTypes, IMAGE_URL} from "@/utils";
import {notFound} from "next/navigation";

async function fetchData(id) {
    // Запрос данных по ID
    const response = await fetch(`${IMAGE_URL}/api/post/getPost/${id}`, {
        cache: "no-store"
    });
    if (!response.ok) {
        return null;
    }
    return response.json();
}

export async function generateMetadata({params}) {
    const data = await fetchData(params.id);

    if (!data) {
        return {
            title: 'Пост не найден',
            description: 'Не удалось найти данные для данного поста.',
            openGraph: {
                title: 'Пост не найден',
                description: 'Не удалось найти данные для данного поста.',
            }
        };
    }
    let imageType = getImageTypes(data.cover)
    return {
        title: data.title || 'Пост',
        description: data.description || 'Описание поста.',
        keywords: data.keywords,
        openGraph: {
            title: data.title || 'Пост',
            keywords: data.keywords,
            description: data.description || 'Описание поста.',
            url: `https://aimani.org/posts/${params.id}`,
            type: 'website',
            images: [{
                url: IMAGE_URL + data.cover,
                type: imageType,
                width: 1200,
                height: 630,
                alt: data.title
            }]
        }
    };
}

export default async function Page({params}) {
    const data = await fetchData(params.id)
    if (!data) return notFound();
    return (
        <main className={page.main}>
            <PostData post={data}/>
        </main>
    );
}