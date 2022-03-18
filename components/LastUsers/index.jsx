import styles from './LastUsers.module.css'
import { useRegisteredUsers } from '../../hooks/useRegisteredUsers'
import { LastUser } from '../LastUser'
import { Spinner } from '../Spinner'
import { Error } from '../Error'

export function LastUsers() {

    const { users, isLoading, isError } = useRegisteredUsers()

    if (isLoading) return <div className={styles.loading}><Spinner /></div>
    if (isError) return <div className={styles.loading}><Error /></div>


    return (
        <div className={styles.lastusers}>
            <div className={styles.users}>
                {users.map(user => (
                    <LastUser key={user.id} name={user.name} image={user.image} />
                ))}
            </div>
            <span className={styles.totalCount}>{`¡Ya somos ${users.length}!`}</span>
        </div>
    )
}