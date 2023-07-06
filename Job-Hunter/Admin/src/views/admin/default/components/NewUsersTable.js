import React from 'react';
import Avatar from "../../../../assets/img/avatars/ImageProfile.jpg"
import Card from "components/card";
import { useStateContext } from 'context/ContextProvider';

const NewUsersTable = () => {
  const { users} = useStateContext();
  const newUsers = users.slice(-5);
  return (
    <Card extra={"w-full h-full p-4"}>
        <div class="relative flex items-center justify-between">
        <div class="text-xl font-bold text-navy-700 dark:text-white">
          New Users
        </div>
      </div>
      
    <div className="container mx-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="border-b border-gray-200 pr-32 pb-[10px] text-start dark:!border-navy-700 ">
                <div className="text-xs font-bold tracking-wide text-gray-600">Profile</div>
            </th>
            <th className="border-b border-gray-200 pr-32 pb-[10px] text-start dark:!border-navy-700 ">
                <div className="text-xs font-bold tracking-wide text-gray-600">Name</div>
            </th>
            <th className="border-b border-gray-200 pr-32 pb-[10px] text-start dark:!border-navy-700 ">
                <div className="text-xs font-bold tracking-wide text-gray-600">Joined</div>
            </th>
          </tr>
        </thead>
        
        <tbody>
          {
            newUsers.map(user => (
                <tr key={user.id}>
                  <td className="py-2">
                    {user.profile_image && <img className="w-12 h-12 rounded-full" src={`http://localhost:8000/images/profile_image/${user.profile_image}`} alt="Profile Picture" />}
                    {!user.profile_image && <img className="w-12 h-12 rounded-full" src={Avatar} alt="Profile Picture" />}
                    
                  </td>
                  <td>
                      <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {user.name}
                      </p>
                  </td>
                  <td>
                      <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {user.created_at.substring(0,10)}
                      </p>
                  </td>
              </tr>
            ))
          }


          {/* Add more rows for other users */}
        </tbody>
      </table>
    </div>
    </Card>
  );
};

export default NewUsersTable;
