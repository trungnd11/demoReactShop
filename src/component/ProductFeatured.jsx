import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { NavLink } from "react-router-dom";

const ProductFeatured = () => {
  const [productFeatured, setProductFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProductNew = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products?limit=8");
      if (componentMounted) {
        setProductFeatured(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProductNew();
  }, []);

  const handleCLickCardProduct = () => {

  }

  const responsive = {
    0: { items: 1 },
    1200: { items: 4 },
  };

  const ShowProductsFeatured = productFeatured.map((item) => {
    return (
      <div className="p-2 pb-3">
        <div className="col-12 product-grid">
          <div className="product-image">
            <NavLink to={`/products/${item.id}`} className="image">
              <img className="pic-1" src={item.image} />
              <img className="pic-2" src={item.image} />
            </NavLink>
            <span className="product-hot-label">Hot</span>
            <ul className="product-links">
              <li>
                <a href="#" data-tip="Add to Wishlist">
                  <i className="fa fa-heart"></i>
                </a>
              </li>
              <li>
                <a href="#" data-tip="Compare">
                  <i className="fa fa-random"></i>
                </a>
              </li>
              <li>
                <a href="#" data-tip="Quick View">
                  <i className="fa fa-search"></i>
                </a>
              </li>
            </ul>
          </div>
          <hr className="m-0" />
          <div className="product-content">
            <NavLink className="add-to-cart" to={`/products/${item.id}`}>
              <i className="fa fa-plus me-2"></i>Add to cart
            </NavLink>
            <h3 className="title">
              <a href="#">{item.title.substring(0, 20)}...</a>
            </h3>
            <ul className="rating">
              <li className="fa fa-star"></li>
              <li className="fa fa-star"></li>
              <li className="fa fa-star"></li>
              <li className="fa fa-star"></li>
              <li className="fa fa-star"></li>
            </ul>
            <div className="price">$ {item.price}</div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              Featured Products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row">
          {loading ? <Loading /> : <AliceCarousel
            items={ShowProductsFeatured}
            responsive={responsive} infinite disableDotsControls autoPlay mouseTracking />}
        </div>
      </div>
    </div>
  );
};

export default ProductFeatured;
