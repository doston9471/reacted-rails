import React from "react";
import { Link } from 'react-router-dom';
function NavBar(){
  return(
    <nav>
      <Link to="/employees">Employees List</Link>
      { " | " }
      <Link to="/assignments">Assignments List</Link>
      { " | " }
      <Link to="/contractors">Contractors List</Link>
    </nav>
  )
}

export default NavBar;