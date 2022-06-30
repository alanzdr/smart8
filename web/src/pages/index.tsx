/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic';

import Loading from 'components/Loading';
const View = dynamic(() => import('views/Home'), {
  loading: () => <Loading />,
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Smart 8 is a new concept of magic 8 ball, using artificial intelligence to answer your questions"
        />
        <meta name="keywords" content="Magic 8 Ball" />
        <title>Smart 8 - it's not magic, it's technology</title>
      </Head>
      <View />
    </>
  )
}

export default Home
