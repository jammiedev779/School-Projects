import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import ManageData from "views/admin/manageData";
import SignIn from "views/auth/SignIn";



// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdLibraryBooks,
  MdContacts,
} from "react-icons/md";
import UsersTable from "views/admin/manageData/components/UsersTable";
import CategoriesTable from "views/admin/manageData/components/CategoriesTable";
import CompaniesTable from "views/admin/manageData/components/CompaniesTable";
import JobCategoriesTable from "views/admin/manageData/components/JobCategoriesTable";
import PostTable from "views/admin/manageData/components/PostTable";
import BlogTable from "./views/admin/blog-resource/components/Blogtable";
import Contact from "views/admin/contact/contact";
import CreateBlog from "views/admin/blog-resource/components/CreateBlog";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    component: <MainDashboard/>,
    icon: <MdHome className="h-6 w-6" />,
   
  },
  {
    name: "Manage Data",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "manage-data",
    component: <ManageData />,
    list: [
      { name: "Categories", path: "manage-data/categories", element: <CategoriesTable /> },
      { name: "Job Categories", path: "manage-data/job-categories", element: <JobCategoriesTable /> },
      { name: "Companies", path: "manage-data/companies", element: <CompaniesTable /> },
      { name: "Posts", path: "manage-data/posts", element: <PostTable /> },
      { name: "Users", path: "manage-data/users", element: <UsersTable /> },
    ],
  },
  {
    name: "Blog and Resource",
    layout: "/admin",
    path: "blog-resource",
    icon: <MdLibraryBooks className="h-6 w-6" />,
    
    list: [
      { name: "Blog Table", path: "blog-resource/index", element: <BlogTable /> },
      { name: "Create Blog", path: "blog-resource/create-blog", element: <CreateBlog /> },
    ],
    
  },
  {
    name: "Contact",
    layout: "/admin",
    path: "contact",
    icon: <MdContacts className="h-6 w-6" />,
    component:<Contact/>,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  }
];
export default routes;
