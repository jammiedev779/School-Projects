import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoMdHome,IoMdPerson,IoIosBusiness,IoIosBriefcase, IoIosChatboxes,IoMdEye } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import Widget from "components/widget/Widget";
import {useStateContext} from "../../../context/ContextProvider.jsx";
import { Navigate } from "react-router-dom";
import Card from "components/card";
import NewUsersTable from "./components/NewUsersTable.js";
import NewCompaniesTable from "./components/NewCompaniesTable.js"
import NewPostsTable from "./components/NewPostsTable.js";

const Dashboard = () => {
  const {token, users,companies,posts,jobCategories, contacts } = useStateContext();
  
  if(!token){
    return <Navigate to={'/auth/sign-in'}/>
  }
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<IoMdPerson className="h-7 w-7" />}
          title={"Users"}
          subtitle={users.length}
        />
        <Widget
          icon={<IoIosBusiness className="h-6 w-6" />}
          title={"Companies"}
          subtitle={companies.length}
        />
        <Widget
          icon={<IoIosBriefcase className="h-7 w-7" />}
          title={"Posts"}
          subtitle={posts.length}
        />
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <PieChartCard />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
      <Card extra="rounded-[20px] p-3">
          <NewUsersTable/>
      </Card>
      <Card extra="rounded-[20px] p-3">
          <NewCompaniesTable/>
      </Card>
      <Card extra="rounded-[20px] p-3">
          <NewPostsTable/>
      </Card>
      </div>
    </div>
  );
};

export default Dashboard;
