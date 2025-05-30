import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>Aiden Wong - Senior Software Engineer</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Aiden Wong Portfolio - Senior Software Engineer" />
            <meta name="description"
                content="Aiden Wong's (gru0725) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="author" content="Aiden Wong (gru0725)" />
            <meta name="keywords"
                content="gru0725, gru0725's portfolio, gru0725 linux, ubuntu portfolio, Aiden Wong protfolio,Aiden Wong computer, Aiden Wong, aiden ubuntu, Aiden Wong ubuntu portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/favicon.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Aiden Wong Portfolio - Senior Software Engineer" />
            <meta itemProp="description"
                content="Aiden Wong's (gru0725) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/favicon.png" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Aiden Wong Portfolio - Senior Software Engineer" />
            <meta name="twitter:description"
                content="Aiden Wong's (gru0725) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="gru0725" />
            <meta name="twitter:creator" content="gru0725" />
            <meta name="twitter:image:src" content="images/logos/logo.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Aiden Wong Portfolio - Computer Engineering Student" />
            <meta name="og:description"
                content="Aiden Wong's (gru0725) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/logo.png" />
            <meta name="og:url" content="https://portfolio-2023-aiden.vercel.app/" />
            <meta name="og:site_name" content="Aiden Wong Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/favicon.svg" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
