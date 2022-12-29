import React from "react";

function Searchbar({
	setSearchKey,
	searchKey,
	placeholder,
}) {
	// const [results, setResults] = useState([]);
	// const [noResult, setNoResult]=useState('none');

	const handleSubmit = (e) => {
    e.preventDefault();
		setSearchKey(e.target.value);
	};

	// 
	return (
		<div>
			<form className='form' onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder={placeholder}></input>
				<button type='submit'>Search </button>
			</form>

			{/* <div className='results'>
				{data.map((item) => {
					return <div>{item.title}</div>;
				})}
			</div>

			{results.length !== 0 ? (
				results.map((element) => {
					return (
						<div
							id={element.objectID}
							className='search-result'>
							<h3>{element.title}</h3>
							<h4>{element.author}</h4>
							<p>{element.url}</p>
						</div>
					);
				})
			) : (
				<div className='no-result'>
					No result found!
				</div>
			)} */}
		</div>
	);
}

export default Searchbar;
