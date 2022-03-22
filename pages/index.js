import { LastUsers } from '../components/LastUsers'
import { SongInfo } from '../components/SongInfo'
import { Songs } from '../components/Songs'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {

  return (
    <div className={styles.home}>
      <Head>
        <title>Musico-T</title>
        <meta property="og:title" content="Musico-T" key="title" />
      </Head>
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
