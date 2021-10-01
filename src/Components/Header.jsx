import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  margin: 0;
  margin-bottom: 0.5rem;
`;
const H2 = styled.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: normal;
`;

const HeaderCont = styled.div`
  width: 75%;
  padding: 2rem 0 0 4rem;
`;


export default function Header(props) {
  return (
    <>
        <HeaderCont>
          <H1>{props.name}</H1>
          <H2>{props.slogan}</H2>
        </HeaderCont>
    </>
  );
}
