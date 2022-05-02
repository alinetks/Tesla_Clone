import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal';
import FadeIn from 'react-fade-in/lib/FadeIn';
import styled from 'styled-components'


interface StyleProps {
  bgImage?: string;
}

interface Props {
  title: string;
  description?: string;
  leftBtnText: string;
  rightBtnText?: string;
  backgroundImg: string;
}
const Section: React.VFC<Props> = ({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <FadeIn>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </FadeIn>


      <Fade>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
      </Fade>

    </Wrap>
  )
}

export default Section



const Wrap = styled.div<StyleProps>`
// width: 100vw;
height: 100vh;
background-image: url('/images/model-s.jpg');
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
justify-content: space-between; //vertical distribuition
align-items: center; //horizontal distribution
background-image: ${props => `url("${props.bgImage}")`};

scroll-snap-align: start;
`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;

`

const ButtonGroup = styled.div`
display: flex;
margin-bottom: 30px;

@media (max-width: 768px) {
    flex-direction: column;
}

`

const LeftButton = styled.div`
background-color: #393c41;
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin: 8px;
`

const RightButton = styled(LeftButton)`
background-color: white;
opacity: 0.65;
color: #393c41;

`


