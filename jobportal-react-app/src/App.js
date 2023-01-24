import './App.css';
import { Routes, Route} from "react-router-dom";
import Createaccount from './components/Welcome/Createaccount';
import Jobcanvas from './components/Dashboard/Jobcanvas';
import Login from './components/Welcome/Login';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <>
      <Routes>
      <Route element={<Createaccount />} path="/createaccount" />
      <Route element={<Login />} path="/" />
      <Route element={<Profile />} path="/profile" />
      <Route element={<Jobcanvas />} path="/jobcanvas" />

    </Routes>
    
    </>
    
  );
}

export default App;
