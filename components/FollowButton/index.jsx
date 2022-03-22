import styles from './FollowButton.module.css'
import { FaSpotify } from 'react-icons/fa'

export function FollowButton({setFollowing, following, id}) {

    const handleFollow = async () => {
        const response = await fetch(`/api/follow`, {
            method: 'PUT', 
            body: JSON.stringify({
                userId: id
            })
        })

        if (response.status === 204) setFollowing(true) 
    }
    
    return (
        <div className={following ? styles.followDisabled : styles.follow} onClick={handleFollow}>
            <FaSpotify size='1.2em' />
            <span>{following ?`Siguiendo` : `Seguir`}</span>
        </div>
    )
}