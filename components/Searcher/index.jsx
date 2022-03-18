import styles from './Searcher.module.css'
import { GoSearch } from 'react-icons/go'

export function Searcher({onSearch}) {

    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            onSearch(e.target.value)
        }
    }

    return (
        <div className={styles.searchContainer}>
            <GoSearch color='black' size='2em' />
            <input type='text' placeholder='Buscar una canción...' className={styles.searcher} onKeyUp={handleKeyUp}/>
        </div>
    )
}