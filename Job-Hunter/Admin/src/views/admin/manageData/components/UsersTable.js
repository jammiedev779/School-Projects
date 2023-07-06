import ActionTableTemplate from "views/admin/Template/ActionTableTemplate";
import React from "react";
import ColumnType from "views/admin/Template/ColumnType";
import { useStateContext } from "context/ContextProvider";
const UsersTable = () => {
  const {users} = useStateContext();
  
  const initialRows = Object.values(users).map((user) => ({
    id: user.id,
    name: user.name,
    username:user.username,
    email: user.email,
    gender: user.gender,
  }));
      const SearchHandler=(key)=>{
        console.log(key);
      }

    if(initialRows.length == 0){
      return <div></div>
    }
    return <ActionTableTemplate tblHeader={['Full Name','Username','Email','Gender']} columnType = {[ColumnType.text,ColumnType.text,ColumnType.text,ColumnType.text]} keyPair={['name','username','email','gender']} value={initialRows} searchHandler={SearchHandler}/>
};

export default UsersTable;
