import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Head from 'next/head';

export default function index() {
  return (
    <div className="font-sans h-screen bg-blue-100">
        <Head>
            <title>About</title>
        </Head>
      <Header/>
      <Hero/>
    </div>
  )
}
