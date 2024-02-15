
import "/styles/global.css";


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