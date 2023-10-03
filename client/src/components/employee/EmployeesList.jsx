import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { API_URL } from '../../constants';

function EmployeesList() {
  const [employees, setEmployees] = useState([])
  const [, setLoading] = useState(true)
  const [, setError] = useState(null)

  useEffect(() => {
    async function loadEmployees() {
      try {
        const response = await fetch(`${API_URL}/employees`)
        if (response.ok) {
          const json = await response.json()
          setEmployees(json)
        } else {
          throw response
        }
      } catch(e) {
        setError("An error occurred. Awkward...")
        console.log("An error occured.", e)
      } finally {
        setLoading(false)
      }
    }
    loadEmployees()
  }, [])
  return(
    <>
    <div>
      {employees.map((employee) => (
        <div key={employee.id} className='employee-container'>
          <h2>Name: {employee.name}</h2>
          <p>Salary: {employee.salary}</p>
          <hr />
          <Link to={`/employees/${employee.id}`}>Employee Details</Link>
        </div>
      ))}
    </div>
    </>
  )
}

export default EmployeesList;