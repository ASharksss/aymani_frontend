
import React from 'react'
import page from '../../page.module.css'
import PostData from "@/app/posts/[id]/PostData";

export const metadata = {
    title: 'Пост',
    description: 'Пост один',
}
export default async function Page() {

    // const commentData = {
    //     id: 1,
    //     nickname: 'User1',
    //     time: '2 часа назад',
    //     text: 'Это основной комментарий.',
    //     likes: 1200,
    //     replies: [
    //         {
    //             id: 2,
    //             nickname: 'User2',
    //             time: '1 час назад',
    //             text: 'Это ответ на основной комментарий.',
    //             likes: 300,
    //             replies: [
    //                 {
    //                     id: 3,
    //                     nickname: 'User3',
    //                     time: '30 минут назад',
    //                     text: 'Это ответ на первый ответ.',
    //                     likes: 100,
    //                     replies: []
    //                 }
    //             ]
    //         },
    //         {
    //             id: 4,
    //             nickname: 'User4',
    //             time: '45 минут назад',
    //             text: 'Еще один ответ на основной комментарий.',
    //             likes: 150,
    //             replies: [
    //                 {
    //                     id: 2,
    //                     nickname: 'User2',
    //                     time: '1 час назад',
    //                     text: 'Это ответ на основной комментарий.',
    //                     likes: 300,
    //                     replies: [
    //                         {
    //                             id: 3,
    //                             nickname: 'User3',
    //                             time: '30 минут назад',
    //                             text: 'Это ответ на первый ответ.',
    //                             likes: 100,
    //                             replies: [
    //                                 {
    //                                     id: 2,
    //                                     nickname: 'User2',
    //                                     time: '1 час назад',
    //                                     text: 'Это ответ на основной комментарий.',
    //                                     likes: 300,
    //                                     replies: [
    //                                         {
    //                                             id: 3,
    //                                             nickname: 'User3',
    //                                             time: '30 минут назад',
    //                                             text: 'Это ответ на первый ответ.',
    //                                             likes: 100,
    //                                             replies: []
    //                                         }
    //                                     ]
    //                                 },
    //                                 {
    //                                     id: 4,
    //                                     nickname: 'User4',
    //                                     time: '45 минут назад',
    //                                     text: 'Еще один ответ на основной комментарий.',
    //                                     likes: 150,
    //                                     replies: []
    //                                 }
    //                             ]
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     id: 4,
    //                     nickname: 'User4',
    //                     time: '45 минут назад',
    //                     text: 'Еще один ответ на основной комментарий.',
    //                     likes: 150,
    //                     replies: []
    //                 }
    //             ]
    //         }
    //     ]
    // };

    return (
        <main className={page.main}>
            <PostData/>
        </main>
    )
};

