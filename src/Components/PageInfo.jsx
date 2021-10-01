import React from "react";

export default function PageInfo(props) {
  return (
    <>
      <div>Showing {props.start}-{props.perPage} of {props.total} products</div>
    </>
  );
}