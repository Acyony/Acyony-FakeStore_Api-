import React from "react";
import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 1rem;
`;

const ImgContainer = styled.div`
  box-sizing: border-box;
  height: 15vw;
`;

const Img = styled.img`
  box-sizing: border-box;
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const Name = styled.h1`
  box-sizing: border-box;
  font-size: 1rem;
`;

const SaleWrap = styled.div`
  text-align: center;
  padding: 1rem;
`;

const Sale = styled.div`
  font-size: 1rem;
  padding: 5px;
  border-radius: 5px;
  background-color: green;
  color: white;
  display: inline-block;
  margin-bottom: 0.5rem;
`;

const PriceContainer = styled.div`
  display: grid;
  grid-template-areas: "oldprice price";
  text-align: center;
`;
const OldPrice = styled.div`
  grid-area: oldprice;
  color: red;
  text-decoration: line-through;
`;

const Price = styled.div`
  grid-area: price;
  color: green;
`;

const Range = styled.div`
  font-size: 1rem;
  padding: 5px;
  margin-top: 1rem;

`;

export default function ProductBox(props) {
  return (
    <Container>
      <ImgContainer>
        <Img src={props.img}></Img>
      </ImgContainer>
      <Name>{props.name}</Name>
      <SaleWrap>
        <Sale>SALE!</Sale>
      </SaleWrap>
      <PriceContainer>
        <OldPrice>$ {props.oldprice}</OldPrice>
        <Price>$ {props.price}</Price>
      </PriceContainer>
      <Range>Rate: {props.rate}</Range>
    </Container>
  );
}
