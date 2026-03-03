import { Routes, Route } from "react-router-dom";
import Product from ".//product.jsx";
import Blog from './Blog/Blog.jsx';
import Navbar from './Navbar/Navbar.jsx';
import Home from './home/Home.jsx';



 function App() {

  return (
        <>
         
    <Routes>
         <Route path="/" element={
            <>
               <Navbar />
          <Home />
            </>
          } />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/Blog" element={<Blog />} />
    </Routes>
    </>

  );
}

export default App



