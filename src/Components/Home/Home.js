import React, { Component } from "react";

class Home extends Component {
  // getData() {
  //   const query = `query products {
  //                   products {
  //                     id
  //                     name
  //                     description
  //                     rating
  //                     price
  //                     images {
  //                       url
  //                       alt
  //                     }
  //                   }
  //                 }`;

  //   fetch("https://nordic-shop-api.herokuapp.com/", {
  //     credentials: "omit",
  //     headers: {
  //       accept: "*/*",
  //       "accept-language": "en-US,en;q=0.9",
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       variables: {},
  //       query: query
  //     }),
  //     method: "POST",
  //     mode: "cors"
  //   })
  //     .then(response => response.json())
  //     .then(console.log);
  // }

  // componentWillMount() {
  //   this.getData();
  // }

  render() {
    return <div>This is Home</div>;
  }
}

export default Home;
