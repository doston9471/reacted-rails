import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { API_URL } from '../../constants';

function ContractorsList() {
  const [contractors, setContractors] = useState([])
  const [, setLoading] = useState(true)
  const [, setError] = useState(null)

  useEffect(() => {
    async function loadContractors() {
      try {
        const response = await fetch(`${API_URL}/contractors`)
        if (response.ok) {
          const json = await response.json()
          setContractors(json)
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
    loadContractors()
  }, [])
  return(
    <>
    <div>
      {contractors.map((contractor) => (
        <div key={contractor.id} className='contractor-container'>
          <h2>Name: {contractor.name}</h2>
          <p>Salary: {contractor.salary}</p>
          <hr />
          <Link to={`/contractors/${contractor.id}`}>Contractor Details</Link>
        </div>
      ))}
    </div>
    </>
  )
}

export default ContractorsList;