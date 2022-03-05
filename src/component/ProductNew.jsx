import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { NavLink } from "react-router-dom";

const ProductNew = () => {
  const [productNew, setProductNew] = useState([]);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProductNew = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products?limit=8");
      if (componentMounted) {
        setProductNew(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProductNew();
  }, []);

  const ShowProductsNew = () => {
    return (
      <>
        {productNew.map((item) => {
          return (
            <div className="col-sm-6 col-md-4 col-lg-3 mt-4" key={item.id}>
              <div className="product-grid h-100">
                <div className="product-image">
                  <NavLink to={`/products/${item.id}`} className="image">
                    <img className="pic-1" src={item.image} />
                    <img className="pic-2" src={item.image} />
                  </NavLink>
                  <span className="product-hot-label">New</span>
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
                  <a className="add-to-cart" href="#">
                    <i className="fa fa-plus me-2"></i>Add to cart
                  </a>
                  <h3 className="title">
                    <a href="#">{item.title.substring(0, 100)}..</a>
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
          );
        })}
        <div className="row mb-5 py-5">
          <div className="col d-flex justify-content-center">
            <button className="btn btn-outline-dark">Xem thêm..</button>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProductsNew />}
        </div>
      </div>
    </div>
  );
};

export default ProductNew;
