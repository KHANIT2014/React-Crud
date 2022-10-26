import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UseForm } from '../Hooks/UseForm';
import { addEmployee, editEmployee, getEmployeeById } from '../Services/localstorage';

const EmployeeForm = () => {
    const navigate =useNavigate();
    const {id}= useParams();
    const [showAlert,setShowAlert] =useState(false);
    const{inputVlaues,resetForm,handleInputChange}=UseForm({
        name:"",
        email:"",
        address :"",
        phone :"", 
    });
    useEffect(()=>{
        if(id){
            const employee =getEmployeeById(id);
            resetForm(employee);
        }
    },{id})

    const mySubmit=(e)=>{
        e.preventDefault();
        id ? editEmployee(id,inputVlaues) :  addEmployee(inputVlaues);
        setShowAlert(true)
        resetForm();
        setTimeout(()=>{
            setShowAlert(false)
        },2000);
        
    }

  return (
    <div>
        <div className="d-flex my-5 justify-content-between">
            <div className="btn btn-outline-secondary" onClick={()=>navigate("/")}>Back</div>
            <h1>{id ? "Edit " :"create" }Employee</h1>
        </div>

    <div className="card border-primary p-5 m-5">
        <form onSubmit={mySubmit}>
            <div className="form-group">
                <label className='form-lable mt-2' htmlFor="name">Name</label>
                <input id='name' name='name'type="text" value={inputVlaues.name} onChange={handleInputChange} className='form-control' placeholder='Enter your Name' />
            </div>
            <div className="form-group">
                <label className='form-lable mt-2' htmlFor="email">Email</label>
                <input id='email' name='email' type="email" value={inputVlaues.email} onChange={handleInputChange} className='form-control' placeholder='Enter your Name' />
            </div>
            <div className="form-group">
                <label className='form-lable mt-2' htmlFor="address">Address</label>
                <input type="text"  id='address' name='address' value={inputVlaues.address} onChange={handleInputChange}  className='form-control' placeholder='Enter your Name' />
            </div>
            <div className="form-group">
                <label className='form-lable mt-2' htmlFor="phone">Phone</label>
                <input type="text" id='phone' name='phone' value={inputVlaues.phone} onChange={handleInputChange} className='form-control' placeholder='Enter your Name' />
            </div>
            <div className="d-grid gap-2 mt-3">
                <button type='submit' className='btn btn-outline-primary '>Add Employee</button>
            </div>
        </form>
    </div>
    {
        showAlert &&(
            <div className="px-5">
                <div className="alert alert-success text-white" role="alert">
                    Well done new employee added
                </div>
            </div>
        )
    }
    </div>
  )
}

export default EmployeeForm



// <div className="form-group">
// <label className='form-lable mt-2' htmlFor="name">Name</label>
// <input id='name' name='name' value={inputVlaues.name} onChange={handleInputChange}type="text" className='form-control' placeholder='Enter your Name' />
// </div>
// <div className="form-group">
// <label className='form-lable mt-2' htmlFor="email">Email</label>
// <input id='email' name='email' type="email" value={inputVlaues.email} onChange={handleInputChange} className='form-control' placeholder='Enter your Name' />
// </div>
// <div className="form-group">
// <label className='form-lable mt-2' htmlFor="address">Address</label>
// <input type="text"  id='address' name='address' value={inputValues.address} onChange={handleInputChange} className='form-control' placeholder='Enter your Name' />
// </div>
// <div className="form-group">
// <label className='form-lable mt-2' htmlFor="phone">Phone</label>
// <input type="text" id='phone' name='phone' value={inputVlaues.phone}onChange={handleInputChange} className='form-control' placeholder='Enter your Name' />
// </div>
// <div className="d-grid gap-2 mt-3">
// <button type='submit' className='btn btn-outline-primary '>Add Employee</button>
// </div>