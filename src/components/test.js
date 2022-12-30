import axios from "axios";
import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";


function NewsList() {
	const [articles, setArticles] = useState([]);
	const [searchKey, setSearchKey] = useState("");

	useEffect(() => {
		// TODO: hide API key
		const getArticles = async (q) => {
            q = encodeURIComponent(q);
			const res = await axios.get(
				`https://newsapi.org/v2/everything/apiKey=ed07a8d765b6434ca92bc832025d8c49`
			);
			setArticles(res.data.articles);
            console.log(q)
		};
		getArticles();
        console.log(articles)
        
	}, []);

	return (
		<div>
			<div className='searchbar'>
                <input
					type='text'
                    value={searchKey}
					placeholder='Enter a search word'
                    onChange={(e) => setSearchKey(e.target.value)} />
			</div>
			<div className='article-list'>
				{articles
					.filter(({ description }) => {
						return searchKey ?
							description
									.toLowerCase()
									.includes(
										(searchKey||"").toLowerCase()
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
