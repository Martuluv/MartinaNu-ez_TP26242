import { Outlet } from "react-router-dom";
import { Footer } from "../componets/Footer/Footer";
import { Header } from "../componets/Header/Header";

export const PublicLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};
