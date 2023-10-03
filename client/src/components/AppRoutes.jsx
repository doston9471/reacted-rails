import React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeesList from './employee/EmployeesList';
import ContractorsList from './contractor/ContractorsList'
import AssignmentsList from "./assignment/AssignmentsList";
import EmployeeDetails from "./employee/EmployeeDetails";
import ContractorDetails from "./contractor/ContractorDetails";

function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<EmployeesList />} />
      <Route path="/employees" element={<EmployeesList />} />
      <Route path="/employees/:id" element={<EmployeeDetails />} />
      <Route path="/contractors" element={<ContractorsList />} />
      <Route path="/contractors/:id" element={<ContractorDetails />} />
      <Route path="/assignments" element={<AssignmentsList />} />
    </Routes>
  )
}

export default AppRoutes;