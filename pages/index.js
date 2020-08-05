import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Header from './components/header/Header';
import MainNews from './components/mainNews/MainNews';
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
            <MainNews/>
          </div>
          <div id="third" className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <NewsHeadlines/>
          </div>
        </div>
      </div>
      <style jsx>{`
      @media only screen and (max-width: 991px) {
        #first {
          order: 2;
        }
        #second {
          order: 1;
        }
        #third {
          order: 3;
        }
      }
      `}</style>
    </>
  )
}

export default Home;