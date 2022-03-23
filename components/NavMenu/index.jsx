import { NavItem } from '../NavItem'
import styles from './NavMenu.module.css'


export function NavMenu() {
    return (
        <div className={styles.menu}>
            <NavItem title='Añadir canción' link='/addSong' image='/addsong.png' />
            <NavItem title='Social' link='/social' image='/social.png' />
            <NavItem title='Canción recomendada' link='/songday' image='/song.png' />
        </div>
    )
}