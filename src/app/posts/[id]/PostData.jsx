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
import {createComment, getComments} from "@/redux/lib/comments";


export default function PostData() {

    //Комментарий


    const [nickName, setNickname] = useState('')
    const [value, setValue] = useState('')
    const [result, setResult] = useState()
    //Комментарий

    const dispatch = useAppDispatch();

    const {OBlog} = useAppSelector(state => state.blogs);   // пост
    const {ABlogs} = useAppSelector(state => state.blogs); // все посты
    const {cases} = useAppSelector(state => state.cases); // проекты
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
    useEffect(() => {
        dispatch(getComments(id))   //получить проекты
        // console.log(cases) //просто будет тут
    }, [])
    useEffect(() => {
        if (OBlog.status === 'loaded') {
            // const parser = new DOMParser();
            // const doc = parser.parseFromString(OBlog?.items?.html, 'application/xml');
            const articleHtml = OBlog?.items?.html;
            const IMAGE_URL = 'http://192.168.1.121:5000'
            // const updatedHtml = articleHtml.replace(/src="\//g, `src="${IMAGE_URL}\/`);
            const updatedHtml = articleHtml.replace(/src="\/static\/post_images\//g, `src="${IMAGE_URL}\/static\/post_images\/`);
            setResult(updatedHtml)
            // console.log(updatedHtml)
            // const images = doc.getElementsByTagName('img');
            //     for (const img of images) {
            //         const one = img.getElementsByTagName('img')
            //         one.src = `${IMAGE_URL}/${img.getAttribute('src').slice(1)}`
            //         // setResult(doc.replace(/src="\/static\/post_images\//g, `src="${one.src}""`));
            //     }
            //     console.log(result)
        }
    }, [OBlog.status === 'loading'])


    return (
        <section className={styles.grid}>
                <span className={styles.span}>
                    <BackTool/>
                </span>
            <div>
                <PostTitle
                    idTag={OBlog?.items?.tag?.id ? OBlog?.items.tag.id : null}
                    title={OBlog?.items?.title ? OBlog.items.title : 'Что то новое для вас'}
                    tag={OBlog?.items?.tag?.name ? OBlog?.items.tag.name : 'Web-программирование'}
                    date={OBlog?.items?.createdAt ? OBlog?.items.createdAt : '12.02.2002'}
                    user={'Аймани'}
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
                    {/*{result}*/}

                    {OBlog?.items?.html && (
                        <div dangerouslySetInnerHTML={{__html: result}}
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
            {/*<div id="poda">*/}
            {/*    <div id="main">*/}
            {/*        <input placeholder="Search..." type="text" name="text" className="input"/>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className={styles.commentForm} id={'comment'}>
                <form className={styles.senForm} id={'SendComment'} onSubmit={handleSubmit}>
                    <div className={styles.senForm2}>
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
                    </div>
                </form>
                {comments?.items.length > 0 ?
                    comments.items.map((item) => (
                        <CommentD comment={item} replies={item.replies}/>
                    )) : null}


            </div>
            <span></span>
        </section>
    );
};

