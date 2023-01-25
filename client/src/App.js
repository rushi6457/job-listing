import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Login from './Routes/Login';
import Signup from './Routes/Signup';
import Navbar from './Components/Navbar';
import User from './Routes/User/User';
import Admin from './Routes/Admin/Admin';
import PrivateRoute from './Routes/PrivateRoute';
import AdminJobList from './Routes/Admin/AdminJobList';
import Home from './Routes/Home';
function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/'element={<Home/>}></Route>
          <Route path='/login'element={<Login/>}></Route>
          <Route path='/signup'element={<Signup/>}></Route>
          <Route path='/admin/adminjoblist'element={<AdminJobList/>}></Route>
          <Route path='/user' element={<PrivateRoute><User/></PrivateRoute>}></Route>
          <Route path='/admin'element={<PrivateRoute><Admin/></PrivateRoute>}></Route>
        </Routes>
    </div>
  );
}

export default App;
