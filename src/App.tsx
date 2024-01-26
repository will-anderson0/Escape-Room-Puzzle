import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataEnter from "./components/pages/DataEnter";
import Riddle from "./components/pages/Riddle";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DataEnter />} />
          <Route path="riddle" element={<Riddle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
<div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "90vh",
            }}>
            </div>*/
