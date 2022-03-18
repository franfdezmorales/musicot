import styles from './Songs.module.css'
import { useSongsFromPlaylist } from '../../hooks/useSongsFromPlayList'
import { Song } from '../Song'
import { Spinner } from '../Spinner'
import { Error } from '../Error'

export function Songs() {

    const { songs, isLoading, isError } = useSongsFromPlaylist()

    if (isLoading) return <div className={styles.loading}><Spinner /></div>
    if (!songs || isError) return <div className={styles.loading}><Error /></div>

    console.log(songs.length)

    return (
        <div className={styles.songs}>
            <div className={styles.totalSongs}>
                {songs?.map(song => (
                    <Song key={song?.track?.id} track={song.track} date={song?.added_at} author={song?.added_by?.id} />
                ))}
            </div>
            <span className={styles.totalCount}>{`${songs?.length ?? 0} canciones añadidas`}</span>
        </div>
    )
}