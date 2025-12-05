import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";
import { Login } from "./components/Login/Login";
import { MainLayout} from "./layouts/MainLayout";
import { AdminLayout} from "./layouts/AdminLayout";
import { Header } from "./components/Header/Header";


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          
          {/* Dejamos fuera del Routes lo que queremos que no se vuelva a renderizar al navegar */}
          <Routes>
            <Route element={<MainLayout />}>
              <Route
                path="/"
                element={<ItemListContainer titulo={"Bienvenidos a Pizzería Victoria"} />}
              />
              <Route
                path="/category/:category"
                element={<ItemListContainer titulo={"Bienvenidos a Pizzería Victoria"} />}
              />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<Cart />} />
            </Route>
            
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Login />} />
                <Route
                  path="alta-productos"
                  element={
                    <RutaProtegida>
                      <ProductFormContainer />
                    </RutaProtegida>
                  }
                />

            </Route>
          </Routes>
          {/* Dejamos fuera del Routes lo que queremos que no se vuelva a renderizar al navegar */}
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
