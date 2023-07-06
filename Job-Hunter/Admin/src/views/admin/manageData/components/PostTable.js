import ActionTableTemplate from "views/admin/Template/ActionTableTemplate";
import React from "react";
import ColumnType from "views/admin/Template/ColumnType";
import { useStateContext } from "context/ContextProvider";
const PostTable = () => {
  const {posts} = useStateContext();
  console.log(posts)
  const initialRows = Object.values(posts).map((post) => ({
    id: post.id,
    post_name: post.post_name,
    category_name: post.category_name,
    job_name: post.job_category_name,
    company_name: post.name,
  }));
      const SearchHandler=(key)=>{
        console.log(key);
      }

    if(initialRows.length == 0){
      return <div></div>
    }
    return <ActionTableTemplate tblHeader={['Post Name','Category','Job Category','Company Name']} columnType = {[ColumnType.text,ColumnType.text,ColumnType.text,ColumnType.text]} keyPair={['post_name','category_name','job_name','company_name']} value={initialRows} searchHandler={SearchHandler}/>
};

export default PostTable;
