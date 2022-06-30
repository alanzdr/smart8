import type { AppProps } from 'next/app'

import 'styles/globals.css';
import 'styles/content.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
        <Script 
          id="google-analytics" 
          strategy="afterInteractive"
          src='https://www.googletagmanager.com/gtag/js?id=G-GY4BPN6GWE'
          async
        />
        <Script id="google-analytics-configs" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GY4BPN6GWE');
          `}
        </Script>
    </>
  )
}

export default MyApp
