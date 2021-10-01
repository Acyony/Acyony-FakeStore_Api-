import React, { useState, useEffect } from "react";
import Header from "./Components/Header.jsx";
import ProductBox from "./Components/ProductBox.jsx";
import styled, { keyframes } from "styled-components";
import NavBar from "./Components/NavBar.jsx";
import Filter from "./Components/Filter.jsx";
import PageInfo from "./Components/PageInfo.jsx";
import SearchBox from "./Components/SearchBox.jsx";
import Pagination from "./Components/Pagination.jsx";
import Cart from "./Components/Cart.jsx";
import Spin from "./Components/spinner.png";

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  // -----=^.^-=-----
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  useEffect(() => {
    setLoading(true); // -----=^.^-=----- Making the spinner visible

    let url = "https://fakestoreapi.com/products?limit=12";

    if (category !== "") {
      url = `https://fakestoreapi.com/products/category/${category}?limit=12`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((resData) => {
        setProducts(resData);
        setLoading(false); // -----=^.^-=----- Making the spinner invisible
      });
  }, [category]);

  const onFilterChange = function (c) {
    setCategory(c);
  };

  return (
    <>
      <Container>
        {/* ---------=^.^=--------- */}
        <HeaderWrap>
          <Header name="Woo Dev" slogan="Your best shopping"></Header>
          <SearchBox keyword="Search product..."></SearchBox>
        </HeaderWrap>

        {/* ---------=^.^=--------- */}
        <NavBarWrap>
          <NavBar></NavBar>
          <CartWrap>
            <Cart amount="$100" quantity="2"></Cart>
          </CartWrap>
        </NavBarWrap>

        {/* ---------=^.^=--------- */}
        <FilterWrap>
          <Filter values={categories} onChange={onFilterChange}></Filter>
          <PageInfo start="1" perPage="12" total="18"></PageInfo>
          <Pagination></Pagination>
        </FilterWrap>

        {/* ---------=^.^=--------- */}

        <ProductsGrid>
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "60%",
                height: "",
              }}
            >
              <Spinner src={Spin} />
            </div>
          ) : (
            products.map((product, index) => (
              <ProductBox
                key={product.id}
                key={index + 1}
                img={product.image}
                name={product.title}
                oldprice={(product.price + 5).toFixed(2)}
                price={product.price.toFixed(2)}
                rate={product.rating.rate}
              ></ProductBox>
            ))
          )}
        </ProductsGrid>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  height: 90%;
  width: 80%;
  margin: 2rem 0 2rem 8rem;
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavBarWrap = styled.div`
  display: flex;
  position: relative;
`;

const CartWrap = styled.div`
  position: absolute;
  right: 0;
`;

const FilterWrap = styled.div`
  display: flex;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 1rem;
`;

// -----------=^.^=-------- Animation spinner

const animate = keyframes`
from{
    transform: rotate(0deg)
}
from {
    transform: rotate(360deg)

}
`;

const Spinner = styled.img`
  width: 1rem;
  height: 1rem;
  margin: 10px;
  animation: ${animate} 1000ms linear infinite;
`;
