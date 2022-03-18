import styles from './NoResults.module.css'
import { MdAutoFixOff } from 'react-icons/md'

export function NoResults() {
    return (
        <div className={styles.noResults}>
            <MdAutoFixOff className={styles.icon} />
            <span className={styles.text}>No se ha encontrado nada...</span>
        </div>
    )
}