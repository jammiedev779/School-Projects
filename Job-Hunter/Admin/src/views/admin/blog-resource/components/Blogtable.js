import ActionTableTemplate from "./TemplateBlog";
import React from "react";
import ColumnType from "views/admin/Template/ColumnType";
import { useStateContext } from "context/ContextProvider";

const Blogtable = () => {
  const {blogs} = useStateContext();
  const initialRows = Object.values(blogs).map((blog) => ({
    id: blog.id,
    title: blog.title,
    author: blog.author,
    tag: blog.tag.tag,
    article: blog.article,
    blog: blog
  }));
      const SearchHandler=(key)=>{
        console.log(key);
      }

    if(initialRows.length == 0){
      return <div></div>
    }
    return <ActionTableTemplate tblHeader={['Title','Author','Tag','article']} columnType = {[ColumnType.text,ColumnType.text,ColumnType.text,ColumnType.text]} keyPair={['title','author','tag','article']} value={initialRows} searchHandler={SearchHandler}/>
};

export default Blogtable;
