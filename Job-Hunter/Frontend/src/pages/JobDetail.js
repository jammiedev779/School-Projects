import Ezecom from "../Image/ezecomlogo.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axiosClient from "../axios-client";
import {useEffect, useState} from "react";
import LinearIndeterminate from "../components/MUI/LinearIndeterminate"
import parse from 'html-react-parser'
import { useNavigate} from "react-router-dom";

import JobDetailPopUp from "../components/UI/JobDetailPopUp";
import { Alert } from "@mui/material";
import ModalEmployee from "../components/UI/ModalEmployee";
import { useStateContext } from "../context/ContextProvider";


export default function Contact() {
  const { applied } = useParams();
  const {user} = useStateContext();
  const [loading,setLoading] = useState(false);

  const temJobJSON = localStorage.getItem('tempJob');
  const temJob = JSON.parse(temJobJSON);

  const [showPopUp, setShowPopUp] = useState(false);
  const handleOnClose = () => setShowPopUp(false);
  const [showMyModal, setShowMymodal] = useState(false)
  const handleOnClose2 = () => setShowMymodal(false)
  const [apply, setApply] = useState(applied == 'true');
  const navigate = useNavigate();

    const handleApply = (e) => {
      e.preventDefault();
      if(Object.keys(user).length === 0){
          setShowMymodal(true)
      }else{
          if(!user.CV){
            window.alert('CV is required');
          }else{
            const applyPayload = new FormData();
            applyPayload.append('user_id',user.id);
            applyPayload.append('post_id',temJob.id);

            axiosClient.post('/apply',applyPayload)
            .then(({data}) => {
                console.log('apply success');
                applyPayload.append('company_id',temJob.company_id);
                applyPayload.append('title',temJob.post_name);
                applyPayload.append('body',user.name + " have applied to your Job Application.");
                applyPayload.append('CV',user.CV);
                return axiosClient.post('/companyNotification',applyPayload)
            })
            .then(({data}) => {
                console.log(data.message);
                setApply(true);
                handleOnClose();
            })
            .catch((e) => {
                console.log(e);
            })
          }
             
      } 
    };

    const handleCancel = (e) => {
      e.preventDefault();
      axiosClient.delete(`apply/${user.id}/${temJob.id}`)
      .then(() => {
          console.log('cancel successfull');
          return axiosClient.delete(`companyNotification/${temJob.id}/${user.id}`)
      })
      .then(() => {
          setApply(false);
      })
      .catch(e => console.log(e))
    }

  if(showMyModal){
    return <ModalEmployee onClose={handleOnClose2} visible={showMyModal}/>
  }
  return (
    <>
    {
      <div className="pt-24">
        
        
      {apply && <Alert severity="success"><p className="text-base">You are successfully applied for this job. We hope you get a contact from the company soon!</p></Alert>}
        
        
        <JobDetailPopUp onClose={handleOnClose} visible={showPopUp} handleApply={handleApply}/>


        <div className=" w-full bg-one lg:h-36 md:h-28 h-20 flex items-center justify-between px-10">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-white">
            {temJob.post_name}
          </h1>
        </div>
        
        <div className="pt-4 pl-7">
          <button className='text-black hover:text-one text-lg' onClick={() =>{localStorage.removeItem('tempJob'); navigate(-1)}}><ArrowBackIcon/> Back</button>
        </div>
        

        <div className="mx-auto px-6 py-10 grid grid-cols-3">
          <div className="col-span-2 mx-4 px-6 py-4 border-1 border-one ">
            <h1 className="text-xl font-bold text-one">Description</h1>
            <div className="mt-2 text-lg text-gray-500 overflow-x-hidden break-words">
                {parse(temJob.job_description)}
            </div>

            <h1 className="mt-6 text-xl font-bold text-one">Role</h1>
            <p className="mt-2 text-lg text-gray-500">
              {temJob.role}
            </p>

            <h1 className="mt-6 text-xl font-bold text-one">
              Skill requirements
            </h1>
            <p className="mt-2 text-lg text-gray-500">
              {parse(temJob.requirement)}
            </p>

            <h1 className="mt-6 font-bold text-xl text-one">Benefits</h1>
            <p className="mt-2 text-lg text-gray-500">
              {parse(temJob.benefit)}
            </p>
            {!apply && <button onClick={() => setShowPopUp(true)} className="w-full my-4 py-1 bg-one border-1 border-one rounded-lg text-xl font-bold text-white  hover:bg-white hover:text-one">Apply</button>}
            {apply && <button onClick={handleCancel} className="w-full my-4 py-1 bg-one border-1 border-one rounded-lg text-xl font-bold text-white  hover:bg-white hover:text-one">Cancel</button>}
          </div>

          {/* About company & summary */}
          <div className="mx-4 px-6 py-4 border-1 border-one">
            <p className="mb-2 font-bold text-xl text-one">About company</p>

            <img className="w-44 my-8" src={"http://localhost:8000/images/company/"+ temJob.image} alt="" />

            <p className="font-semibold text-lg text-one">{temJob.name}</p>

            <div className="flex ">
              <p className="text-lg text-gray-500">Website:</p>
              <p className="pl-2 text-lg text-one">{temJob.website}</p>
            </div>

            <p className="mt-7 mb-2 font-bold text-xl text-one">Job summary </p>

            <div className="flex ">
              <p className="text-lg text-gray-500">Location:</p>
              <p className="pl-2 text-lg text-one">{temJob.location}</p>
            </div>
            <div className="flex ">
              <p className="text-lg text-gray-500">Job type:</p>
              <p className="pl-2 text-lg text-one">{temJob.category_name}</p>
            </div>
            <div className="flex ">
              <p className="text-lg text-gray-500">Job field:</p>
              <p className="pl-2 text-lg text-one">{temJob.job_category_name}</p>
            </div>
            <div className="flex ">
              <p className="text-lg text-gray-500">Work time:</p>
              <p className="pl-2 text-lg text-one">{temJob.hour} days/week</p>
            </div>
            <div className="flex ">
              <p className="text-lg text-gray-500">Salary:</p>
              <p className="pl-2 text-lg text-one">{temJob.salary}</p>
            </div>

            <div>
              <iframe
                className="mt-7 w-full h-48"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15630.330664402816!2d104.90139573812485!3d11.653058632854142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109516bdea989b3%3A0x372d2c5e0e14b706!2sCambodia%20Academy%20of%20Digital%20Technology!5e0!3m2!1sen!2skh!4v1684295643742!5m2!1sen!2skh"
                allowfullscreen=""
                loading="lazy"
                title="map"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  );
}
