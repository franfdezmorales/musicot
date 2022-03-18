import { LastUsers } from '../components/LastUsers'
import { SongInfo } from '../components/SongInfo'
import { Songs } from '../components/Songs'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.home}>
      <section className={styles.principal}>
        <Songs />
      </section>
      <section className={styles.secondary}>
        <LastUsers />
        <SongInfo />
      </section>
    </div>
  )
}
