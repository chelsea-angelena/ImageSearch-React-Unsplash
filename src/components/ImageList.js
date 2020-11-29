import React from 'react';
import styled from 'styled-components';
export default function ImageList({ images }) {
	return (
		<AppWrapper>
			{images && images.map((image) => <Image key={image.id} image={image} />)}
		</AppWrapper>
	);
}

const Image = ({ image }) => {
	console.log(image);
	return (
		<ImageWrapper>
			<img src={image.urls.small} alt={image.alt} />
		</ImageWrapper>
	);
};
const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	margin: 24px;
`;

const ImageWrapper = styled.div`
	margin: 24px;
`;
