import { Card, Col, Form, Row, TabContent } from "react-bootstrap";
import ProductsCard from "../components/ProductsCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAPi } from "../features/products/productsSlice";

function Shop() {
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAPi());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {loading ? (
        <Form
         align="center"
          className=" mt-5 p-5 "
        >
          <h1>Loading...</h1>
        </Form>
      ) : (
        <Row xs={1} xl={4} md={2} className="g-3">
         { products.map((product) => (
          <Col align="center" key={product.id}>
            <ProductsCard product={product} />
          </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default Shop;
