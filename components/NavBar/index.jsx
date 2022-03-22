import { LoginButton } from '../LoginButton'
import { Logo } from '../Logo'
import { NavMenu } from '../NavMenu'
import { UserProfile } from '../UserProfile'
import { useSession } from "next-auth/react"
import styles from './NavBar.module.css'

export function NavBar() {

    const { data: session } = useSession()

    return (
        <nav className={styles.navbar}>
            <Logo />
            <NavMenu />
            {session ? <UserProfile name={session?.user?.name} image={session?.user?.image} /> : <LoginButton />}
        </nav>
    )
}