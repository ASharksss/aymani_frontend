'use client'

import React, { useEffect, useState } from 'react'

import styles from './comment-form.module.css'
import TransprentButton from '@/components/ui/buttons/transprent/TransprentButton'
import Textarea from '@/components/ui/inputs/textarea/Textarea'

export default function CommentForm () {
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
          className={`${global.flex} ${global.f_dir_column} ${styles.hell}`} >
      <div className={styles.input}>
        <Textarea type={'text'}
                  place={'Оставить комментарий'}
                  rows={1}
                  req
                  onChange={(e) => setValue(e.target.value)}
                  back={false}/>
      </div>
      <div className={styles.flex}>
        <div className={styles.button}>
          <TransprentButton active text={'Отмена'} />
        </div>
        <div className={styles.button}>
          {/*<button type="submit" form={'HORVA'}>Отправить</button>*/}
          <TransprentButton text={'Отправить'} type={'submit'} form={'HORVA'}/>
        </div>
      </div>
    </form>
  )
};

