import React from "react";
import styled from "styled-components";
import Basket from "./canvas.png";

export default function Cart(props) {
  return (
    <>
      <CartBox>
        <CartWrap>
          <AmountToPay>{props.amount}</AmountToPay>
          <TotalItems>{props.quantity} Items</TotalItems>
          <Icons src={Basket}></Icons>
        </CartWrap>
      </CartBox>
    </>
  );
}

const CartBox = styled.div`
  height: 15vh;
  display: flex;
  justify-content: flex-end;
`;

const CartWrap = styled.div`
  height: 4vh;
  width: 15vw;
  margin-top: 3rem;
  margin-right: 10px;
  border: 1px solid grey;
  background-color: #b9b7bd;
  display: flex;
  align-items: center;
`;

const Icons = styled.img`
  width: 1rem;
  height: 1rem;
  margin: 10px;
  padding-left: 1rem;
`;

const AmountToPay = styled.p`
  color: white;
  font-weight: bold;
  padding-right: 1rem;
  padding-left: 1rem;
`;

const TotalItems = styled(AmountToPay)`
  font-weight: normal;
`;
