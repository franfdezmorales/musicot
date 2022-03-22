import styles from './Profile.module.css'
import Image from 'next/image'
import { FollowButton } from '../FollowButton'
import { useState } from 'react'
import { useSession } from "next-auth/react"
import { BsFillStarFill } from 'react-icons/bs'

export function Profile({id, name, image, email, following}) {

    const [follow, setFollow] = useState(following)
    const { data: session } = useSession()

    return (
        <div className={styles.profile}>
            <section className={styles.info}>
                <Image src={image} width={50} height={50} alt={name} className={styles.photo}/>
                <span className={styles.name}>{name}</span>
            </section>
            {session?.user?.email !== email ? <FollowButton following={follow} id={id} setFollowing={setFollow}/> : <BsFillStarFill className={styles.icon}/>}
        </div>
    )
}