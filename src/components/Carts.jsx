import { shorten } from "../helper/function";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";
import { Button, Card, Form } from "react-bootstrap";
import { BsTrash3 } from "react-icons/bs";

const Carts = ({ cart }) => {
  console.log(cart);
  const dispatch = useDispatch();
  return (
    <Card className="mt-5 card-bg  align-items-center  justify-content-center">
     
        <Card.Img variant="top" src={cart.image} className=" h-auto w-50 rounded-4 "/>
        <Card.Title  className="text-light pt-4 ">
          {shorten(cart.title)}
        </Card.Title>
        <Card.Text  className="text-light">
          {cart.price}
        </Card.Text>
      <Form className=" mb-3">
        {cart.quantity > 1 ? (
          <Button
            sm="6"
            className=" mx-2 text-white bg-black"
            varriant="btn btn-outline-secondary "
            onClick={() => dispatch(decrease(cart))}
          >
            -
          </Button>
        ) : (
          <Button
            sm="6"
            className=" mx-2 text-white bg-black  "
            varriant="btn btn-outline-secondary "
            onClick={() => dispatch(removeItem(cart))}
          >
            <BsTrash3 />
          </Button>
        )}
       <Form.Label className=" text-white ">{cart.quantity}</Form.Label>
        <Button
          sm="6"
          className=" mx-2 text-white bg-black  "
          varriant="btn btn-outline-secondary "
          onClick={() => dispatch(increase(cart))}
        >
          +
        </Button>
      </Form>
    </Card>
  );
};

export default Carts;
