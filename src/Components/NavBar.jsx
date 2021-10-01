import React from "react";
import styled from "styled-components";

export default function NavBar(props) {
  return (
    <>
      <Bar>
        <Menu>Home</Menu>
        <Menu>Forum</Menu>
        <Menu>My Account</Menu>
      </Bar>
    </>
  );
}


const Bar = styled.div`
  height: 10vh;
  width: 80vw;
  border-bottom: 1px solid grey;
  background-color: #ffaebc;
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Menu = styled.div`
  color: white;
  font-weight: bold;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 2rem;
  /* width: 35%; */
`;


