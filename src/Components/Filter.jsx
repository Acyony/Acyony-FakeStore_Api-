import React from "react";
import styled from "styled-components";

export default function Filter(props) {

  const onChange = function(event) {
    props.onChange(event.target.value);
  }

  return (
    <>
      <Wrap>
        <DropDown onChange={onChange}>
          <option value="" selected>All</option>
          {props.values.map((v) => <option value={v}>{v}</option>)}
        </DropDown>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  display: flex;

`;

const DropDown = styled.select`
  width: 10rem;
  margin-right: 1rem;
  margin-bottom: 2rem;
`;

