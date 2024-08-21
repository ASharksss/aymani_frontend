'use client'
import React from 'react'

import styles from '../../page.module.css'
import PostTitle from '@/components/publications/post/title/PostTitle'
import CommentForm from '@/components/forms/comment-form/CommentForm'
import Comment from '@/components/publications/post/comment/Comment'

export default function Page () {

  const commentData = {
    id: 1,
    nickname: 'User1',
    time: '2 часа назад',
    text: 'Это основной комментарий.',
    likes: 1200,
    replies: [
      {
        id: 2,
        nickname: 'User2',
        time: '1 час назад',
        text: 'Это ответ на основной комментарий.',
        likes: 300,
        replies: [
          {
            id: 3,
            nickname: 'User3',
            time: '30 минут назад',
            text: 'Это ответ на первый ответ.',
            likes: 100,
            replies: []
          }
        ]
      },
      {
        id: 4,
        nickname: 'User4',
        time: '45 минут назад',
        text: 'Еще один ответ на основной комментарий.',
        likes: 150,
        replies: []
      }
    ]
  };

  return (
    <section className={styles.main}>
      <PostTitle
        title={'Как играть на скрипке, я это вообще не понимаю так то'}
        tag={'Web-developers'}
        date={'12.02.2002'}
        user={'Антон Анштонов'}
      />
      <div className={styles.commentForm}>
        <CommentForm/>
        <Comment comment={commentData} replies={commentData.replies}/>
      </div>
    </section>
  )
};

