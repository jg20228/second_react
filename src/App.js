import React, { Component } from "react";
import Post from "./Post";
import styled from "styled-components";

//스타일 컴포넌트는 무조건 밖으로 뺀다
const ContainerBox = styled.div`
  display: grid;
  justify-content: center;
`;

class App extends Component {
  //배열을 하나(데이터) 만듬
  //이 데이터를 바인딩해서 뿌릴것이다.
  state = {
    posts: [
      { id: 1, title: "제목1" },
      { id: 2, title: "제목2" },
      { id: 3, title: "제목3" },
    ],
  };

  render() {
    //render 안에서는 const로 해야함
    //화면그려질때마다 계속 만들 필요없어서
    //오브젝트 넣을것이라 중괄호
    const add = () => {
      this.setState({
        posts: this.state.posts.concat({ id: 4, title: "제목4" }),
      });
    };
    //중괄호 적었으니 return
    const del = () => {
      this.setState({
        posts: this.state.posts.filter((post) => {
          return post.id !== 2;
        }),
      });
    };

    return (
      //데이터를 뿌림, JSX 문법 onClick 조심
      <ContainerBox>
        <button onClick={del}>삭제</button>
        <button onClick={add}>추가</button>
        {this.state.posts.map((post) => {
          return <Post id={post.id} title={post.title} />;
        })}
      </ContainerBox>
    );
  }
}

export default App;
