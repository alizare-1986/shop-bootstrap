import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Shop from "./page/Shop";
import { Provider } from "react-redux";
import store from "./app/store";
import ProductDetails from "./page/ProductDetails";
import ShopCart from "./page/ShopCart";

function App() {
  return (
    <>
      <Provider store={store}>
        <Container>
          <Navbar />
          <Routes>
            <Route index element={<Shop />} />
            <Route path="/:id" element={<ProductDetails />} />
            <Route path='/shop' element={<ShopCart/>} />
          </Routes>
        </Container>
      </Provider>
    </>
  );
}

export default App;
