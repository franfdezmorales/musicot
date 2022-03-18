import styles from './Error.module.css'
import { BiSad } from 'react-icons/bi'

export function Error() {

    return (
        <div className={styles.error}>
            <BiSad className={styles.icon} />
            <span className={styles.textError}>Algo no ha ido bien...</span>
            <span className={styles.textErrorSecondary}>Comprueba que estás logeado/a y tienes conexión a la red</span>
        </div>
    )
}