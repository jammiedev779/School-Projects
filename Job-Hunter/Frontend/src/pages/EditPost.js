import axiosClient from "../axios-client";
import { useRef, useState, useEffect} from "react";
import {useStateContext} from "../context/ContextProvider";
import {Form, Navigate, useNavigate, useParams} from "react-router-dom";
import LinearIndeterminate from "../components/MUI/LinearIndeterminate"
import TextEditor from "../components/TextEditor/TextEditor";

export default function PostJob() {
  const {user, company, token, categories, job_categories} = useStateContext();
  const {company_id} = useParams();

  const postJSON = localStorage.getItem('tempPost');
  const post = JSON.parse(postJSON);

  const [postSuccess, setPostSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //Post Request
  const titleRef = useRef();
  const roleRef = useRef();
  const descriptionRef = useRef();
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
    console.log("Saving")
    console.log(descriptionRef.current.getContent())
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
      experience: experienceRef.current.value,
      expire_at: expireRef.current.value
    }
    console.log(postPayload)
    axiosClient.put(`/post/${post.id}`, postPayload)
    .then(({data}) => {
      console.log(data.message);
      setPostSuccess(true);
      localStorage.removeItem('tempPost');
      navigate('/profile/posted');
    })
    .catch((e) => {
      console.log(e);
    });
  }

    const handleCancel = (e) => {
        e.preventDefault();
        localStorage.removeItem('tempPost');
        window.history.back();
    }

  if(company.id != company_id){
    return <Navigate to={'/notfound'}/>
  }
  if (!token) {
    return <Navigate to="/login"/>
  }
  if(Object.keys(user).length != 0){
    window.alert('Can not Access');
    return <Navigate to="/"/>
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  //console.log(post.job_description)
  return (
    <>
      {postSuccess && <LinearIndeterminate />}
      <div className="pt-24">
        <div className=" w-full bg-one lg:h-36 md:h-28 h-20 flex items-center justify-between px-10">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-white">
            Edit Job
          </h1>
        </div>

        <div className="w-2/3 mx-auto my-10 bg-gray-300 ">
          <form
            class="bg-white shadow-md border-1 border-one rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
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
                  defaultValue={post.post_name}
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  required
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
                  defaultValue={post.role}
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  required
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
              <TextEditor ref={descriptionRef} defaultValue = {post.job_description}/>
            </div>
           
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Skill requirments
              </label>

              <TextEditor ref={skillRef} defaultValue = {post.requirement}/>
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
                  defaultValue={post.experience}
                  id="countries"
                  class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
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
                  defaultValue={post.expire_at}
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="date"
                  required
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
               <TextEditor ref={benefitRef} defaultValue = {post.benefit}/>
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
                  defaultValue={post.job_category_id}
                  id="countries"
                  class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
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
                  defaultValue={post.category_id}
                  id="countries"
                  class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
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
                  defaultValue={post.salary}
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  required
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
                    defaultValue={post.hour}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Days"
                    required
                  />
                  <p className="block text-gray-700 text-sm font-bold mb-2 pt-2 ml-4 ">
                    days/week
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-6" />
            {/* Cancel btn */}
            <div className="flex justify-between">
                <button
                onClick={handleCancel}
                className="w-1/3 py-2 rounded bg-gray-200 text-one"
                >
                Cancel
                </button>
                {/* Save btn */}
                <button
                className="w-1/3 py-2 rounded bg-one text-white"
                type="submit"
                >
                Save
                </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
