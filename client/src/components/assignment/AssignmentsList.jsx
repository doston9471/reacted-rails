import React, { useState, useEffect } from 'react'
import { API_URL } from '../../constants';

function AssignmentsList() {
  const [assignments, setAssignments] = useState([])
  const [, setLoading] = useState(true)
  const [, setError] = useState(null)

  useEffect(() => {
    async function loadAssignments() {
      try {
        const response = await fetch(`${API_URL}/assignments`)
        if (response.ok) {
          const json = await response.json()
          setAssignments(json)
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
    loadAssignments()
  }, [])
  return(
    <>
    <div>
      {assignments.map((assignment) => (
        <div key={assignment.id} className='assignment-container'>
          <h2>Months: {assignment.months}</h2>
          <h3>RND Percentage: {assignment.rnd_percentage}</h3>
          <h4>Total: {assignment.total}</h4>
          <hr />
        </div>
      ))}
    </div>
    </>
  )
}

export default AssignmentsList;