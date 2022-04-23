import React, { useEffect } from 'react'
import styled from 'styled-components';
import Card from './common/Card'
import { useNavigate } from "react-router-dom";

const Header = styled.header`
	padding: 40px 40px 16px 40px;
`;

const Body = styled.div`
	text-align: left;
	padding-left: 6px;
	padding: 0px 12px 0px 12px;
`;

const Footer = styled.div`
	text-align: left;
	padding: 0px 12px;
`;

const Image = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 4px;
	cursor: pointer;
  object-fit: cover;
  object-position: center;
`;

const Line = styled.hr`
	border: none;
	height: 0.1px;
	opacity: 0.1;
	background-color: #333;
`;

const Title = styled.h1`
	font-size: 1.2rem;
	color: #333;
	font-weight: bold;
	margin-bottom: 4px;
`;

const Description = styled.p`
	margin-top: 0px;
	font-style: italic;
	font-size: 1rem;
	padding-left: 8px;
	cursor: pointer;
`;

const StyledCard = styled(Card)`
	max-width: 300px;
	box-sizing: border-box;
	position: sticky;
	top: 16px;
`;

const Summary = styled.p`
	font-size: 1rem;
	margin-top: 0px;
	font-style: italic;
`;

function PodcastBanner({imgSrc, summary, trackName, artistName, trackId}) {
	let navigate = useNavigate();
	
  return (
    <StyledCard>
			<Header>
				<Image src={imgSrc} onClick={() => navigate(`/podcast/${trackId}`)}></Image>
			</Header>
			<Body>
				<Line></Line>
				<Title onClick={() => navigate(`/podcast/${trackId}`)}>
					{trackName || ''}
				</Title>
				<Description onClick={() => navigate(`/podcast/${trackId}`)}>
					by {artistName || ''}
				</Description>
			</Body>
			<Footer>
				<Line></Line>
				<Title>
					Description
				</Title>
				<Summary>
					{summary ? summary.label : ''}
				</Summary>
			</Footer>
    </StyledCard>
  )
}

export default PodcastBanner