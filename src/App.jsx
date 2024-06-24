import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Pricing from './pages/Pricing.jsx';
import FAQ from './pages/FAQ.jsx';
import ProductVideos from './pages/ProductVideos.jsx';
import Blogs from './pages/Blogs.jsx';

export default function App() {
  return <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/product-videos' element={<ProductVideos />} />
    </Routes>
  </BrowserRouter>
}