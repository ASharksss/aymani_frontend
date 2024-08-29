'use client'

import React, { useEffect, useState } from 'react'

import styles from './comment-form.module.css'
import TransprentButton from '@/components/ui/buttons/transprent/TransprentButton'
import Textarea from '@/components/ui/inputs/textarea/Textarea'

export default function CommentForm ({click, cancle = true}) {
  // const { id } = useParams()
  const [value, setValue] = useState('')
  // const dispatch = useDispatch()
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log('Form submitted');
  //   if (id) {
  //     const data = {
  //       text: value,
  //       publicationId: id,
  //     };
  //     try {
  //       dispatch(createComment(data));
  //     } catch (e) {
  //       console.error('Error:', e);
  //     }
  //   }
  // };

  useEffect(() => {
    // console.log(value)
  }, [value])

  return (
    // <>
    <form id={'HORVA'}
          // onSubmit={handleSubmit}
          className={`${styles.hell}`} >
      <div className={styles.input}>
        <Textarea type={'text'}
                  place={'Оставить комментарий'}
                  rows={1}
                  req
                  onChange={(e) => setValue(e.target.value)}
                  back={false}/>
      </div>
      <div className={styles.flex}>
          {cancle ?
        <div className={styles.button}>
          <TransprentButton  active text={'Отмена'} click={click} />
        </div> : null }
        <div className={styles.button}>
          {/*<button type="submit" form={'HORVA'}>Отправить</button>*/}
          <TransprentButton  text={'Отправить'} type={'submit'} form={'HORVA'}/>
        </div>
      </div>
    </form>
  )
};

