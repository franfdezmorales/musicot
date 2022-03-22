import { RadarC } from '../RadarChart'
import styles from './SongStats.module.css'


const getDataFromStats = (data) => {

    return [
        {subject: 'Acústica', A: data['acousticness'] * 100, fullMark: 100},
        {subject: 'Bailabilidad', A: data['danceability'] * 100, fullMark: 100},
        {subject: 'Energía', A: data['energy'] * 100, fullMark: 100},
        {subject: 'Instrumental', A: data['instrumentalness'] * 100, fullMark: 100},
        {subject: 'Dinamismo', A: data['liveness'] * 100, fullMark: 100},
        {subject: 'Vocal', A: data['speechiness'] * 100, fullMark: 100},
    ]
}


export function SongStats({stats}) {

    const data = getDataFromStats(stats)

    return (
        <div className={styles.stats}>
            <RadarC data={data} />
        </div>
    )
}