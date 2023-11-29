import type { AppProps } from 'next/app'
import { AppProviders } from './app-providers'
import { CommonPageLayout } from '@/5_shared/ui'

export function App({ Component, pageProps }: AppProps) {
  return <CommonPageLayout>
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
  </CommonPageLayout>

}
