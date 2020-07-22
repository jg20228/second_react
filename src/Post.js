//스타일 컴포넌트 만들기
import React from "react";
//임포트
import styled from "styled-components";

//PostBox 꾸미기
const PostBox = styled.div`
  width: 300px;
  height: 100px;
  border: 1px solid black;
  display: inline-block;
`;

//여기서 데이터를 props로 받아서 뿌림
//구조 분할 할당
const Post = (props) => {
  return <PostBox>{props.title}</PostBox>;
};

export default Post;
