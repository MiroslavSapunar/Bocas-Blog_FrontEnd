import Head from 'next/head'

export default function head() {
    return (
        <Head>
            <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta lang="es" />

            <title key="title">Blog de Alimentación Consciente | Bocas Mercado Blog</title>
            <meta name="title" content="Blog de Alimentación Consciente | Bocas Mercado Blog" />
            <meta name="description" key="description" content="Si ingresas vas a encontrar Datos, Consejos y Recomendaciones de Expertos sobre temáticas como Nutrición, Ecología, Meditación y Cuidado Personal." />
            <meta name="keywords" content="bocas, mercado, expertos, nutricion, ecologia, meditacion, cuidado personal" />

            <meta property="og:title" content="Blog de Alimentación Consciente | Bocas Mercado Blog" />
            <meta property="og:site_name" content="Blog de Alimentación Consciente | Bocas Mercado Blog" />
            <meta property="og:description" content="Si ingresas vas a encontrar Datos, Consejos y Recomendaciones de Expertos sobre temáticas como Nutrición, Ecología, Meditación y Cuidado Personal." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://blog.bocas.com.ar/" />
            <meta property="og:image" content="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/309/998/themes/common/logo-243132392-1601649288-ec5d9eaafdabc508ef3d2db5177acd451601649289.png?0" />
            <meta property="og:image:secure_url" content="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/309/998/themes/common/logo-243132392-1601649288-ec5d9eaafdabc508ef3d2db5177acd451601649289.png?0" />

            <link rel="icon" href="/favicon.ico" />

            <link rel="preconnect" href="https://www.googletagmanager.com" />
            <link rel="preconnect" href="/scripts/analytics.js" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="preconnect" href="https://scontent.cdninstagram.com" />

            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
            <script src="/scripts/analytics.js" />
        </Head>
    )
}