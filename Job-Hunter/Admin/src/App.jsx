import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "./layouts/admin";
import AuthLayout from "./layouts/auth";
import EditBlog from "views/admin/blog-resource/components/EditBlog";


const App = () => {

  return (
    <Routes>  
      <Route path="admin/*" element={<AdminLayout />}/>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
    
  );
};

export default App;
