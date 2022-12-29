import React from "react";
import "./styles/articles.css";
import {
	BrowserRouter as Router,
	Link,
} from "react-router-dom";

function NewsItem({ title, description, url, urlToImage }) {
	return (
		<Router>
			<div className='article'>
				<img src={urlToImage} alt='imageofnews' />

				<h3>
					<a href={url}> {title} </a>
				</h3>

				<p>{description}</p>
				<div>
					<button className='article-button'>
						{" "}
						<a href={url} target='_blank'>
							zum Artikel
						</a>
					</button>
				</div>
			</div>
		</Router>
	);
}

export default NewsItem;
