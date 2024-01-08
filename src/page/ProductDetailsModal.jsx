import { Card } from "react-bootstrap";
import { shorten } from "../helper/function";

function ProductDetailsModal({ product }) {

  return (
    <Card className="mt-5 card-bg  align-items-center  justify-content-center">
      <Card.Img
        variant="top"
        src={product.image}
        className=" h-auto w-50 rounded-4 "
      />
      <Card.Title className="text-light pt-4 ">
        {shorten(product.title)}
      </Card.Title>
      <Card.Text className="text-light">{product.price}</Card.Text>
      <Card.Text className="text-light">
        <span className=" text-secondary ">category :</span>
        {product.category}
      </Card.Text>
      <Card.Text className="text-light">
        <span className=" text-secondary ">description :</span>
        {product.description}
      </Card.Text>
    </Card>
  );
}

export default ProductDetailsModal;
