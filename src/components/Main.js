import React from "react"
import styled from "styled-components"
import MainVideo from "../assets/video.mp4"
import FadeIn from "react-fade-in"
const Main = () => {
  return (
    <MainContainer id="main">
      <MainBg>
        {
          <Video
            src={MainVideo}
            type="video/mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        }
      </MainBg>
      <MainContent>
        <MainItems>
          {/* <Typing speed={120} hideCursor={true}> */}
          <FadeIn transitionDuration={6000}>
            <MainH1>Anup Ghimire</MainH1>

            <MainP>Software Developer</MainP>
          </FadeIn>
        </MainItems>
      </MainContent>
    </MainContainer>
  )
}

export default Main

const MainContainer = styled.div`
  background-color: #0c0c0c;
  display: flex;
  justify-content: center;
  color: #fff;
  align-items: center;
  height: 105vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`

const MainBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const MainContent = styled.div`
  z-index: 3;
  height: calc(100vh -80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`

const MainItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
`

const MainH1 = styled.h1`
  font-size: clamp(2.5rem, 8vw, 6rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  font-weight: bold;
  padding: 0 1rem;
`

const MainP = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 300;
`
