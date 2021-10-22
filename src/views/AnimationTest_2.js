import { useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

const Animation_Two = () => {
  const imageBox = useRef();

  const increaseSize = ({ currentTarget }, xPos, yPos) => {
    gsap.to(currentTarget, {
      scale: 2, 
      duration: 1, 
      x: xPos, 
      y: yPos,
      transformOrigin: '0% 0%',
      ease: "slow(0.7, 0.1,0.1,0.7, false)"
    });

    gsap.to(imageBox.current, {opacity: 1, duration: 0.2});
  }

  const decreaseSize = ({ currentTarget }, xPos, yPos) => {
    gsap.to(currentTarget, {
      scale: 1, 
      duration: 1,
      x: 0,
      y: 0,
      transformOrigin: '0% 0%'
    });

    gsap.to(imageBox.current, {opacity: 0, duration: 0.2});
  }

  return(
    <ContentBox>
      <ContentBoxHeader>
        Animation Test 2
      </ContentBoxHeader>
      <AnimationBox>

        <HoveredContainer className="imageCOntainer" ref={imageBox}>
          Other stuff goes here
        </HoveredContainer>
        <TextContainer className="textContainer">
          <TextAnimationBox onMouseOver={(e) => {increaseSize(e, 50, 20)}} onMouseOut={(e) => {decreaseSize(e, 50, 20)}}>
            First Hover
          </TextAnimationBox>
          <TextAnimationBox onMouseOver={(e) => {increaseSize(e, -20, -50)}} onMouseOut={(e) => {decreaseSize(e, -20, -50)}}>
            Second Hover
          </TextAnimationBox>
        </TextContainer>
        
      </AnimationBox>
    </ContentBox>)
  };
  
export default Animation_Two;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  z-index: 1;
`;

const ContentBoxHeader = styled.h1`
  text-align: center
`;

const AnimationBox = styled.div`
  background-color: #d3d3d3;
  flex-grow: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  
  >:nth-child(1) {
    top: 50px;
    left: 20px;
    // transform: translate(50%, 20%);
  }

  >:nth-child(2) {
    bottom: 30px;
    right: 100px;
  }
`;

const TextAnimationBox = styled.div`
  // background-color: white;
  padding 10px;
  // border-radius: 5px;
  font-size: 30px;
  position: absolute;
  padding: 0;
  margin: 0;
`;

const HoveredContainer = styled.div`
  // position: fixed;
  // height: 50vw;
  // width: 70vw;
  position: absolute;
  height: 60%;
  width: 80%;
  background-color: rgba(0,0,0,0.2);
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;