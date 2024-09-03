'use client'

import React, {useEffect} from 'react';

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

export default function PostData() {

    const dispatch = useAppDispatch();

    const {OBlog} = useAppSelector(state => state.blogs);
    const {ABlogs} = useAppSelector(state => state.blogs);
    const {cases} = useAppSelector(state => state.cases);

    const {id} = useParams()

    useEffect(() => {
        dispatch(getOnePost(id));
        // console.log(OBlog)
    }, []);

    useEffect(() => {
        dispatch(getPosts());
        // console.log(OBlog)
    }, []);

    useEffect(() => {
        dispatch(getCases())
        // console.log(cases)
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
                        <div dangerouslySetInnerHTML={{ __html: OBlog.items.html }}
                             className={styles.textContent} />
                    )}
                </div>
            </div>
            {/*</form>*/}
            <aside className={styles.recomends}>
                <div className={styles.project}>
                    {cases?.items.length > 0 ?
                    <ProjectArticle title={cases?.items[0]?.name}
                                    img={`${IMAGE_URL}${cases?.items[0]?.cover}`}
                                    id={cases?.items[0]?.id}
                    />
                        : null }
                </div>
                <div className={styles.sticky}>
                    <div className={styles.news}>
                        <h3>Новинки</h3>
                        {ABlogs.items.length > 0 ? ABlogs.items.slice(0,2).map((item) => (
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
                        {ABlogs.items.length > 0 ? ABlogs.items.filter(item => item.tagId === OBlog?.items?.tagId).sort(() => Math.random() - 0.5).slice(0,2).map((item) => (
                            <LittlePost
                                id={item?.id}
                                title={item.title} img={`${IMAGE_URL}${item.cover}`} />
                        )) : (
                            <>
                                <LittlePost title={'The quick brown fox jumps over the lazy dog'} img={temp} />
                                <LittlePost title={'The quick brown fox jumps over the lazy dog'} img={temp} />
                            </>
                        )}
                    </div>
                </div>
            </aside>
            <div className={styles.commentForm} id={'comment'}>
                <div className={styles.nickname}>
                <CommentForm place={'Введите свой nickname либо имя для комментария'} sumbit={false} cancle={false}/>
                </div>
                <CommentForm cancle={false}/>
                {/*<Comment comment={commentData} replies={commentData.replies}/>*/}
            </div>
            <span></span>
        </section>
    );
};

