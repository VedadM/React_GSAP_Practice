import styled from "styled-components";
import { useRef } from "react";
import { gsap } from "gsap";

const Footer = () => {
  const footerRef = useRef(null);

  const enlargeFooter = () => {
    gsap.to(footerRef.current, {height: "150px", duration: .5, delay: .5});
  }
  
  const reduceFooter = () => {
    gsap.to(footerRef.current, {height: "50px", duration: .5, delay: .5});
  }

  return (
    <FooterStyle ref={footerRef} onMouseOver={enlargeFooter} onMouseOut={reduceFooter}>
      <CopyRight>Footer stuff goes here</CopyRight>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.footer`
  height: 50px;
  display: grid;
  background-color: gray;
  align-items: center;
  justify-content: center;
`;

const CopyRight = styled.div`
  color: white
`;