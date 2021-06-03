import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyles.js';
import Hero from './Components/Hero/Index.js';
import Products from './Components/Products/Index'
import {ProductData, productDataTwo} from './Components/Products/Data'
import Feature from './Components/Feature/Index.js';
import Footer from './Components/Footer/Index.js';



function App() {
  return (
    <Router>
      <GlobalStyle />
     <Hero />
     <Products heading='Escoge tu favorito!' data={ProductData}/>
     <Feature />
     <Products heading='Golosinas para ti!' data={productDataTwo}/>
     <Footer/>
    </Router>
  );
}

export default App;
