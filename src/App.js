// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Global/Footer/Footer';
import Header from './components/Global/Header/Header';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/About' element={<About></About>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
