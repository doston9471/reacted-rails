import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_URL } from '../../constants';

function ContractorDetails() {
  const [contractor, setContractor] = useState(null);
  const [loading, setLoading] = useState(true)
  const [, setError] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    const fetchCurrentContractor = async () => {
      try {
        const response = await fetch(`${API_URL}/contractors/${id}`);
        if (response.ok) {
          const json = await response.json();
          setContractor(json);
          setLoading(false)
        } else {
          throw response;
        }
      } catch(e) {
        setError("An error occurred. Awkward...")
        console.log("An error occured.", e)
      }
    };
    fetchCurrentContractor()
  }, [id]);

  if (loading) return <h2>Loading...</h2>

  return(
    <div>
      <h1>Name: {contractor["contractor"].name}</h1>
      <h2>Salary: {contractor["contractor"].salary}</h2>
      <h2>Total: {contractor["contractor"].total}</h2>
      <hr />
      <h3>Assignments</h3>
      <hr />
      {contractor["assignments"].map((assignment) => (
        <div key={assignment.id} className="assignment-container">
          <h4>Months: {assignment.months}</h4>
          <h5>RND Percentage: {assignment.rnd_percentage}</h5>
          <h6>Total: {assignment.total}</h6>
          <hr />
        </div>
      ))}
      <Link to="/contractors"> Back to Contractors List</Link>
    </div>
  )
}

export default ContractorDetails;