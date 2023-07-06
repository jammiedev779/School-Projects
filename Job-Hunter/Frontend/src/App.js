import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";

import Community from "./pages/Community";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/Error";
import BrowseJob from "./pages/BrowseJob";
import JobDetail from "./pages/JobDetail";
import PostJob from "./pages/PostJob";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Resource from "./pages/Resource";
import Applied from "./components/Profile/Applied";
import Posted from "./components/Profile/Posted";
import Verify from "./pages/Verify";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resetpassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import VisitProfile from "./pages/VisitProfile";
import RegisterCompany from "./pages/RegisterCompany";
import SkillandInterest from "./pages/SkillandInterest";
import EditPost from "./pages/EditPost";
import ResourceDetails from "./pages/ResourceDetail";
import AdminRedirect from "./AdminRedirect"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'BrowseJob',
        element: <BrowseJob />
      },
      {
        path: 'JobDetail/:applied/:post_id',
        element: <JobDetail />
      },
      {
        path: 'PostJob',
        element: <PostJob />
      },
      {
        path: 'PostJob/edit/:company_id',
        element: <EditPost />
      },
      {
        path: 'Community',
        element: <Community />
      },
      {
        path: 'resource',
        element: <Resource />,
      },
      {
        path: 'verify/:aceess_token',
        element: <Verify />
      },
      {
        path: 'Notification',
        element: <Notification />
      },
      {
        path: 'visit-profile/:user_id',
        element: <VisitProfile />
      },
      {
        path: 'Profile',
        element: <Profile />,
        children: [
          {
            path: 'applied',
            element: <Applied />
          },
          {
            path: 'posted',
            element: <Posted />
          },

        ]
      },

      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'register/company',
        element: <RegisterCompany />
      },
      {
        path: 'reset_password',
        element: <Resetpassword />
      },
      {
        path: 'forgot_password',
        element: <ForgotPassword />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'skill-interested',
        element: <SkillandInterest />
      },
      {
        path: 'resource/details/:source_id',
        element: <ResourceDetails/>
      },
      {
        path: 'admin',
        element: <AdminRedirect/>
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
