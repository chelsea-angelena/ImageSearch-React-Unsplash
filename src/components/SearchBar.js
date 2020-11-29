import React  from 'react';
import styled from 'styled-components';

// import SearchList from './SearchList';

export default function SearchBar({ onChange, term, onSubmit }) {
	const handleChange = (event) => {
		onChange(event.target.value);
	};

	return (
		<Wrapper>
			<SearchWrapper>
				<Input value={term} onChange={handleChange} />

				<Button onClick={() => onSubmit(term)}>Submit </Button>
			</SearchWrapper>
		</Wrapper>
	);
}
// {
/* {images ? (
				<div>
					{images &&
						images.map((image) => {
							return (
								<li key={image.id}>
									<img src={image.urls.full} alt={image.alt} />
								</li>
							);
						})}
				</div>
			) : null}
		</Wrapper>
	);
} */

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
	padding: 4em;
	background: papayawhip;
`;
const Button = styled.button`
	/* Adapt the colors based on primary prop */
	background: ${(props) => (props.primary ? 'hsl(179, 44%, 55%)' : 'white')};
	color: ${(props) => (props.primary ? 'white' : 'hsl(213, 30%, 32%)')};

	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;

const Input = styled.input`
	padding: 0.5em;
	margin: 0.5em;
	color: hsl(263, 6%, 43%);
	background: white;
	border: 2px solid palevioletred;
	border-radius: 3px;
	width: 228px;
	height: 32px;
`;
const SearchWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;
