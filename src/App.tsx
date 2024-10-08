import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust the import path as necessary
import Home from './pages/Home'; // Adjust the import path as necessary
import About from './pages/About'; // Adjust the import path as necessary
import Contact from './pages/Contact'; // Adjust the import path as necessary
import Login from './pages/Login'; // Adjust the import path as necessary
import SignUp from './pages/Signup'; // Adjust the import path as necessary

// Mock function to check if the user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem('authToken') !== null;
};

// Define the type for the PrivateRoute props
interface PrivateRouteProps {
  element: JSX.Element;
}

// PrivateRoute component
const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

// App component
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/private" element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </Router>
  );
};

export default App;