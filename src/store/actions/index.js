const CONTENTFUL_BEARER = process.env.REACT_APP_CONTENTFUL_BEARER;

const query = `
{
  pageCollection {
    items {
      title
      logo {
        url
      }
    }
  }
}
`;

class Site {
  static getData = () => async (
    dispatch,
    getState,
    axios,
  ) => {
    let res = {};

    try {
      res = await axios({
        method: 'post',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CONTENTFUL_BEARER}`,
        },
        data: JSON.stringify({ query })
      })
    } catch (e) {
      console.log(e);
      return;
    }

    return res.data.data.pageCollection;
  }
}

export default Site;