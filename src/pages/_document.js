import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Todoアプリ</title>
        <meta name="description" content="Todoリストを作成しましょう" />
        <link rel="icon" href="/logoImage.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
