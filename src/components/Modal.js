import { useRef, useEffect } from 'react'
import ReactDOM from "react-dom"; 
import styled from "styled-components";
import { gsap, Power4 } from "gsap";

const Modal = ({ show, close }) => {
  const modal = useRef(null);

  const reverseCompleteCallback = () => {
    tl.kill();
    close();
  };

  let tl =  
    gsap.timeline({ 
      paused: true,
      startTime: 0,
      defaults: { // children inherit these defaults
        duration: 0.5,
        ease: "none" 
      },
      onReverseComplete: reverseCompleteCallback
    });

  useEffect(() => { 
    if (document.querySelector('.modal')) {  
      gsap.set(modal.current, { opacity: 0, y: -1000 }, );
      tl.to(modal.current, {opacity: 1, y: "+=1000", ease: Power4.easeOut})
        // .to(modal.current, {rotation: 1440, duration: 0.5, ease: "elastic"})
        .to(modal.current, {width: "100%", height: "100%", zIndex: 3, ease: Power4.easeOut})
        .play();
    }
  },[tl, show]);

  const onClose = () => {
    tl.reverse();
  }

  return ReactDOM.createPortal(
    <>
     {
     show ?
     
     <ModalContainer>
        <ModalBox className="modal" ref={modal}>
          <ModalHeader>
            <ModalHeaderTitle> Modal Title </ModalHeaderTitle>
            <ModalClose onClick={onClose}>
              X
            </ModalClose>
          </ModalHeader>
          <ModalContent>
          This is Modal Content
          </ModalContent>
          <ModalFooter>
            <ModalCloseButton onClick={onClose}>
              Cancel
            </ModalCloseButton>
          </ModalFooter>
        </ModalBox>
      </ModalContainer>
      : null
     }
    </>,
    document.querySelector('#modal')
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba($color: #ffffff, $alpha: 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const ModalBox = styled.div`
  width: 30vw;
  opacity: 0;
  height: auto;
  background-color: #fff;
  top: -1000px;
  padding: 3%;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  box-sizing: border-box; 
`;

const ModalHeader = styled.header`
  position: relative;
  border-bottom: 1px solid #dddddd;
`

const ModalHeaderTitle = styled.h2`
  text-align: center;
`;

const ModalClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
`;

const ModalContent = styled.main`
  border-bottom: 1px solid #dddddd;
  padding: 2rem 0;
  flex-grow: 1;
`;

const ModalFooter = styled.footer`
  padding: 2rem 0;
  padding-bottom: 0;
  button {
  float: right;
  padding: 0.5rem;
  border-radius: 8px;
`;

const ModalCloseButton = styled.button`
  background-color: transparent;
  font-weight: 600;
  &:hover {
  color: rgba(54, 67, 72, 0.8);
`;
  