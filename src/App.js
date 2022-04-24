import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/addUser/AddUser';
import Home from './components/home/Home';
import UpdateUser from './components/updateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user/add'element={<AddUser/>}/>
        <Route path='/update/:id'element={<UpdateUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
