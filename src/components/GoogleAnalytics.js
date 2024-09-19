import React from 'react';
import Script from 'next/script';

const GoogleAnalytics = () => {
    return (
        <>
            <Script strategy='lazyOnload' src={"https://www.googletagmanager.com/gtag/js?id=G-Z5ECS2TZXQ"} />

            <Script
                id=''
                strategy='lazyOnload'
            >
                {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z5ECS2TZXQ', {
              page_path: window.location.pathname,
              });
          `}

            </Script>
        </>
    );
};

export default GoogleAnalytics;