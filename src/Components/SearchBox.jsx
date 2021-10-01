import React from "react";
import styled from "styled-components";
import searchIcon from "./search.png";

const Container = styled.div`
  height: 2rem;

  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  margin-right: 1.5rem;

  border-radius: 5px;
  border: 1px solid grey;
  align-items: center;
  padding: 0 0.5rem;
`;

const SearchInput = styled.input`
  border: none;
  height: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
`;

const Icon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 5px;
`;

export default function SearchBox(props) {

 function resetSearchBox(event) {
    event.target.value = "";
} 
  
  return (
    <>
      <Container>
        <Icon src={searchIcon}></Icon>
        <SearchInput  value={props.keyword} onFocus={resetSearchBox}></SearchInput>
      </Container>
    </>
  );
}
