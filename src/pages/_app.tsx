import { getClient } from '@/apollo/Config';
import '@/styles/globals.scss'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = window.localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const setTheme = (theme: string) => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'light');
    } else if (theme === 'dark') {
      window.localStorage.setItem('theme', 'dark');
    } else {
      window.localStorage.removeItem('theme');
    }

    setIsDarkMode(theme === 'dark');
  };
  
  const client = getClient();
  
  return (
  
    <ApolloProvider client={client}>
      <Component {...pageProps} setTheme={setTheme} isDarkMode={isDarkMode} />
    </ApolloProvider>
    
  )
}
