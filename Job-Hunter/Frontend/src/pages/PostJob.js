import axiosClient from "../axios-client";
import { useRef, useState, useEffect} from "react";
import {useStateContext} from "../context/ContextProvider";
import {Form, Link, Navigate} from "react-router-dom";
import LinearIndeterminate from "../components/MUI/LinearIndeterminate"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import { Editor } from "@tinymce/tinymce-react";
import TextEditor from "../components/TextEditor/TextEditor";


export default function PostJob() {
  const {user, company, token, categories, job_categories} = useStateContext();

  const [postSuccess, setPostSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cancel, setCancel] = useState(false);
  

  //Post Request
  const titleRef = useRef();
  const roleRef = useRef();
  const descriptionRef = useRef(null);
  const skillRef = useRef();
  const benefitRef = useRef();
  const salaryRef = useRef();
  const hourRef = useRef();
  const categoryRef = useRef();
  const jobCategoryRef = useRef();
  const experienceRef = useRef();
  const expireRef = useRef();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setPostSuccess(false);
    const postPayload = {
      post_name: titleRef.current.value,
      role: roleRef.current.value,
      job_description: descriptionRef.current.getContent(),
      requirement: skillRef.current.getContent(),
      benefit: benefitRef.current.getContent(),
      salary: salaryRef.current.value,
      hour: hourRef.current.value,
      category_id: categoryRef.current.value,
      job_category_id: jobCategoryRef.current.value,  
      company_id: company.id,
      experience: experienceRef.current.value,
      expire_at: expireRef.current.value
    }
    console.log(postPayload)
    axiosClient.post('/post', postPayload)
    .then(({data}) => {
      console.log(data.message);
      setPostSuccess(true);
      window.location.reload();
    })
    .catch((e) => {
      console.log(e);
    });
  }
  const cancelHandler = ()=>{setCancel(!cancel)}
  if (!token) {
    return <Navigate to="/login"/>
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  // const editorHandler = () => { 
  //   console.log(descriptionRef.current.getContent());
  // }
  return (
    <>
      {postSuccess && <LinearIndeterminate />}
      
      <div className="pt-24 ">
        {/* Pop up: post job successfully */}
        {
          postSuccess&&
            <div className="fixed w-full h-full top-0 left-0 z-10 flex items-center justify-center">

              <div className="absolute w-full h-full top-0 left-0 bg-gray-600 opacity-70"></div>

            
              <div className="relative flex flex-col text-center items-center w-80 h-auto p-6 gap-y-2 bg-white rounded-3xl border-1 border-one shadow-lg">
                <CheckCircleIcon color = "success" style={{  fontSize: 150 }}/>
                <p className="text-2xl  font-sans font-semibold">Success</p>
                <p className="text-gray-500 ">Your job has been posted successfully!</p>
                <Link to="/" className="px-4 py-1 text-lg text-white bg-green-700 rounded-full">Ok thanks</Link>
              </div>
            
            </div>
        }

        {/* pop up:  */}
        {
          cancel&&
          <div className="fixed w-full h-full top-0 left-0 z-10 flex items-center justify-center">

          <div className="absolute w-full h-full top-0 left-0 bg-gray-600 opacity-70"></div>


            <div className="relative flex flex-col text-center items-center w-96 h-auto p-6 gap-y-2 bg-white  border-1 border-one shadow-lg">
            <FmdBadIcon color = "info" style={{  fontSize: 100 }}/>
            <p className="text-2xl  font-sans font-semibold">Are you sure?</p>
            <p className="text-gray-500 ">Make sure all information are correct!</p>
            <div className="flex w-2/3 mt-2 ml-auto justify-center gap-3">
              <button to="/" className="w-24 px-4 py-1 text-lg text-white bg-gray-500 hover:bg-gray-900" onClick={cancelHandler}>Cancel</button>
              <button to="/" className="w-24 px-4 py-1 text-lg text-white bg-one hover:bg-blue-950 " onClick={handleSubmit}>Post</button>
            </div>
            
          </div>

          </div>
        }
        
        
        
        <div className=" w-full bg-one lg:h-36 md:h-28 h-20 flex items-center justify-between px-10">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-white">
            Post Job
          </h1>
        </div>

        <div className="w-2/3 mx-auto my-10 bg-gray-300 ">
          <Form
            class="bg-white shadow-md border-1 border-one rounded px-8 pt-6 pb-8 mb-4"
            
          >

            <div class="mb-4 grid grid-cols-2 gap-6">
              <div className="col-span-1 ">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Job title
                </label>
                <input
                  ref={titleRef}
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                />
              </div>
              <div className="col-span-1 ">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Role
                </label>
                <input
                  ref={roleRef}
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                />
              </div>
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Job description
              </label>
              {/* <textarea
                ref={descriptionRef}
                rows="4"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
              /> */}
              <TextEditor ref={descriptionRef}/>
              {/* <Editor ref={descriptionRef} apiKey="vxpbg4o339okjy4cxmwcyn70n6ja0xy8s5i9hsh4jk3t05q4"/> */}
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Skill requirments
              </label>
              <TextEditor ref={skillRef}/>
            </div>
            {/* Experience Requirement and Expire data */}
            <div className="mb-4 grid grid-cols-2 gap-6 ">
              <div className="col-span-1 ">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Experience requirement
                </label>
                <select
                  ref={experienceRef}
                  id="countries"
                  class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option selected>Select one requirement</option>
                  <option value={"Internship - No experience"}>
                    Internship - No experience
                  </option>
                  <option value={"Less than 6 month"}>Less than 6 month</option>
                  <option value={"0.5 - 1 year"}>0.5 - 1 year</option>
                  <option value={"1 - 2 years"}>1 - 2 years</option>
                  <option value={"2 - 4 years"}>2 - 4 years</option>
                  <option value={"More than 4 years"}>More than 4 years</option>
                </select>
              </div>
              <div className="col-span-1">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Close Application Date
                </label>
                <input
                  ref={expireRef}
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="date"
                />
              </div>
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Benefits
              </label>
              <TextEditor ref={benefitRef}/>
            </div>

            {/* Job category & type */}
            <div className="mb-4 grid grid-cols-2 gap-6 ">
              <div className="col-span-1 ">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Job Field
                </label>
                {/* <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" /> */}
                <select
                  ref={jobCategoryRef}
                  id="countries"
                  class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option selected>Choose Job Field</option>
                  {job_categories.map((job_category) => (
                    <option key={job_category.id} value={job_category.id}>
                      {job_category.job_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-1 ">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Job Type
                </label>
                {/* <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" /> */}
                <select
                  ref={categoryRef}
                  id="countries"
                  class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Choose Job Type</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* salary & time */}
            <div className="mb-4 grid grid-cols-2 gap-6 ">
              <div className="col-span-1">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Salary
                </label>
                <input
                  ref={salaryRef}
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                />
              </div>
              <div className="col-span-1">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Work Day
                </label>
                <div className="flex m-auto">
                  <input
                    ref={hourRef}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Days"
                  />
                  <p className="block text-gray-700 text-sm font-bold mb-2 pt-2 ml-4 ">
                    days/week
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-6" />

            {/* submit btn */}
            <button
              className="w-full py-2 rounded bg-one text-white"
              onClick={cancelHandler}
              // onClick={editorHandler}
            >
              Submit
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}
