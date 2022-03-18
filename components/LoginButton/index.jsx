import styles from './LoginButton.module.css'
import { FaSpotify } from 'react-icons/fa'
import { signIn } from "next-auth/react"

export function LoginButton() {

    return (
        <div className={styles.login} onClick={() => signIn('spotify')}>
            <FaSpotify size='1.5em'/>
            <span>Entra con spotify</span>
        </div>
    )
}