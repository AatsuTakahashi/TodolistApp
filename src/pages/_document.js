import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Todo</title>
        <meta name="description" content="Todoリストを作成しましょう" />
        <link rel="icon" href="/logoView.jpg"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
