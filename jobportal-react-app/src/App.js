import './App.css';
import { Routes, Route } from "react-router-dom";
import Createaccount from './components/Welcome/Createaccount';
import Jobcanvas from './components/Dashboard/Jobcanvas';
import Login from './components/Welcome/Login';
import Profile from './components/Profile/Profile';
import Alljobs from './components/Jobs/Alljobs/Alljobs';
import Eligiblejobs from './components/Jobs/Eligiblejobs/Eligiblejobs';
import Shortlisted from './components/Myapplications/Shortlisted';
import Rejected from './components/Myapplications/Rejected';


function App() {
  return (
    <>
      <Routes>
        <Route element={<Createaccount />} path="/createaccount" />
        <Route element={<Login />} path="/" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<Jobcanvas />} path="/jobcanvas" />
        <Route element={<Alljobs />} path="/alljobs" />
        <Route element={<Eligiblejobs />} path="/eligiblejobs" />
        {/* <Route element={<Appliedjobs />} path="/appliedjobs" /> */}
        <Route element={<Shortlisted />} path="/shortlisted" />
        <Route element={<Rejected />} path="/rejected" />
        {/* <Route element={<Interviewing />} path="/interviewing" />
        <Route element={<Offerrecieved />} path="/offerrecieved" /> */}



      </Routes>

    </>

  );
}

export default App;
