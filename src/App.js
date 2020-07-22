import React, { Component } from "react";
import Post from "./Post";
import styled from "styled-components";

class App extends Component {
  //배열을 하나(데이터) 만듬
  //이 데이터를 바인딩해서 뿌릴것이다.
  state = {
    post: [
      {
        id: 1,
        title: "제목1",
      },
      {
        id: 2,
        title: "제목2",
      },
      {
        id: 3,
        title: "제목3",
      },
    ],
  };

  render() {
    const ContainerBox = styled.div`
      display: grid;
      justify-content: center;
    `;

    return (
      //데이터를 뿌림
      <ContainerBox>
        {this.state.post.map((post) => {
          return <Post id={post.id} title={post.title} />;
        })}
      </ContainerBox>
    );
  }
}

export default App;
