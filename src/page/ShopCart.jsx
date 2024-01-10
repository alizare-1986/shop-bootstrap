import { useDispatch, useSelector } from "react-redux";
import Carts from "../components/Carts";
import { clear, checkout } from "../features/cart/cartSlice";
import { Button, Card, Col,  Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShopCart = ({close}) => {
  const carts = useSelector((state) => state.shopcart.items);
  const state = useSelector((state) => state.shopcart);
  const dispatch = useDispatch();

  return (
    <Card className=" card-bg">
      {carts.map((cart) => (
        <Col key={cart.id}>
          <Carts cart={cart} />{" "}
        </Col>
      ))}

      <Card className=" card-bg mt-3">
        {state.itemscounter > 0 && (
          <Col>
            <Card.Text align="center" className=" text-white  ">
              <span>totals items :</span>
              {state.itemscounter}
            </Card.Text>
            <Card.Text align="center" className=" text-white  ">
              <span>totals price :</span>
              {state.total}
            </Card.Text>

            <Row className=" mx-2 m-1 ">
              <Button
                className=" mb-1 bg-black "
                onClick={() => dispatch(checkout())}
              >
                checkout
              </Button>
              <Button className=" bg-black " onClick={() => dispatch(clear())}>
                CLEAR
              </Button>
              <Link onClick={close} to={'/shop'}>پیج سبد خرید</Link>
            </Row>
          </Col>
        )}
        {state.checkout && (
          <Card.Text align="center" className=" text-white  ">
            خرید با موفقیت انجام شد
          </Card.Text>
        )}
        {!state.checkout && state.itemscounter === 0 && (
          <Card.Text align="center" className=" text-white  ">
            ... ادامه خرید
          </Card.Text>
        )}
      </Card>
    </Card>
  );
};

export default ShopCart;
