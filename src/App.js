import React from 'react'
import "./style/bootstrap.min.css";
import Navbar from './components/Navbar';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import { Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<EmployeeList/>} />
          <Route path="/create-employee" element={<EmployeeForm/>} />
          <Route path="/edit-employee/:id" element={<EmployeeForm/>} />
        </Routes>

      </div>
      </div>
  )
} 

export default App
