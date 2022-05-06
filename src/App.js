// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Global/Footer/Footer';
import Header from './components/Global/Header/Header';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home';
import ManageInventories from './components/Pages/Inventories/ManageInventories';
import Inventory from './components/Pages/Inventory/Inventory';

function App() {





  return (
    <div className="App">
      <Header></Header>
      <div className="page-body">
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/home' element={<Home></Home>} ></Route>
          <Route path='/about' element={<About></About>} ></Route>


          {/* private routes  */}
         

          <Route path='/inventory/:product_id' element={<Inventory></Inventory>} ></Route>
          <Route path='/manage-inventories' element={<ManageInventories></ManageInventories>} ></Route>

        </Routes>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
