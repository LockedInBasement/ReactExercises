import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/Header.css'
import img1 from '../images/pic1.png';
import img2 from '../images/pic2.png';
import img3 from '../images/pic3.png';


const Header = () => {

    return (
      <> 
        <Routes>
          <Route path="/" exact element={img1} render={() => (<img src={img1} alt="city"/>)} />
          <Route path="/products" element={img2} render={() => (<img src={img1} alt="city"/>)} />
          <Route path="/contact" element={img3} render={() => (<img src={img1} alt="city"/>)} />
          <Route path="/admin" element={img3} render={() => (<img src={img1} alt="city"/>)} />
        </Routes>
      </>
      );
}
 
export default Header;