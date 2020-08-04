import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Header from './components/header/Header';
import LastNews from './components/lastNews/LastNews';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NEWS!!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className="row" style={{ margin: 0 }}>
      <div className="col-3 col-xl-3">
        <LastNews/>
        </div>
        <div className="col-6 col-xl-6">
        </div>
        <div className="col-3 col-xl-3">
        </div>
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Usando <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}

export default Home;