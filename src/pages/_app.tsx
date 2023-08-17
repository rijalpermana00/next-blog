import { getClient } from '@/apollo/Config';
import Providers from '@/components/Provider';
import '@/styles/globals.scss'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from 'next-seo';
import SEO from '../components/DefaultSeo';


export default function App({ Component, pageProps }: AppProps) {
  
  const client = getClient();
  
  return (
  
    <ApolloProvider client={client}>
      <Providers>
        <DefaultSeo {...SEO} />
        <Component {...pageProps}/>
        <Analytics />
      </Providers>
    </ApolloProvider>
    
  )
}
