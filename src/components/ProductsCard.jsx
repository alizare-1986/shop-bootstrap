import { Button, Card, Form, Modal, Row } from "react-bootstrap";
import { isInCart, quantityCount, shorten } from "../helper/function";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "../features/cart/cartSlice";
import { BsTrash3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductDetailsModal from "../page/ProductDetailsModal";

function ProductsCard({ product }) {
  const [showDetails, setShowDetails] = useState(false);
  const state = useSelector((state) => state.shopcart);
  const dispatch = useDispatch();
  const handleShowModal = () => {
    setShowDetails(true);
  };
  const handleCloseModal = () => {
    setShowDetails(false);
  };

  return (
    <Card className="mt-5 card-bg">
      <Card.Body>
        <Card className="card-bg" onClick={handleShowModal}>
        <Card.Img variant="top" src={product.image} height="350px" />
        <Card.Title align="right" className="text-light pt-4 ">
          {shorten(product.title)}
        </Card.Title>
        <Card.Text align="right" className="text-light">
          {product.price}
        </Card.Text>
</Card>
        <Form as={Row}>
          {isInCart(state, product.id) ? (
            <Row sm="6">
              <Form.Label column="true" sm="6" className="text-white">
                {quantityCount(state, product.id)}
              </Form.Label>

              {quantityCount(state, product.id) === 1 && (
                <Button
                  onClick={() => dispatch(removeItem(product))}
                  sm="6"
                  className=" mx-2 text-white bg-black  "
                  varriant="btn btn-outline-secondary "
                >
                  <BsTrash3 />
                </Button>
              )}
              {quantityCount(state, product.id) > 1 && (
                <Button
                  onClick={() => dispatch(decrease(product))}
                  sm="6"
                  className=" mx-2 text-white card-bg"
                  varriant="btn btn-outline-secondary "
                >
                  -
                </Button>
              )}
              <Button
                onClick={() => dispatch(increase(product))}
                sm="6"
                className=" mx-2 text-white card-bg"
                varriant="btn btn-outline-secondary "
              >
                +
              </Button>
            </Row>
          ) : (
            <Button
              onClick={() => dispatch(addItem(product))}
              variant="btn btn-outline-secondary"
              className="text-white"
            >
              افزودن
            </Button>
          )}
        </Form>
        <Button
            variant="btn btn-outline-secondary"
            className="text-white mt-2"
          >
            {" "}
            <Link to={`/${product.id}`}>پیج محصول</Link>
          </Button>
        <Modal
          show={showDetails}
          onHide={handleCloseModal}
          contentClassName="card-bg "
        >
          <Modal.Header closeButton closeVariant="white" dir="rtl">
            <Modal.Title>محصول</Modal.Title>
            <Modal.Body align="center">مشخصات</Modal.Body>
          </Modal.Header>
          <Modal.Body>
            <ProductDetailsModal product={product} />
          </Modal.Body>
        
        </Modal>
      </Card.Body>
    </Card>
  );
}

export default ProductsCard;
