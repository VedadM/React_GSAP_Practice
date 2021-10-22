import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";

import Site from "../store/actions";
import styled from "styled-components";

const Home = () => {
  /* Loading */
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});

  /* Redux */
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(false);

      let response = await dispatch(Site.getData());

      if (response) {
        setUserData(response);
        setIsLoading(true);
      }
    }

    getData();
  }, [dispatch]);

  const loaderCheck = () => {
    if (isLoading) {
      const data = userData.items.map((d, i) =>
        <div key={`artists-${i}`}>
          {d.title}
        </div>
      );

      return (<div className="App">
      <header className="App-header">
        <HeaderContentFull>{data}</HeaderContentFull>
      </header>
    </div>)
    }

    return <>Loading....</>
  }

  return(
    <div>
      {loaderCheck()}
    </div>
  );
};
  
export default Home;

const HeaderContentFull = styled.h1`
  text-align: center
`