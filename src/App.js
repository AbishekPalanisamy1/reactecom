
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './Home/Home'
import ProductScreen from './Home/ProductScreen';


function App() {
  return (
    <div className="App">


<BrowserRouter>
<Header/>

<Routes>

  <Route path='/' element={<Home/>}/>

  <Route path='product/:id' element={<ProductScreen/>}/>

  
</Routes>

     

      
    
      </BrowserRouter>
    </div>
  );
}

export default App;
