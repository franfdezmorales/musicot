import styles from './LastUser.module.css'
import Image from 'next/image'

export function LastUser({name, image}) {

    console.log(image)

    return (
        <div className={styles.user}>
            <Image src={image ?? '/noavatar.png'} width={40} height={40} className={styles.photo} alt={name} />
            <span>{name}</span>
        </div>
    )
}