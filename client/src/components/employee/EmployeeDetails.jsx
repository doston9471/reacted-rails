import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_URL } from '../../constants';

function EmployeeDetails() {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true)
  const [, setError] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    const fetchCurrentEmployee = async () => {
      try {
        const response = await fetch(`${API_URL}/employees/${id}`);
        if (response.ok) {
          const json = await response.json();
          setEmployee(json);
          setLoading(false)
        } else {
          throw response;
        }
      } catch(e) {
        setError("An error occurred. Awkward...")
        console.log("An error occured.", e)
      }
    };
    fetchCurrentEmployee()
  }, [id]);

  if (loading) return <h2>Loading...</h2>

  return(
    <div>
      <h1>Name: {employee["employee"].name}</h1>
      <h2>Salary: {employee["employee"].salary}</h2>
      <h2>Total: {employee["employee"].total}</h2>
      <hr />
      <h3>Assignments</h3>
      <hr />
      {employee["assignments"].map((assignment) => (
        <div key={assignment.id} className="assignment-container">
          <h4>Months: {assignment.months}</h4>
          <h5>RND Percentage: {assignment.rnd_percentage}</h5>
          <h6>Total: {assignment.total}</h6>
          <hr />
        </div>
      ))}
      <Link to="/employees"> Back to Employees List</Link>
    </div>
  )
}

export default EmployeeDetails;