import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import DataEnter from "./components/pages/DataEnter";
import Riddle from "./components/pages/Riddle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<DataEnter />} />
          <Route path="riddle" element={<Riddle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
