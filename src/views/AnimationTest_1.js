import { useEffect, useState, useRef } from 'react';
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import styled from "styled-components";

import Modal from "../components/Modal";

function Animation_One() {
  const nameRef = useRef();
  const users = useSelector(state => state.users);
  const q = gsap.utils.selector(nameRef);

  /* Modal */
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  useEffect(() => {
    gsap.to(q(".box"), {
      y: 0,
      opacity: 1,
      stagger: 0.33,
    });
  }, []);

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.5, zIndex: 2});
  };
  
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#d3d3d3", scale: 1, zIndex: 1 });
  };

  const nameReturn = () => {
    const names = users.map((s, i) => {
      return(<NameWrapper className="box" key={`person-${i}`} onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={() => Toggle()}>{s.name}</NameWrapper>)
    })

    return (
      <NameContainer ref={nameRef}>
        {names}
      </NameContainer>
    )
  }

  return (
    <div>
      <ContentBoxHeader>
        Animation Test 1
      </ContentBoxHeader>
      {nameReturn()}
      <Modal show={modal} close={Toggle} />
    </div>
  );
}

export default Animation_One;

const ContentBoxHeader = styled.h1`
  text-align: center
`;

const NameContainer = styled.div`
  display: flex;
`;

const NameWrapper = styled.div`
  display: flex;
  width: 23%;
  margin: 1%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #d3d3d3;
  transform: translate(0px, -50px);
  opacity: 0;
`;
