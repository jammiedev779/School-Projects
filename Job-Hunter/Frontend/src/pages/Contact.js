import IconTel from '../Image/IconTel.png'
import IconLocation from '../Image/IconLocation.png'
import IconMail from '../Image/IconMail.png'
import { useEffect, useRef } from 'react'
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client";

export default function Contact() {
    const {user} = useStateContext();
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            subject: subjectRef.current.value,
            message: messageRef.current.value
        }
        axiosClient.post('/contact',payload)
        .then(() => window.alert('Send Successful!'))
        .catch((e) => window.alert('Send Unsuccessful, try again'))
    }

    return <>
        <div className="pt-24">
            <div className=" w-full bg-one lg:h-36 md:h-28 h-20 flex items-center justify-between px-10">
                <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-white">Contact Us</h1>
            </div>


            <div className="px-6 py-10 grid lg:grid-cols-3 grid-cols-1 gap-y-3">
                <form onSubmit={handleSubmit} className="mx-6 lg:mx-3 col-span-2 px-6 py-4 border-1 border-one">
                    {/* name */}
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                    >
                        Name
                    </label>
                    <input
                    defaultValue={user.name}
                    ref={nameRef}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    />
                    {/* Email */}
                    <label
                    class="mt-4 block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                    >
                       Email address
                    </label>
                    <input
                    defaultValue={user.email}
                    ref={emailRef}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    />
                    {/* Phone */}
                    <label
                    class="mt-4 block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                    >
                       Phone number
                    </label>
                    <input
                    ref={phoneRef}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    />
                    {/* Subject */}
                    <label
                    class="mt-4 block text-gray-700 text-sm font-bold mb-2"
                    for="subject"
                    >
                       Subject
                    </label>
                    <input
                    defaultValue={user.subject}
                    ref={subjectRef}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    />
                    {/* Message */}
                    <label
                    class="mt-4 block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                    >
                    Message
                    </label>
                    <textarea
                    ref={messageRef}
                    rows="4"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    />

                    <button className="mt-4 bg-one text-white font-bold py-2 px-4 rounded-md text-base hover:bg-blue-600">Submit</button>
                </form>

                <div className="mx-6 lg:mx-3 px-6 py-4 border-1 border-one">
                    <p className="mb-4 font-bold text-xl text-one">Get in touch</p>
                    <div className="mb-2 flex gap-x-3 items-center ">
                        <img className="w-5 h-4 " src={IconMail} alt=""/>
                        <a className="text-lg text-gray-500" href="mailto:support@jobhunter.com">support@jobhunter.com</a>
                    </div>
                    <div className="mb-2 flex gap-x-3 items-center">
                        <img className="w-5 h-4 " src={IconTel} alt="" />
                        <a className="text-lg text-gray-500" href="tel:0961234567">0961234567</a>
                    </div>
                    <div className="mb-2 flex gap-x-3">
                        <img className="w-5 h-4 mt-2 " src={IconLocation} alt="" />
                        <address className="text-lg text-gray-500">St.51 Khan Boeng Keng Kang,Sangkat Boeng Keng Kang 1,Phnom Penh, Cambodia</address>
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
    </>
}