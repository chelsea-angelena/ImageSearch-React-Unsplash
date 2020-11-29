import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import styled from 'styled-components';
import axios from 'axios';
import ImageList from './components/ImageList';

const API_KEY = process.env.REACT_APP_API_KEY;
// We pass a callback to Child
console.log(API_KEY);
export default function App() {
	const [term, setTerm] = useState('');
	const [results, setResults] = useState([]);
	const [error, setError] = useState(null);

	const handleChange = (newValue) => {
		setTerm(newValue);
	};
	const searchAPI = async (term) => {
		try {
			let res = await axios.get('https://api.unsplash.com/search/photos/', {
				headers: { Authorization: `Client-ID ${API_KEY}` },
				params: { query: term },
			});
			setResults(res.data.results);
	
		} catch (e) {
			setError(e);
		}
	};

	useEffect(() => {
		searchAPI('random');
	}, []);

	if (error) {
		return <p>{error.message}</p>;
	}
	return (
		<AppWrapper>
			<SearchBar term={term} onChange={handleChange} onSubmit={searchAPI} />
			{term ? <Title>{term}</Title> : <Title>Search for images</Title>}
			{results ? <ImageList images={results} /> : null}
		</AppWrapper>
	);
}
const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 500;
`;
const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;
