import styles from './NavItem.module.css'
import Image from 'next/image'
import Link from 'next/link'

export function NavItem({title, image, link}) {
    return (
        <Link href={link}>
            <a className={styles.item}>
                <Image objectFit='contain' width={32} height={32} src={image} alt='navitem' className={styles.photo} />
                <span>{title}</span>
            </a>
        </Link>
    )
}