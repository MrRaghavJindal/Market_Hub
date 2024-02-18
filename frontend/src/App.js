import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login'
import AddProduct from './components/AddProduct'
import Product from './components/Product'
import Myproduct from './components/Myproduct'
import UpdateProduct from './components/UpdateProduct';
import Profile from './components/Profile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>

        <Route element ={<PrivateComponent/>}>
        <Route path='/' element={<Product/>}/>
        <Route path='/myproduct/' element={<Myproduct/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/update/:id' element={<UpdateProduct/>}/>
        <Route path='/profile' element={<Profile/>}/>
        </Route>

        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
