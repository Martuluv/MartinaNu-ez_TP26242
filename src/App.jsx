import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { ItemListContainer } from "./componets/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./componets/ItemDetailContainer/ItemDetailContainer";
import { CartView } from "./componets/Cart/CartView";
import { ProductFormContainer } from "./componets/adminComponets/ProductForm/ProductFormContainer";

import { ProtectedRoute } from "./componets/ProtectedRoute/ProtectedRoute";

import { Dashboard } from "./componets/adminComponets/Dashboard/Dashboard";

import { ProductSuccess } from "./componets/adminComponets/ProductSuccess";
import { Login } from "./componets/Login/Login";
import { AdminLayout } from "./layouts/AdminLayout";
import { PublicLayout } from "./layouts/PublicLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
        </Route>
        {/*importar el componente de login para el admin*/}
        <Route path="/admin/login" element={<Login />} />

        {/* -----------------------------ADMIN--------------------------- */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* RUTAS ADMIN */}
          <Route index element={<Navigate to="/admin/Dashboard" replace />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="products/new" element={<ProductFormContainer />} />
          <Route path="products/success/:id" element={<ProductSuccess />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
