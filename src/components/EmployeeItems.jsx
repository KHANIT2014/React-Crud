import React from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteEmployee, getListOfEmployees } from '../Services/localstorage';

export const EmployeeItems = ({employee,setEmployees}) => {
  const {id,name,email,address,phone }= employee;
  const navigate = useNavigate();

  const removeEmployee =()=>{
    deleteEmployee(id);
    setEmployees(getListOfEmployees());
  }

  return (
    <tr>
    <th>{name}</th> 
    <th>{email}</th>
    <th>{address}</th>
    <th>{phone}</th>
    
    <th>
        <div className="d-flex gap-3">
            <span role="button" className='badge bg-success' onClick={()=>navigate('/edit-employee/{$id}')}>Edit</span>
            <span role="button" className='badge bg-danger'onClick={()=>removeEmployee()}>Delete</span>
            <span></span><span></span>
        </div>
    </th>
</tr>

  );
}
