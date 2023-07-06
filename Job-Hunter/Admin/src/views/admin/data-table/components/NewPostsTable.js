import React from 'react';
import Avatar from "../../../../assets/img/avatars/avatar1.png"
import Card from "components/card";
import CardMenu from 'components/card/CardMenu';
import { useStateContext } from 'context/ContextProvider';

const NewPostsTable = () => {
  const {posts} = useStateContext();
  return (
    <Card extra={"w-full h-full p-4"}>
        <div class="relative flex items-center justify-between">
        <div class="text-xl font-bold text-navy-700 dark:text-white">
          New Posts
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
            posts.map(post => (

                <tr>
                  <td className="py-2">
                    <img className="w-12 h-12 rounded-full" src={Avatar} alt="Profile Picture" />
                  </td>
                  <td>
                      <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {post.job_name}
                      </p>
                  </td>
                  <td>
                      <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {post.created_at.substring(0,10)}
                      </p>
                  </td>
                </tr>
            ))

          }

          
        </tbody>
      </table>
    </div>
    </Card>
  );
};

export default NewPostsTable;
