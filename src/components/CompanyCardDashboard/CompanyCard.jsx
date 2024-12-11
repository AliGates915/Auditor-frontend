/* eslint-disable react/prop-types */
// import React from 'react'

import { useLocation } from "react-router-dom";

function CompanyCard() {
  const location = useLocation();
  const { companyname } = location.state || {}; // Safely access companyname

  return (
    <div className="text-black text-center p-4">
      <h1 className="text-2xl font-bold">Company Details</h1>
      <p className="text-lg mt-4">Company Name: {companyname || "No Company Name Provided"}</p>
    </div>
  );
}

export default CompanyCard;
