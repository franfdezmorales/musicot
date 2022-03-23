import styles from '../styles/404.module.css'
import { BiSad } from 'react-icons/bi'




export default function Custom404() {
    return (
        <div className={styles.custom}>
            <BiSad className={styles.icon} />
            <section className={styles.text}>
                <span className={styles.textError}>Esta página no existe...</span>
                <span className={styles.textErrorSecondary}>Si crees que se trata de un error <a className={styles.link} href='https://github.com/franfdezmorales/musicot/issues/new' target='_blank' rel='noopener nofollow noreferrer'>Repórtalo</a></span>
            </section>
        </div>
    )
}