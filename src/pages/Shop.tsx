import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import axios from "axios";
import ShopNav from "../components/ShopNav";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [productList, setProductList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    const apiUrl =
      category !== ""
        ? `${process.env.REACT_APP_API_BASE_URL}/products/category/${category}`
        : `${process.env.REACT_APP_API_BASE_URL}/products`;

    axios
      .get(apiUrl)
      .then((res) => {
        setProductList(res.data.products.slice(0, 8));
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        alert("Error fetching products.");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [category, sort]);

  return (
    <>
      <Helmet>
        <title>Shopsy | Shop</title>
        <meta
          name="description"
          content="Shopsy presents over 1000+ products from popular brands at the never-seen-before price range with 20-days money back guarantee and cash on delivery!"
        />
      </Helmet>
      <div className={isLoading ? "hidden" : ""}>
        <ShopNav
          categoryStateManager={setCategory}
          sortStateManager={setSort}
          loading={setIsLoading}
        />
        <div className="search-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search for product"
            aria-label="Search"
            aria-describedby="button-addon2"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <span className="search-icon">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              className="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="#22a47f"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-2">
          {productList
            .filter((product: any) => {
              if (searchText === "") return product;
              if (searchText !== "" && sort === "") {
                if (
                  product.title.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  return product;
                }
              }
            })
            .map((product: any) => {
              return (
                <>
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.thumbnail}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    discountPercentage={product.discountPercentage}
                  />
                </>
              );
            })}
        </div>
      </div>
      <div className={isLoading ? "loading-container" : "hidden"}>
        <div className="loading">
          <div className="dot dot1"></div>
          <div className="dot dot2"></div>
          <div className="dot dot3"></div>
        </div>
        <h1 className="loading-text">Please wait...</h1>
      </div>
    </>
  );
}
