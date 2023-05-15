import logo from './logo.svg';
import './App.css';

// import Basic from './components/Basic';
import  NavBar  from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddBlog from './components/AddBlog';

function App() {
  return (
    <div className="App">
       <NavBar/>
       <Routes> <Route path='/' element={<Home/>}/> </Routes> <br></br> 
       <Routes>  <Route path='/add-blog' element={<AddBlog/>}/> </Routes>
      

    </div>
  );
}

export default App;
