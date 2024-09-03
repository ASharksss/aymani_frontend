'use client'

import React, {useEffect, useState} from 'react';

import styles from './page.module.css'
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {getOnePost, getPosts} from "@/redux/lib/blogs";
import BackTool from "@/asserts/tools/back-tool/BackTool";
import PostTitle from "@/components/publications/post/title/PostTitle";
import PostImage from "@/components/publications/post/image/PostImage";
import temp from "@/asserts/temp/temp.jpg";
import ProjectArticle from "@/components/publications/post/project-article/ProjectArticle";
import LittlePost from "@/components/publications/post/little-post/LittlePost";
import CommentForm from "@/components/forms/comment-form/CommentForm";
import {useParams} from "next/navigation";
import {IMAGE_URL} from "@/utils";
import {getCases} from "@/redux/lib/cases";
import CommentD from "@/components/publications/post/comment/Comment";
import {createComment} from "@/redux/lib/comments";


export default function PostData() {

    //Комментарий
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
            }
        ]
    }; //data комментариев
    const [nickName, setNickname] = useState('')
    const [value, setValue] = useState('')
    // const [parentComment, setParentComment] = useState()
    //Комментарий

    const dispatch = useAppDispatch();

    const {OBlog} = useAppSelector(state => state.blogs);   // пост
    const {ABlogs} = useAppSelector(state => state.blogs); // все посты
    const {cases} = useAppSelector(state => state.cases); // проекты

    const {id} = useParams() // id страницы

    //Комментарий отправка формы
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(id);
        if (id) {
            const data = {
                username: nickName,
                text: value,
                postId: id,
                // parentCommentId: parentComment,
            };
            try {
                dispatch(createComment(data));
                setValue('')
                setNickname('')
            } catch (e) {
                console.error('Error:', e);
            }
        }
    };
    //Комментарий отправка формы


    useEffect(() => {
        dispatch(getOnePost(id)); //получить посты
        // console.log(OBlog)    //просто будет тут
    }, []);

    useEffect(() => {
        dispatch(getPosts());  //получить пост
        // console.log(OBlog) //просто будет тут
    }, []);

    useEffect(() => {
        dispatch(getCases())   //получить проекты
        // console.log(cases) //просто будет тут
    }, [])

    return (
        <section className={styles.grid}>
                <span className={styles.span}>
                    <BackTool/>
                </span>
            <div>
                <PostTitle
                    title={OBlog?.items?.title ? OBlog.items.title : 'Что то новое для вас'}
                    tag={OBlog?.items?.tag?.name ? OBlog?.items.tag.name : 'Web-программирование'}
                    date={OBlog?.items?.createdAt ? OBlog?.items.createdAt : '12.02.2002'}
                    user={'Множество Измен'}
                />
            </div>
            <span className={styles.anotherSpan}></span>
            <div className={styles.content}>
                <div className={`${styles.spanImage} ${styles.text}`}>
                    <div className={`${styles.mainImage}`}>
                        <PostImage tag={OBlog?.items?.tag?.name ? OBlog?.items.tag.name : 'Web-программирование'}
                                   desctiption={OBlog?.items?.description ? OBlog?.items.description : 'Web-программирование'}
                                   imu={OBlog?.items?.cover ? `${IMAGE_URL}${OBlog?.items.cover}` : temp.src}/>
                    </div>
                </div>
                <div className={styles.text}>
                    {OBlog?.items?.html && (
                        <div dangerouslySetInnerHTML={{__html: OBlog.items.html}}
                        />
                    )}
                </div>
            </div>
            <aside className={styles.recomends}>
                <div className={styles.project}>
                    {cases?.items.length > 0 ?
                        <ProjectArticle title={cases?.items[0]?.name}
                                        img={`${IMAGE_URL}${cases?.items[0]?.cover}`}
                                        id={cases?.items[0]?.id}
                        />
                        : null}
                </div>
                <div className={styles.sticky}>
                    <div className={styles.news}>
                        <h3>Новинки</h3>
                        {ABlogs.items.length > 0 ? ABlogs.items.slice(0, 2).map((item) => (
                                <LittlePost title={item.title}
                                            id={item?.id}
                                            img={`${IMAGE_URL}${item.cover}`}/>
                            )) :
                            <>
                                <LittlePost title={'The quick brown fox jumps over the lazy dog'} img={temp}/>
                                <LittlePost title={'The quick brown fox jumps over the lazy dog'} img={temp}/>
                            </>}
                    </div>
                    <div className={styles.news}>
                        <h3>Похожее</h3>
                        {ABlogs.items.length > 0 ? ABlogs.items.filter(item => item.tagId === OBlog?.items?.tagId).sort(() => Math.random() - 0.5).slice(0, 2).map((item) => (
                            <LittlePost
                                id={item?.id}
                                title={item.title} img={`${IMAGE_URL}${item.cover}`}/>
                        )) : (
                            <>
                                <LittlePost title={'The quick brown fox jumps over the lazy dog'} img={temp}/>
                                <LittlePost title={'The quick brown fox jumps over the lazy dog'} img={temp}/>
                            </>
                        )}
                    </div>
                </div>
            </aside>
            <div className={styles.commentForm} id={'comment'}>
                <form className={styles.senForm} id={'SendComment'} onSubmit={handleSubmit}>
                    <h1>Оставить комментарий</h1>
                    <div className={styles.nickname}>
                        <CommentForm place={'nickname'}
                                     setValue={(e) => setNickname(e.target.value)}
                                     sumbit={false}
                                     value={nickName}
                                     cancle={false}/>
                    </div>
                    <CommentForm cancle={false}
                                 setValue={(e) => setValue(e.target.value)}
                                 form={'SendComment'}
                                 value={value}
                                 place={'Комментарий'}/>
                </form>
                <CommentD comment={commentData} replies={commentData.replies}/>
            </div>
            <span></span>
        </section>
    );
};

