import axios from "axios";
import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";


const getArticles = async (query) => {
	const res = await axios.get(
		// 
		'http://localhost:5000/news'
	);
	return res.data.articles;
};

function NewsList() {
	const [articles, setArticles] = useState([]);
	const [searchKey, setSearchKey] = useState("");
	const [query, setQuery] = useState(
		"top-headlines?country=de"
	);

	useEffect(() => {
		getArticles(query).then(setArticles);
		console.log(articles);
		// eslint-disable-next-line
	}, [query]);

	return (
		<div>
			<div className='header'>
				<div className='logo'>
					<h1>my news</h1>
				</div>
			</div>
			<div className='buttons'>
				<button
					className='btn-grad'
					onClick={() =>
						setQuery(
							"top-headlines?country=us&category=technology"
						)
					}>
					TECH
				</button>

				<button
					className='btn-grad'
					onClick={() =>
						setQuery(
							"everything?q=ukraine%20+war%20OR%20krieg"
						)
					}>
					UKR
				</button>

				<button
					className='btn-grad'
					onClick={() =>
						setQuery(
							"top-headlines?sources=bbc-news"
						)
					}>
					BBC
				</button>

				<button
					className='btn-grad'
					onClick={() =>
						setQuery(
							"everything?q=bonn%20-basketball%20-sport"
						)
					}>
					Bonn
				</button>

				<button
					className='btn-grad'
					onClick={() =>
						setQuery(
							"top-headlines?country=us&category=general"
						)
					}>
					US
				</button>

				<button
					className='btn-grad'
					onClick={() =>
						setQuery(
							"top-headlines?country=de&category=general"
						)
					}>
					DE
				</button>

				<button
					className='btn-grad'
					onClick={() =>
						setQuery(
							"top-headlines?country=ro&category=general&pageSize=100"
						)
					}>
					RO
				</button>
			</div>

			<div className='searchbar'>
				<input
					type='text'
					placeholder='Enter a search word'
					onChange={(e) => {
						setSearchKey(e.target.value);
						console.log(searchKey);
					}}
				/>
			</div>
			<div className='article-list'>
				{articles
					.filter(({ description }) => {
						return searchKey
							? (description || "")
									.toLowerCase()
									.includes(
										(
											searchKey || ""
										).toLowerCase()
									)
							: true;
					})
					.map(
						({
							title,
							description,
							url,
							urlToImage,
							source,
							publishedAt
						}) => (
							<NewsItem
								title={title}
								description={description}
								url={url}
								urlToImage={urlToImage}
								source={source.name}
								date={publishedAt}
							/>
						)
					)}
			</div>
		</div>
	);
}

export default NewsList;
