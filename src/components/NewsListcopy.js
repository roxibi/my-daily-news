import axios from "axios";
import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const options = [
    { name: "TECH", value: "top-headlines?country=us&category=technology" },
    { name: "UKR", value: "everything?q=ukraine%20+war%20OR%20krieg" },
    { name: "BBC", value: "top-headlines?sources=bbc-news" },
    { name: "BONN", value: "everything?q=bonn%20-basketball%20-sport" },
    { name: "US", value: "top-headlines?country=us&category=general" },
    { name: "RO", value: "top-headlines?country=ro&category=general&pageSize=100" },
];

function NewsListcopy() {
    const [articles, setArticles] = useState([]);
    const [query, setQuery] = useState("top-headlines?country=us&category=technology");

    // const [url, setUrl] = useState("http://localhost:5000/news");
    const getArticles = async () => {
        const encoded = encodeURIComponent(query);
        const response = await axios.get(`http://localhost:5000/news/${encoded}`);

        setArticles(response.data);
        console.log(response.data);
    };

    useEffect(() => {
        getArticles();
        console.log(articles);
        // eslint-disable-next-line
    }, [query]);

    return (
        <div>
            <div className='header'>
                <div className='logo'>
                    <h1>my news</h1>{" "}
                </div>
                <div className='buttons'>
                    {options.map((o) => {
                        return (
                            <button key={o.value} className='btn-grad' onClick={() => setQuery(o.value)}>
                                {o.name}
                            </button>
                        );
                    })}
                </div>
                {/* <ul>
                    <li>
                        {" "}
                        Select a Category
                        <ul className='dropdown'>
                            {options.map((o) => {
                                return (
                                    <li
                                        className='btn-grad'
                                        key={o.name}
                                        value={o.value}
                                        // eslint-disable-next-line
                                    >
                                        <a href='' onClick={() => setQuery(o.value)}>
                                            {o.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>{" "}
                    </li>
                </ul> */}

                {/* <div className='searchbar'>
				<input
					type='text'
					placeholder='Enter a search word'
					onChange={(e) => {
						setSearchKey(e.target.value);
						console.log(searchKey);
					}}
				/>
			</div>  */}
            </div>
            <div className='article-list'>
                {articles.map(({ title, description, url, urlToImage, source, publishedAt }) => (
                    <NewsItem
                        title={title}
                        description={description}
                        url={url}
                        urlToImage={urlToImage}
                        source={source.name}
                        date={publishedAt}
                    />
                ))}
            </div>
        </div>
    );
}

export default NewsListcopy;
