import styles from './Profiles.module.css'
import { useProfiles } from '../../hooks/useProfiles'
import { Profile } from '../Profile'
import { Spinner } from '../Spinner'
import { Error } from '../Error'

export function Profiles() {

    const { profiles, isLoading, isError } = useProfiles()

    if (isLoading) return <div className={styles.loading}><Spinner /></div>
    if (isError) return <div className={styles.loading}><Error /></div>

    return (
        <div className={styles.profiles}>
            {profiles.map((profile) => (
                <Profile key={profile.id} id={profile.accounts[0].providerAccountId} name={profile.name} image={profile.image} email={profile.email} following={profile.following}/>
            ))}
        </div>
    )
}