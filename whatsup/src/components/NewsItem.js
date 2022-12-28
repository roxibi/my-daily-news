import React from 'react'

function NewsItem({ title, description, url, urlToImage, source }) {

    return (
        <div>
            <img src={urlToImage} alt="image"/>
            <h3 ><a href={url}>{title}</a></h3>
            <p>{source.name}</p>
            <p>{description}</p>
        </div>
    )
}

export default NewsItem
