import styles from './BottomBar.module.css'


export function BottomBar() {
    return (
        <div className={styles.bottombar}>
            <a href='https://twitter.com/franfdezmorales' target='_blank' rel='noopener nofollow noreferrer'>Twitter</a>
            <a href='https://github.com/franfdezmorales' target='_blank' rel='noopener nofollow noreferrer'>Github</a>
        </div>
    )
}