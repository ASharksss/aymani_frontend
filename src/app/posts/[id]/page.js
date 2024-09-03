
import React from 'react'
import page from '../../page.module.css'
import PostData from "@/app/posts/[id]/PostData";

export const metadata = {
    title: 'Пост',
    description: 'Пост один',
}
export default async function Page() {
    return (
        <main className={page.main}>
            <PostData/>
        </main>
    )
};

