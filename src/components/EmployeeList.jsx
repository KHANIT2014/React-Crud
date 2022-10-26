import React, { useEffect,useState } from 'react';
import { getListOfEmployees } from '../Services/localstorage';
import { EmployeeItems } from './EmployeeItems'

export const EmployeeList = () => {
    const [employees,setEmployees]= useState([]);

    useEffect(()=>{
        setEmployees(getListOfEmployees());

    },[]);
  return (
    <div>
        <h1 className='my-5 text-center'>Manage Employee list</h1>

        {
            employees.length > 0 ?(
                    <div className="card bg secondry p-3">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Name </th>
                                    <th>Email</th>
                                    <th>address </th>
                                    <th>phone</th>
                                    <th>Actions</th>
                                    
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map(employee =><EmployeeItems employee={employee} key={employee.id}/>)}
                                
                            </tbody>
                        </table>
                </div>

            ):(<h3 className='text-center'>No Employee </h3> )
        }
       
    </div>
  )
}


