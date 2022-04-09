import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FancyReport from "./components/FancyReport";
import Home from "./components/Home";
import MyReport from "./components/MyReport";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Container sx={{ my: 5 }}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="mine" element={<MyReport />} />
        <Route path="fancy" element={<FancyReport />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
