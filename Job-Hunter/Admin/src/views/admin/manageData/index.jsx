import React from 'react'
import JobCategoriesTable from './components/JobCategoriesTable'
import CategoriesTable from './components/CategoriesTable'
import UsersTable from './components/UsersTable'
import CompaniesTable from './components/CompaniesTable'
import PostTable from './components/PostTable'
import {useStateContext} from "../../../context/ContextProvider.jsx";
import { Navigate } from "react-router-dom";

export default function Table() {
  const {token} = useStateContext();
  if(!token){
    return <Navigate to={'/auth/sign-in'}/>
  }
  return (
        <div>
          <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
            <JobCategoriesTable />
          </div>
          <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
            <UsersTable/>
            <CompaniesTable/>
          </div>
          <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
            <PostTable/>
          </div>
          <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
          <CategoriesTable/>
          
          </div>
        </div>
  )
}
