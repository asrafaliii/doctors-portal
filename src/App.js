import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppoint from './Pages/Dashboard/MyAppoint';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import AddDoctor from './Pages/Dashboard/AddDoctor';


function App() {
  return (
    <div className='max-w-7xl max-auto px-12'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={
        <RequireAuth>
          <Appointment />
        </RequireAuth>}/>
        <Route path="/dashboard" element={
        <RequireAuth>
          <Dashboard />
        </RequireAuth>}>
          <Route index element={<MyAppoint></MyAppoint>}></Route>
          <Route path="myreview" element={<MyReview></MyReview>}></Route>
          <Route path="myhistory" element={<MyHistory></MyHistory>}></Route>
          <Route path="users" element={<RequireAuth><Users></Users></RequireAuth>}></Route>
          <Route path="addDoctor" element={<RequireAuth><AddDoctor></AddDoctor></RequireAuth>}></Route>
        </Route>
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<SignUp />}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
