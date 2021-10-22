import { renderRoutes } from 'react-router-config';
import styled from 'styled-components';

import GlobalCSS from './styles/global.css'; 
import Header from "./components/Header";
import Footer from "./components/Footer";

function App(props) {
  return (
    <Wrapper>
      <GlobalCSS />
      <Header />
      <Content>
        {renderRoutes(props.route.routes) }
      </Content>
      <Footer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas: 
    "header"
    "content"
    "menu";
    grid-template-rows: max-content auto max-content;
`;

const Content = styled.div`
  padding: 0 1%;
`;