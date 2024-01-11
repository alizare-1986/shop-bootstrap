import { useState } from "react";
import { Button, Modal, ModalBody, Navbar as NavbarBs, NavbarText } from "react-bootstrap";
import { BsCart } from "react-icons/bs";
import ShopCart from "../page/ShopCart"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Navbar() {
  const [modal, setModal] = useState(false);
  const carts=useSelector(state=>state.shopcart)
 
  const handleShowModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };
  return (
    <>
    <NavbarBs className=" border-bottom border-secondary ">
      <NavbarBs>
        <NavbarText ><Link  className=" text-white font-monospace fs-5 m-lg-2 text-decoration-none  " to={'/'}>فروشگاه</Link></NavbarText>
      </NavbarBs>
      <NavbarBs.Collapse className=" justify-content-end ">
        <Button
          variant=" btn btn-outline-secondary"
          className=" text-white "
          onClick={handleShowModal}
        >
          <BsCart className=" mx-2 " />
          سبد خرید
        </Button>
      </NavbarBs.Collapse>
    </NavbarBs>
    <Modal show={modal} onHide={handleCloseModal} contentClassName="card-bg " >
   <Modal.Header closeButton closeVariant="white" dir="rtl">
 
      <Modal.Title>سبد خرید</Modal.Title>
      <Modal.Body>محصول</Modal.Body>
     
    </Modal.Header>
   
       <ModalBody >
        <ShopCart close={handleCloseModal} />
      </ModalBody>
   
   
      
      
      
     
   
    </Modal>
    </>
  );
}

export default Navbar;
