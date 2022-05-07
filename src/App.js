// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Global/Footer/Footer';
import Header from './components/Global/Header/Header';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home';
import ManageInventories from './components/Pages/Inventories/ManageInventories';
import Inventory from './components/Pages/Inventory/Inventory';
import Myproducts from './components/Pages/Inventories/Myproducts';
import Addproduct from './components/Pages/Inventories/Addproduct';
import Blog from './components/Pages/Blog/Blog';
import Register from './components/Pages/Auth/Register';
import Login from './components/Pages/Auth/Login';
import ForgotPassword from './components/Pages/Auth/ForgotPassword';
import RequireAuth from './components/Utilities/RequireAuth';
import Notfound from './components/Pages/Notfound/Notfound';

function App() {


  return (
    <div className="App">
      <Header></Header>
      <div className="page-body">
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/home' element={<Home></Home>} ></Route>
          <Route path='/about' element={<About></About>} ></Route>
          <Route path='/blog' element={<Blog></Blog>} ></Route>


          {/* Logins  */}
          <Route path='/login' element={<Login></Login>}  ></Route>
          <Route path='/register' element={<Register></Register>} ></Route>
          <Route path='/reset-password'element={<ForgotPassword></ForgotPassword>} ></Route>

         {/* 404  */}
         <Route path='*' element={<Notfound></Notfound>}></Route>
        
        
          {/* private routes  */}
         

          <Route path='/inventory/:product_id' element={ <RequireAuth> <Inventory></Inventory> </RequireAuth>  } ></Route>
          <Route path='/manage-inventories' element={ <RequireAuth> <ManageInventories></ManageInventories> </RequireAuth> } ></Route>
          <Route path='/my-products' element={ <RequireAuth> <Myproducts></Myproducts></RequireAuth> } ></Route>
          <Route path='/add-products' element={ <RequireAuth>  <Addproduct></Addproduct>  </RequireAuth>} ></Route>


        </Routes>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
