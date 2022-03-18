import styles from './SearchResults.module.css'
import { SearchSong } from '../SearchSong'
import { Spinner } from '../Spinner'
import { Error } from '../Error'
import { NoResults } from '../NoResults'

export function SearchResults({ isLoading, isError, tracks, addSong }) {

    if (isLoading) return <div className={styles.loading}><Spinner /></div>
    if (!tracks || isError) return <div className={styles.loading}><Error /></div>
    if (tracks.length === 0) return <div className={styles.loading}><NoResults /></div>

    return (
        <div className={styles.searchResults}>
        {
            tracks.map(track => (
                <SearchSong key={track.id} track={track} onAddSong={addSong}/>
            ))
        }
        </div>
    )
}