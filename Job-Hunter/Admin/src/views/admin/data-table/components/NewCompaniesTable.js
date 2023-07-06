import TableTemplate from "views/admin/Template/TableTamplate";
import React from "react";
import { useStateContext } from "context/ContextProvider";

export default function StickyHeadTable() {
  const {companies} = useStateContext();

  const [value,setValue]=React.useState(companies);
  console.log("value",value);
  const SearchHandler=(key)=>{
    if(key.length === 0){
      setValue(companies);
    }else{
      const result = companies.filter(company => company.name.toLowerCase().includes(key.toLowerCase()));
      setValue(result);
    }
  }
  return <TableTemplate tblHeader={['Name','Location','Website','Email','Manager','Image']} keyPair={['name','location','website','email','manager','image']} value={value} searchHandler={SearchHandler}/>
}
