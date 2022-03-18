import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { AppLayout } from '../components/AppLayout'
import { SWRConfig } from 'swr'
import { SongProvider } from '../context/SongProvider'

function MyApp({ Component, pageProps: {
  session,
  ...pageProps
} }) {
  return (
    <SWRConfig value={{
      fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
    }}>
      <SessionProvider session={session}>
        <SongProvider>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </SongProvider>
      </SessionProvider>
    </SWRConfig>
  )
}

export default MyApp
