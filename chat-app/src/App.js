import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './style.scss'
import { BrowserRouter,Routes, Route } from 'react-router-dom';


function App() {
  return (
    //<Register/>
    //<Login/>
    //<Home/>

    <BrowserRouter>
      <Routes>
        <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
