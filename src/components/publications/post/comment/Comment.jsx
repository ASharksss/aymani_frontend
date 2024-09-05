'use client'

import React, { useState} from 'react'

import styles from './comment.module.css'

import ProfileNickname from '@/components/publications/post/profile/profile-nickname/ProfileNickname'
import TransprentButton from '@/components/ui/buttons/transprent/TransprentButton'
import CommentForm from "../../../forms/comment-form/CommentForm";
import {createComment} from "@/redux/lib/comments";
import {useParams} from "next/navigation";
import {useAppDispatch} from "@/redux/hooks";

export default function CommentD({comment = [], replies = []}) {

    const [answ, setAnsw] = useState(false);
    const [showReplies, setShowReplies] = useState(false);

    const dispatch = useAppDispatch()
    const {id} = useParams()
    const [nickName, setNickname] = useState('')
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(id);
        if (id) {
            const data = {
                username: nickName,
                text: value,
                postId: id,
                parentCommentId: comment?.id,
            };
            try {
                dispatch(createComment(data));
                setValue('')
                setNickname('')
                alert('Комментарий опубликован')
                location.reload()
            } catch (e) {
                console.error('Error:', e);
            }
        }
    };


    return (
        <>
            <div className={styles.pad}>
                <div className={`${styles.sender_information}`}>
                    <ProfileNickname nickname={comment?.username}/>
                    <div className={`${styles.time}`}>
                        {comment?.time}
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={`${styles.content_text}`}>
                        {comment?.text}
                    </div>
                </div>
                <div className={styles.action}>
                    <span className={styles.span}> </span>
                    {answ ? null : <TransprentButton text={'Ответить'} click={() => setAnsw(!answ)}/>}
                </div>
                <div className={styles.answ}>
                    {answ ?
                        <form className={styles.senForm} id={'SendComment'} onSubmit={handleSubmit}>
                            <h1>Оставить комментарий</h1>
                            <div className={styles.nickname}>
                                <CommentForm place={'nickname'}
                                             value={nickName}
                                             setValue={(e) => setNickname(e.target.value)}
                                             sumbit={false}
                                             cancle={false}/>
                            </div>
                            <CommentForm
                                         value={value}
                                         setValue={(e) => setValue(e.target.value)}
                                         form={'SendComment'}
                                         click={() => setAnsw(!answ)}
                                         place={'Комментарий'}/>
                        </form>
                        : null}
                </div>
                <div className={styles.openAnswers}>
                    {replies && replies.length > 0 && (
                        <button className={styles.answ_btn} onClick={() => setShowReplies(!showReplies)}>
                            <div className={` ${styles.showMore} ${styles.flex}`}>
                                {/*<img src={arrow_down} alt={'like'} width={17} />*/}
                                {showReplies ? 'Скрыть ответы' : 'Еще ответы'}
                            </div>
                        </button>
                    )}
                </div>
                {showReplies ? (
                    <div className={styles.childAnswer}>
                        {replies.map((reply) => (
                            <CommentD key={reply.id} comment={reply} replies={reply.replies}/>
                        ))}
                    </div>
                ) : null}
            </div>
        </>
    );
}

