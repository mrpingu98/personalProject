import { Routes, Route } from "react-router-dom";
import { routes } from "../Constants/Routes";
import { Merchandise } from "../Pages/Merchandise/Merchandise";

export const MerchandiseRoute: React.FC = () => {
    return (
      <Routes>
        <Route path={routes.merchandise} element={<Merchandise />} />
      </Routes>
    );
  };