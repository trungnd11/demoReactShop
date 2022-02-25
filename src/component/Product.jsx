import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { NavLink, useParams } from "react-router-dom";
import Loading from "./Loading";
import Alert from "./Alert";
import ProductFeatured from "./ProductFeatured";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
    Alert("success", "Đã thêm vào giỏ hàng");
  };

  useEffect(() => {
    const getProductById = async () => {
      setLoading(true);
      const response = await fetch(`http://fakestoreapi.com/products/${id}`);
      setProduct(await response.clone().json());
      setLoading(false);
    };
    getProductById();
  }, []);

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 mt-5">
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "400px", height: "400px" }}
          />
        </div>
        <div className="col-md-6 mt-5">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating{product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <NavLink to="/cart" className="btn btn-outline-danger">
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
      <ProductFeatured />
    </div>
  );
};

export default Product;
