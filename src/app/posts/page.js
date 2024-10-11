import PublicationsTitle from "@/components/publications/title/PublicationsTitle";
import styles from "../page.module.css";
import Data from "@/app/posts/Data";
import {fetchTags, IMAGE_URL} from "@/utils";
import React from "react";

export const metadata = {
    title: 'Посты',
    description: 'Информационные и новостные посты',
    keywords: ["посты", "блог", "блог аймани", "новости", "новости ит", "новости it"],
    alternates: {
        canonical: "https://aimani.org/posts"
    },
    openGraph: {
        title: 'Посты',
        description: 'Информационные и новостные посты',
        keywords: ["посты", "блог", "блог аймани", "новости", "новости ит", "новости it"],
        url: "https://aimani.org/posts",
        locale: "ru_RU",
        site_name: "Aimani"
    }
}


async function fetchPosts(tagId = undefined) {
    try {
        if (tagId === undefined) {
            const response = await fetch(`${IMAGE_URL}/api/post/getAllPosts`, {
                cache: "no-store"
            })
            if (!response.ok) {
                return null;
            }
            return response.json();
        } else {
            const response = await fetch(`${IMAGE_URL}/api/post/getByTagPosts?tagId=${tagId}`, {
                cache: "no-store"
            })
            if (!response.ok) {
                return null;
            }
            return response.json();
        }

    } catch (error) {
        return console.log('500 Нет подключения к серверу, мы уже работаем над этим')
    }
}

export default async function Page(params) {
    const data = await fetchPosts(params.searchParams?.tagId);
    const tags = await fetchTags();

    return (
        <div className={styles.main}>
            <PublicationsTitle small tags={tags}/>
            <Data posts={data}/>
        </div>
    )
};

