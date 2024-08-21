import React from 'react'
import styles from './profile-nickname.module.css'

function ProfileNickname ({ nickname }) {
  return (
      <div className={`${styles.main}`}>
        <div className={`${styles.nickname}`}>
          {nickname ? nickname : 'Аноним и Антоним'}
        </div>
      </div>
  )
}

export default ProfileNickname