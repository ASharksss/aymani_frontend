'use client'

import React, {useEffect, useState} from 'react';

import styles from './page.module.css'
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import BackTool from "@/asserts/tools/back-tool/BackTool";
import PostTitle from "@/components/publications/post/title/PostTitle";
import PostImage from "@/components/publications/post/image/PostImage";
import temp from "@/asserts/temp/temp.jpg";
import LittlePost from "@/components/publications/post/little-post/LittlePost";
import CommentForm from "@/components/forms/comment-form/CommentForm";
import {useParams} from "next/navigation";
import {IMAGE_URL} from "@/utils";
import CommentD from "@/components/publications/post/comment/Comment";
import {createComment, getComments} from "@/redux/lib/comments";


export default function PostData({post = {}}) {
    //Комментарий
    const [nickName, setNickname] = useState('')
    const [value, setValue] = useState('')
    const [result, setResult] = useState()
    //Комментарий

    const dispatch = useAppDispatch();

    const {comments} = useAppSelector(state => state.comment)

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
                alert('Комментарий опубликован')
                // dispatch(getComments(id))
                location.reload()
            } catch (e) {
                console.error('Error:', e);
            }
        }
    };
    useEffect(() => {
        dispatch(getComments(id))
    }, [])

    useEffect(() => {
        const articleHtml = post?.html;
        const updatedHtml = articleHtml.replace(/src="\/static\/post_images\//g, `src="${IMAGE_URL}\/static\/post_images\/`);
        setResult(updatedHtml)
    }, [])


    return (
        <section className={styles.grid}>
                <span className={styles.span}>
                    <BackTool/>
                </span>
            <div>
                <PostTitle
                    idTag={post?.tag?.id ? post.tag.id : null}
                    title={post?.title ? post.title : 'Что то новое для вас'}
                    tag={post?.tag?.name ? post.tag.name : 'Web-программирование'}
                    date={post?.createdAt ? post.createdAt : '12.02.2002'}
                    user={'Аймани'}
                />
            </div>
            <span className={styles.anotherSpan}></span>
            <div className={styles.content}>
                <div className={`${styles.spanImage} ${styles.text}`}>
                    <div className={`${styles.mainImage}`}>
                        <PostImage tag={post?.tag?.name ? post.tag.name : 'Web-программирование'}
                                   desctiption={post?.description ? post.description : 'Web-программирование'}
                                   imu={post?.cover ? `${IMAGE_URL}${post.cover}` : temp.src}/>
                    </div>
                </div>
                <div className={styles.text}>
                    {post?.html && (
                        <div dangerouslySetInnerHTML={{__html: result}}
                        />
                    )}
                </div>
            </div>
            <aside className={styles.recomends}>
                <div className={styles.sticky}>
                    <div className={styles.news}>
                        {post.new_posts.length > 0 ?
                            <>
                                <h3>Новинки</h3>
                                {post.new_posts.map((item) => (
                                    <LittlePost title={item.title}
                                                id={item?.id}
                                                img={`${IMAGE_URL}${item.cover}`}/>
                                ))}
                            </> : null}
                    </div>
                    <div className={styles.news}>
                        {post.like_posts.length > 0 ?
                            <>
                                <h3>Похожее</h3>
                                {post.like_posts.map((item) => (
                                    <LittlePost
                                        id={item?.id}
                                        title={item.title} img={`${IMAGE_URL}${item.cover}`}/>
                                ))}
                            </> : null}
                    </div>
                </div>
            </aside>

            <div className={styles.commentForm} id={'comment'}>
                <form className={styles.senForm} id={'SendComment'} onSubmit={handleSubmit}>
                    <div className={styles.senForm2}>
                        <h1>Оставить комментарий</h1>
                        <div className={styles.nickname}>
                            <CommentForm place={'Имя'}
                                         lenght={25}
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
                    </div>
                </form>
                {comments?.items.length > 0 ?
                    comments.items.map((item) => (
                        <CommentD comment={item} replies={item.replies}/>
                    )) : null}


            </div>
        </section>
    );
};


