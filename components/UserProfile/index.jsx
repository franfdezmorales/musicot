import styles from './UserProfile.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { Logout } from '../Logout'

export function UserProfile({name, image}) {

    const [showLogout, setShowLogout] = useState(false)

    const handleShowLogout = () => {
        setShowLogout(true)
    }

    return (
        <div className={styles.profile} onClick={handleShowLogout}>
            <Image src={image ?? '/noavatar.png'} width={40} height={40} className={styles.photo} alt={name} />
            <span>{name}</span>
            {showLogout ? <Logout close={setShowLogout} /> : null}
        </div>
    )
}