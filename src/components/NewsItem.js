import React from "react";
import "./styles/articles.css";
import NewsImage from "../assets/news-img.png";

import { BrowserRouter as Router } from "react-router-dom";

function NewsItem({ title, description, url, urlToImage, source, date }) {
	return (
		<Router>
			<div className='article'>
				<img src={urlToImage ? urlToImage : NewsImage} alt='imageofnews' />

				<h3>
					<a href={url}> {title} </a>
				</h3>

				<p>{description}</p>

				<button className='btn-grad' id='card-button'>
					{" "}
					<a href={url} target='_blank'>
						read
					</a>
				</button>
				<div className='card-footer'></div>
				<p>{source}</p>
				<p>{date.substring(11, 16)}</p>
			</div>
		</Router>
	);
}

export default NewsItem;
