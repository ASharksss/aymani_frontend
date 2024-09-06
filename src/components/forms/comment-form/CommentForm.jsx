'use client'

import React from 'react'

import styles from './comment-form.module.css'
import TransprentButton from '@/components/ui/buttons/transprent/TransprentButton'
import Textarea from '@/components/ui/inputs/textarea/Textarea'

export default function CommentForm ({click, place, setValue, value, lenght,
                                        form,
                                         sumbit = true, cancle = true}) {
  // const [value, setValue] = useState('')
  //
  //   useEffect(() => {
  //       // console.log(value)
  //   }, [value])

  return (
    <div
          className={`${styles.hell}`} >
      <div className={styles.input}>
        <Textarea type={'text'}
                  place={place ? place : 'Оставить комментарий'}
                  rows={1}
                  lenght={lenght}
                  req
                  value={value ? value : ''}
                  // onChange={(e) => setValue(e.target.value)}
                  onChange={setValue}
                  back={false}/>
      </div>
      <div className={styles.flex}>
          {cancle ?
        <div className={styles.button}>
          <TransprentButton  active text={'Отмена'} click={click} />
        </div> : null }
          {sumbit ?
        <div className={styles.button}>
          {/*<button type="submit" form={'HORVA'}>Отправить</button>*/}
          <TransprentButton  text={'Отправить'} type={'submit'} form={form}/>
        </div> : null}
      </div>
    </div>
  )
};

