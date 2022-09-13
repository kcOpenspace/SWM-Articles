import React from 'react';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import Article from '../components/articles/ArticleSingle';

const articlepage = () => {
  return (
    <>
    <Header />

    <main>
      <Article />
    </main>
    
    <Footer />
  </>
  )
}

export default articlepage