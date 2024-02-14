
import "/styles/global.css";
import Document, { Html, Head, Main, NextScript } from 'next/document';

function MyApp({ Component, pageProps }) {
  return (
    <>
       <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
      <link href='https://fonts.googleapis.com/css?family=Zilla Slab' rel='stylesheet'/>

        
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;