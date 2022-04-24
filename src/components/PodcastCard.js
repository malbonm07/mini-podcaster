import React from 'react'
import Card from './common/Card'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 500px;
  cursor: pointer;
`

const Article = styled.article`
  width: 100%;
  border: 1px solid transparent;
`

const Header = styled.header`
  position: relative;
`

const Body = styled.div`
  padding: 70px 14px 0px 14px;
`

const Title = styled.h2`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
`

const Description = styled.p`
  font-size: 1rem;
`

const Image = styled.img`
  width: 146px;
  height: 146px;
  border-radius: 50%;
  position: absolute;
  top: 0%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  object-position: center;
`

function PodcastCard({author, title, imgSrc, to}) {
  const navigate = useNavigate();

  return (
    <StyledCard onClick={() => navigate(to)}>
      <Article>
        <Header>
          <Image src={imgSrc.label ? imgSrc.label : ''}></Image>
        </Header>
        <Body>
          <Title>{title}</Title>
          <Description>Author: {author}</Description>
        </Body>
      </Article>
    </StyledCard>
  )
}

export default PodcastCard