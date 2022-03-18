import styles from './ButtonPlayer.module.css'
import { useState, useEffect } from 'react'
import { BsPlayFill, BsPauseFill } from 'react-icons/bs'

export function ButtonPlayer({ track, play, pause }) {

    const [playing, setPlaying] = useState(false)

    const handleClick = () => {
        track && setPlaying(!playing)
    }

    useEffect(() => {
        setPlaying(false)
    }, [track])

    return (
        <div className={styles.buttonContainer}>
            <div className={track ? styles.buttonPlayer : styles.buttonPlayerDisabled} onClick={handleClick}>
                {playing ? <BsPauseFill className={styles.icon} onClick={pause} /> : <BsPlayFill className={styles.icon} onClick={play} />}
            </div>
        </div>
    )
}