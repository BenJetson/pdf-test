import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DocGenerator from "./components/DocGenerator";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Container sx={{ my: 5 }}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="docgen" element={<DocGenerator />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
