import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Header from './components/header/Header';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NEWS!!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Usando <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}

export default Home;