import styles from './LastUser.module.css'
import Image from 'next/image'

export function LastUser({name, image}) {
    return (
        <div className={styles.user}>
            <Image src={image} width={40} height={40} className={styles.photo} alt={name} />
            <span>{name}</span>
        </div>
    )
}