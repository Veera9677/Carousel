import { BrowserRouter, Routes, Route } from "react-router-dom";
import Photos from "./components/Photos";
import Photos2 from "./components/Photos2";
import Layout from "./components/Layout";
import NoPage from "./components/Nopage";
import Home from "./components/Home";
import Contact from "./components/Contact";
import './index.css'

export default function App() {
  return ( 
  <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/photos2" element={<Photos2 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}