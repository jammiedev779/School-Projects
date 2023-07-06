import { useRef, useState } from "react";
import { Form, Link, Navigate } from "react-router-dom";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../context/ContextProvider";
import CircularUnderLoad from "../MUI/CircularUnderLoad";
import IconLogo from '../../Image/IconLogo.png'
export default function RegisterCompanyForm({ swapper}) {

    const companyNameRef = useRef();
    const emailRef = useRef();
    const locationRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const imageRef = useRef();
    const websiteRef = useRef();
    const managerRef = useRef();

    const [isRegister, setIsRegister] = useState(false);
    const {setCompany,setToken,setUser} = useStateContext();
    const [errors, setErrors] = useState(null)
    const [redirectTo, setRedirectTo] = useState('');

    const locations = [
        'Phnom Penh','Banteay Meanchey','Battambang','Kampong Cham','Kampong Chhnang',
        'Kampong Speu','Kampong Thom','Kampot','Kandal','Kep','Koh Kong','Kratie',
        'Mondulkiri','Oddar Meanchey','Pailin','Preah Sihanouk','Preah Vihear','Prey Veng',
        'Pursat','Ratanakiri','Siem Reap','Stung Treng','Svay Rieng','Takeo','Tboung Khmum'
      ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsRegister(true)
        const payload = new FormData();
        payload.append('name',companyNameRef.current.value);
        payload.append('email',emailRef.current.value);
        payload.append('location',locationRef.current.value);
        payload.append('password',passwordRef.current.value);
        payload.append('password_confirmation',confirmPasswordRef.current.value);
        payload.append('image',imageRef.current.files[0]);
        payload.append('website',websiteRef.current.value);
        payload.append('manager',managerRef.current.value);

        axiosClient.post('/register/company',payload)
        .then(({data}) => {
            setToken(data.token)
            setCompany(data.company)
            setRedirectTo(`/`);
        })
        .catch((error) => {
            const response = error.response;
            if(response && response.status === 422){
                setErrors(response.data.errors);
                console.log(response.data.errors);
                setIsRegister(false);
                
            } else {
                setErrors(error.message);
                console.log(response.data.errors);
                setIsRegister(false);
            }
        })
        
    }


    if (redirectTo) {
        return <Navigate to={redirectTo} />;
    }

    return (
      <>
        {isRegister && <CircularUnderLoad />}
        <div className="flex flex-col border-2  rounded-lg p-6 gap-y-3 w-full text-black md:text-base sm:text-sm text-xs">
          <div onClick={swapper} className="absolute top-1 left-2 flex items-center cursor-pointer text-xs"><span className="text-2xl font-bold w-5 overflow-hidden mr-1">&larr;</span>employee</div>
          <img src={IconLogo} className="absolute w-20 h-20 top-1 right-2" />
          <div className="flex flex-col w-full justify-center text-center">
            <label className="font-bold md:text-4xl sm:text-3xl xs:text-2xl text-xl text-two">
              Register
            </label>
            <label className="opacity-30 md:text-base sm:text-sm text-xs">
              Create your account to get full access
            </label>
          </div>
          <Form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
            <div className="w-full gap-x-9 grid md:grid-cols-2 px-4 gap-y-3">
              <div className="flex flex-col">
                <label htmlFor="companyName">Company Name</label>
                <input
                  ref={companyNameRef}
                  className="border-1 px-1 outline-one text-black h-8"
                  id="companyName"
                  type="text"
                  placeholder="Company Name"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="location">Location</label>
                <select
                  ref={locationRef}
                  className="border-1 px-1 outline-one text-black h-8"
                  id="location"
                  required
                >
                  <option value="">Select Location</option>
                  {locations.map((province) => (
                    <option value={province}> {province} </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="image">Image</label>
                <input
                  ref={imageRef}
                  className="border-1 px-1 outline-one text-black h-8"
                  id="image"
                  type="file"
                  accept="image/*"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="website">Website</label>
                <input
                  ref={websiteRef}
                  className="border-1 px-1 outline-one text-black h-8"
                  id="website"
                  type="text"
                  placeholder="Website"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="manager">Manager</label>
                <input
                  ref={managerRef}
                  className="border-1 px-1 outline-one text-black h-8"
                  id="manager"
                  type="text"
                  placeholder="Manager"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email Address</label>
                <input
                  ref={emailRef}
                  className="border-1 px-1 outline-one text-black h-8"
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  ref={passwordRef}
                  className="border-1 px-1 outline-one text-black h-8"
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  ref={confirmPasswordRef}
                  className="border-1 px-1 outline-one text-black h-8"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  required
                />
              </div>
            </div>

            <div className="flex flex-row justify-between md:text-xs text-min">
              <div className="flex flex-row-reverse gap-x-1">
                <label htmlFor="keepLoggedIn">Keep Me Logged In</label>
                <input
                  name="remember"
                  className="border-1 bg-two"
                  id="keepLoggedIn"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="flex sm:flex-row flex-col justify-between mt-4 items-center gap-y-4">
              <div className="md:text-xs text-min">
                Don't have an account?
                <span>
                  <Link
                    to={"/login"}
                    className="font-bold text-one md:text-sm text-xs underline"
                  >
                    Login
                  </Link>{" "}
                  here
                </span>
              </div>
              <input
                className="w-1/3 py-1 md:px-3 sm:px-2 px-1 md:text-lg sm:text-base xs:text-sm text-xs rounded-lg text-white font-bold bg-two"
                type="submit"
                value="Register"
              />
            </div>
          </Form>
        </div>
      </>
    );
}