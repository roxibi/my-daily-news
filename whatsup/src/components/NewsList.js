import axios from "axios";
import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const getArticles = async (query) => {
	const res = await axios.get(
		`https://newsapi.org/v2/${query}&apiKey=ed07a8d765b6434ca92bc832025d8c49`
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
		// TODO: hide API key
		getArticles(query).then(setArticles);
		console.log(articles);
	}, [query]);

	return (
		<div>
			<div>
				<button
					onClick={() =>
						setQuery(
							"top-headlines?sources=bbc-news"
						)
					}>
					BBC
				</button>
				<button
					onClick={() =>
						setQuery("everything?language=ro")
					}>
					RO
				</button>
			</div>
			<div className='searchbar'>
				<input
					type='text'
					value={searchKey}
					placeholder='Enter a search word'
					onChange={(e) =>
						setSearchKey(e.target.value)
					}
				/>
			</div>
			<div className='article-list'>
				{articles
					.filter(({ description }) => {
						return searchKey
							? description
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
						}) => (
							<NewsItem
								title={title}
								description={description}
								url={url}
								urlToImage={urlToImage}
								source={source}
							/>
						)
					)}
			</div>
		</div>
	);
}

export default NewsList;
