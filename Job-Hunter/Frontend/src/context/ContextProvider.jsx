import {createContext, useContext, useState} from "react";


const StateContext = createContext({
  user: null,
  token: null,
  company: null,
  accNotification: null,
  categories: null,
  job_categories: null,
  applied: null,
  allPost: null,
  allCompany: null,
  blogs: null,
  tags:null,
  numNotification: null,
  setUser: () => {},
  setCompany: () => {},
  setToken: () => {},
  setAccNotification: () => {},
  setCategories: () => {},
  setJobCategories: () => {},
  setApplied: () => {},
  setAllPost: () => {},
  setAllCompany: () => {},
  setBlogs: () => {},
  setTags: () => {},
  setNumNotification: () => {},
})

export const ContextProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [company, setCompany] = useState({});
  const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
  const [accNotification, setAccNotification] = useState([]);
  const [categories, setCategories] = useState([]);
  const [job_categories, setJobCategories] = useState([]);
  const [applied, setApplied] = useState([]);
  const [allPost, setAllPost] = useState([]);
  const [allCompany, setAllCompany] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [tags,setTags] = useState([]);
  const [numNotification,setNumNotification] = useState();

  const setToken = (token) => {
    _setToken(token)
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  }


  return (
    <StateContext.Provider value={{
      user,
      setUser,
      company,
      setCompany,
      token,
      setToken,
      accNotification,
      setAccNotification,
      categories,
      setCategories,
      job_categories,
      setJobCategories,
      applied,
      setApplied,
      allPost,
      setAllPost,
      allCompany,
      setAllCompany,
      blogs,
      setBlogs,
      tags,
      setTags,
      numNotification,
      setNumNotification,
    }}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);
