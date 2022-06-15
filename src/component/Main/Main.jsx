import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import './Main.css'
import { BsStack } from 'react-icons/bs'
import {TbViewportWide} from 'react-icons/tb'
import {CgScreenShot} from 'react-icons/cg'

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
    document.getElementById('screen-size').innerHTML = `Full Screen: ${sw}px x ${sh}px`

    window.addEventListener('resize', handleResize)

  },)

  return (
    <Container className='container'>
      <TextContainer>
        <FlexContainer>
          <CgScreenShot size={60}/>
          <Title>Your device viewport size is:</Title>
          <ViewSize id='viewport-main'></ViewSize>
          <Line></Line>
          <ScreenSize id="screen-size"></ScreenSize>
        </FlexContainer>
      </TextContainer>
    </Container>
  )
}

const Container = styled.div`  
  
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 90vh;
`;
const Title = styled.h2`
  font-size: calc(100% + 1.5vw);
  
`;
const ViewSize = styled.h1`
  font-size: calc(100% + 3.9vw);
  font-weight: bolder;
  //text-shadow: 1px 2.5px #bcb8b8;
`;

const FlexContainer = styled.div``;
const ScreenSize = styled.h2`
  font-size: calc(100% + 1.1vw);
`;
const Line = styled.hr``;

//document.getElementById('viewport-main').innerHTML = "Your Device View Port is Height"




export default Main;