import React from "react";
import styled from "styled-components";

export default function Pagination(props) {
  return (
    <>
      <Wrap>
        <PagesCard>
          <PagesNumber>1</PagesNumber>
          <PagesNumber>2</PagesNumber>
        </PagesCard>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  width: 65%;

`;

const PagesCard = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: start;
`;

const PagesNumber = styled.div`
  background-color: grey;
  margin-right: 0.5rem;
  font-size: 1rem;
  padding: 5px;
`;





