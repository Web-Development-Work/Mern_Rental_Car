import "./App.css";
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ProtectedRoute from './pages/ProtectedRoute';
import AddCar from "./pages/AddCar";
import BookingCar from "./pages/BookingCar";
import UserBookings from "./pages/UserBookings";
import EditCar from "./pages/EditCar";
import AdminHome from "./pages/AdminHome";


function App() {
  return (
    <div className="App">
      <Router>

        <Routes>

          <Route exact path="/login" element={<Login />} />

          <Route exact path="/register" element={<Register />} />

          <Route exact path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          
          <Route exact path="/addcar" element={<ProtectedRoute><AddCar/></ProtectedRoute>} />
          
          <Route exact path="/booking/:carid" element={<ProtectedRoute><BookingCar/></ProtectedRoute>} />

          <Route exact path="/userbookings" element={<ProtectedRoute><UserBookings/></ProtectedRoute>} />

          <Route exact path="/editcar/:carid" element={<ProtectedRoute><EditCar/></ProtectedRoute>} />

          <Route exact path="/admin" element={<ProtectedRoute><AdminHome/></ProtectedRoute>} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;

