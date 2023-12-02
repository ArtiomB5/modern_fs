import type { AppProps } from 'next/app'
import { AppProviders } from './app-providers'
import { AppLayout } from './app-layout'

export function App({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </AppProviders >
  )
}
