import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
            <title>Next.js Dark Mode</title>
            <meta name="description" content="Next.js with Dark Mode - without using libraries"></meta>
            <meta property="og:title" content="Next.js Dark Mode" />
<meta property="og:description" content="Next.js Dark Mode Demo" />
<meta property="og:image" content="/demo.gif" />
<meta property="og:url" content="https://next-dark-mode-five.vercel.app/" />
<meta name="twitter:card" content="summary_large_image" />

<meta property="og:site_name" content="Next.js Dark Mode" />
<meta name="twitter:image:alt" content="Next.js Dark Mode" />

<meta name="twitter:site" content="@Mad_Marchy"></meta>
            </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument