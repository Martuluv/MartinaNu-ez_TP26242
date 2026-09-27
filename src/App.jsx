import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./componets/Footer/Footer";
import { Header } from "./componets/Header/Header";
import { ItemListContainer } from "./componets/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./componets/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<h1>Carrito</h1>} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          {/* opcional: filtro por categorias */}
          <Route path="/category/:category" element={<ItemListContainer />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
