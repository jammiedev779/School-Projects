import ActionTableTemplate from "views/admin/Template/ActionTableTemplate";
import React from "react";
import ColumnType from "views/admin/Template/ColumnType";
import { useStateContext } from "context/ContextProvider";
const CompaniesTable = () => {
  const {companies} = useStateContext();
  
  const initialRows = Object.values(companies).map((company) => ({
    id: company.id,
    name: company.name,
    email: company.email,
    location: company.location,
    website: company.website
  }));
      const SearchHandler=(key)=>{
        console.log(key);
      }

    if(initialRows.length == 0){
      return <div></div>
    }
    return <ActionTableTemplate tblHeader={['Name','Email','Location','Website']} columnType = {[ColumnType.text,ColumnType.text,ColumnType.text,ColumnType.text]} keyPair={['name','email','location','website']} value={initialRows} searchHandler={SearchHandler}/>
};

export default CompaniesTable;
