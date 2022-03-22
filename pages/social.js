import { Profiles } from '../components/Profiles'
import styles from '../styles/Social.module.css'
import Head from 'next/head'

export default function Social() {

    return (
        <div className={styles.social}>
            <Head>
                <title>Musico-T | Social</title>
                <meta property="og:title" content="Musico-T" key="title" />
            </Head>
            <Profiles />
        </div>
    )
}
