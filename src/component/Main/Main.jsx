import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react'


const Main = () => {

  /*const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })*/

  const handleResize = () => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    document.getElementById('viewport-main').innerHTML = `${vw}px (W) X ${vh}px (H)`
  }

  useEffect(() => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    const sw = window.screen.width
    const sh = window.screen.height

    document.getElementById('viewport-main').innerHTML = `${vw}px (W) X ${vh}px (H)`
    document.getElementById('screen-size').innerHTML = `Full Screen: ${sw}px (W) X ${sh}px (H)`

    window.addEventListener('resize', handleResize)

  },)

  return (
    <Container>
      <TextContainer>
        <FlexContainer>
          <Title>Your device viewport size is:</Title>
          <ViewSize id='viewport-main'></ViewSize>
          <Line></Line>
          <ScreenSize id="screen-size"></ScreenSize>
        </FlexContainer>
      </TextContainer>
    </Container>
  )
}

const Container = styled.div``;
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 90vh;
`;
const Title = styled.h2`
  font-size: 2.3em;
`;
const ViewSize = styled.h1`
  font-size: 3em;
`;

const FlexContainer = styled.div``;
const ScreenSize = styled.h2``;
const Line = styled.hr``;

//document.getElementById('viewport-main').innerHTML = "Your Device View Port is Height"




export default Main;