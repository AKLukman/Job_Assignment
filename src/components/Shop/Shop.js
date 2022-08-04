import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import ReactPaginate from "react-paginate";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    fetch(`./products.JSON`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);

  const handleSearch = () => {
    const searchText = document.getElementById("searchId").value;

    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setDisplayProducts(matchedProducts);
  };

  const postPerPage = 10;
  const pageVisited = pageNumber * postPerPage;

  const displayedPosts = displayProducts.slice(
    pageVisited,
    pageVisited + postPerPage
  );

  const pageCount = Math.ceil(displayProducts.length / postPerPage);

  const onPageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div className="search-field">
        <span>
          <input
            id="searchId"
            className="search"
            type="text"
            placeholder="Search the product you want"
            onChange={handleSearch}
          />
        </span>
      </div>
      <div>
        <div>
          <div className="product-conatiner">
            {displayedPosts.map((product) => (
              <Product product={product} key={product.key}></Product>
            ))}
          </div>
        </div>

        <ReactPaginate
          prviousLabel="previous"
          nextLabel="next"
          pageCount={pageCount}
          onPageChange={onPageChange}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
};

export default Shop;
