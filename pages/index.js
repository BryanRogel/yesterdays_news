import { useEffect } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Header from './components/header/Header';
import HomeNews from './components/homeNews/HomeNews';
import { getAllNew } from '../store/actions/newsAction';

function Home({ getNews }) {

  useEffect(() => {
    getNews()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
      <title>NEWS!!!</title>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <HomeNews/>
    </div>
  )
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  getNews: () => dispatch(getAllNew()),
})


export default connect( mapStateToProps, mapDispatchToProps )(Home);