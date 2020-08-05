import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Header from './components/header/Header';
import LastNews from './components/lastNews/LastNews';
import NewsHeadlines from './components/newsHeadlines/NewsHeadlines';

function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>NEWS!!!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
        <div className="row" style={{ margin: 0 }}>
          <div id="first" className="col-12 col-sm-6 col-md-8 col-lg-3 col-xl-3">
            <LastNews/>
          </div>
          <div id="second" className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          </div>
          <div id="third" className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <NewsHeadlines/>
          </div>
        </div>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Usando <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </main>
      </div>
      <style jsx>{`
      @media only screen and (max-width: 991px) {
        #first {
          order: 1;
        }
        #second {
          order: 3;
        }
        #third {
          order: 2;
        }
      }
      `}</style>
    </>
  )
}

export default Home;