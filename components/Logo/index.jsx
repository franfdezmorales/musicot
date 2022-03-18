import Link from 'next/link'
import styles from './Logo.module.css'


export function Logo() {
    return (
        <Link href='/'>
            <a className={styles.logo}>
                <span className={styles.title}>
                    Musico-T
                </span>
                <span className={styles.devlogo}>
                    {`</>`}
                </span>
            </a>
        </Link>
    )
}