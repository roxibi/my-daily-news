import  axios  from 'axios';
import React, {useState, useEffect} from 'react'
import NewsItem from './NewsItem';

function NewsList() {
const [articles, setArticles] =useState([]);


useEffect(()=>{
const getArticles=async()=>{
    const res=await axios.get(`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=ed07a8d765b6434ca92bc832025d8c49`);
    console.log(res)
    setArticles(res.data.articles)
    console.log(res.data.articles)
}
getArticles();
}, []);

  return (
    <div>
      {articles.map(
        ({ title, description, url, urlToImage, source })=> (
        <NewsItem title={title} description={description} url={url} urlToImage={urlToImage} source={source}/>)
        
        )}
    </div> )
}

export default NewsList
