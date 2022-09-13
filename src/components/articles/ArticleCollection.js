import React, { useState, useEffect } from 'react';
import CodeTestJson from '../../assets/codetestjson.json';

// CURRENTLY NOT IN USE
// Used to fetch article collection previews
const ArticleCollection = () => {

  const json = [CodeTestJson];
  console.log(json)

  useEffect(()=> {
    //TODO: Fetch data via api and store in local state 
  },[])

  return (
    <div className='collection-container'>
      ArticleCollection
      <div className='articles-wrap'>
        {json.map( (article,key) => (
          <div className='article-preview' key={key} data-title={article.headline}>
            <div className='image'>
              <img src="" alt="article image"/>
            </div>
            <h3>{article.headline}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArticleCollection