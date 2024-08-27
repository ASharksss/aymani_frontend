'use client'

import React, { useContext,  useState } from 'react'

import styles from './comment.module.css'

import ProfileNickname from '@/components/publications/post/profile/profile-nickname/ProfileNickname'
import TransprentButton from '@/components/ui/buttons/transprent/TransprentButton'
import CommnetForm from '../../../forms/comment-form/CommentForm'
import LikeSvg from '@/components/svgs/LikeSVG'
import { ThemeContext } from '@/contexts/ThemeContext'
export default function Comment({ comment=[], replies=[] }) {

  const [answ, setAnsw] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  const { theme } = useContext(ThemeContext)
  return (
    <>
    <div className={styles.pad}>
      <div className={`${styles.sender_information}`}>
        <ProfileNickname nickname={comment?.nickname} />
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
        <button className={styles.likes}>
          <div className={`${styles.flex}`}>
            <LikeSvg color={theme === 'light' ? 'var(--description-color)' :  "var(--description-color)"}/>
            {comment?.likes}
          </div>
        </button>
        {answ ? null : <TransprentButton text={'Ответить'} click={() => setAnsw(!answ)} />}
      </div>
      <div className={styles.answ}>
        {answ ? <CommnetForm click={() => setAnsw(!answ)} /> : null}
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
      {showReplies && (
        <div className={styles.childAnswer}>
          {replies.map((reply) => (
            <Comment key={reply.id} comment={reply} replies={reply.replies} />
          ))}
        </div>
      )}
    </div>
    </>
  );
}

