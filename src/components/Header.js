import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import gsap from 'gsap';

const Header = () => {
  const [hoverState, setHoverState] = useState(false);

  const toggleHover = ({currentTarget}) => {
    if (hoverState) {
      setHoverState(false);
      gsap.to(currentTarget, {color: "blue"});
    } else {
      setHoverState(true);
      gsap.to(currentTarget, {color: "red"});
    }
  } 

  return (
    <Nav>
      <Menu>
        <HeaderLink to="/" onMouseOver={toggleHover} onMouseOut={toggleHover}>Home</HeaderLink>
        <HeaderLink to="/animation-test-1" onMouseOver={toggleHover} onMouseOut={toggleHover}>Animation Test 1</HeaderLink>
        <HeaderLink to="/animation-test-2" onMouseOver={toggleHover} onMouseOut={toggleHover}>Animation Test 2</HeaderLink>
      </Menu>
    </Nav>
  );
};
  
export default Header;

const Nav = styled.nav`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto;
  grid-template-areas: "menus";
  justify-items: stretch;
  align-items: stretch;
  column-gap: 20px;
  height:  40px;
`;

const Menu = styled.div`
  background: lightgray;
  grid-area: menus;
  display: flex;
  flex-direction: row;
  justify-content: start;
  height: 100%;
  align-items: center;
}`

const HeaderLink = styled(Link)`
  display: flex;
  margin: 0 20px;
  color: blue;
  text-decoration: none;
`;
  