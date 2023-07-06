import {createContext, useContext, useState} from "react";
import axiosClient from "../axios-client";

const StateContext = createContext({
  user: null,
  token: null,
  users: null,
  companies: null,
  categories: null,
  jobCategories:null,
  contacts:null,
  tags: null,
  setUser: () => {},
  setToken: () => {},
  setUsers: () => [],
  setCompanies: () => [],
  setPosts: () => [],
  setCategories: () => [],
  setJobCategories: () => [],
  setContacts: () => [],
  setTags: () => [],
})

export const ContextProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
  const [users, setUsers] = useState([]);
  const [companies,setCompanies] = useState([]);
  const [posts,setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [jobCategories,setJobCategories] = useState([]);
  const [contacts,setContacts] = useState([]);
  const [tags,setTags] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const setToken = (token) => {
    _setToken(token)
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  }

  const requestData = () => {
    axiosClient.get('/browse')
    .then(({data}) => {
      setPosts(data.posts)
    })
    .catch(e => console.log(e));
    axiosClient.get('/adminData')
    .then(({data}) => {
      setUsers(data.users);
      setCompanies(data.companies);
      setCategories(data.categories);
      setJobCategories(data.job_categories);
      setContacts(data.contacts);
      setTags(data.tags);
      setBlogs(data.blogs)
    })


  }


  return (
    <StateContext.Provider value={{
      user,
      setUser,
      token,
      setToken,
      users,
      setUsers,
      companies,
      setCompanies,
      posts,
      setPosts,
      categories,
      setCategories,
      jobCategories,
      setJobCategories,
      contacts,
      setContacts,
      tags,
      setTags,
      blogs,
      setBlogs,
      requestData,
    }}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);
