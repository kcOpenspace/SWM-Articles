import React from 'react';
import './ArticleSingle.scss';
import {ReactComponent as Camera} from '../../assets/media/camera.svg';
import Plus from '../../components/layout/SvgAssets/Plus';
import CodeTestJson from '../../assets/codetestjson.json';

const ArticleSingle = () => {
  const article = CodeTestJson;
  console.log(article)

  //Was trying to sort by type, but decided to use inline conditioning instead
  // const blockType = (type) => {
  //   return type
  // }

  const convertDate = (timestamp) => {
    const pDate = new Date(timestamp)
    const output = pDate.toLocaleString("en-AU",{ weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: '2-digit' })
    return output
  }

  return (
    <div className='article-wrap'>
      <div className='article-header' data-title={article.headline}>
        <h1>{article.headline}</h1>
        <p className='byline'><span>{article.byline}</span>, {article.source}</p>
        <p className='publish-date'>{convertDate(article.publicationDate)} <span><Plus /></span></p>
        
      </div>
      <div className='article-content'>
        {article.blocks.map( (block,key) => (
          <div className={'article-block ' + block.kind} key={key}>
            {block.kind === "text" ?
              <p>{block.text}</p> : ''
            }
            {block.kind === "image" ?
              <div>
                <img src={block.url} alt={block.url} />
                <p><span><Camera /></span>{block.captionText} <i>Credit: {article.byline}</i></p>
              </div>
              : ''
            }
            {block.kind === "pull-quote" ?
              <blockquote>
                <p>{block.text}</p>
                <figcaption>{block.attribution}</figcaption>
              </blockquote>
              : ''
            }
          </div>
        ))}
      </div>
    </div>
  )
  
}

export default ArticleSingle