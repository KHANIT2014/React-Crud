import React from 'react'

const EmployeeList = () => {
  return (
    <div>
        <h1 className='my-5 text-center'>Manage Employee list</h1>
        <div className="card bg secondry p-3">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name Abc</th>
                        <th>Email@son.com</th>
                        <th>address Mumbai</th>
                        <th>12345678</th>
                        
                        <th>
                            <div className="d-flex gap-3">
                                <span role="button" className='badge bg-success'>Edit</span>
                                <span role="button" className='badge bg-danger'>Delete</span>
                                <span></span><span></span>
                            </div>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
  )
}

export default EmployeeList