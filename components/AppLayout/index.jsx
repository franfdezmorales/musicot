import styles from './AppLayout.module.css'
import { NavBar } from '../NavBar'
import { BottomBar } from '../BottomBar'

export function AppLayout({children}) {
    return (
        <div className={styles.app}>
            <NavBar />
            <div className={styles.children}>
                {children}
            </div>
            <BottomBar />
        </div>
    )
}