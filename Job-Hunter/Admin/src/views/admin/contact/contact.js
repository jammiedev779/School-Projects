import { useState } from "react";
import Contacttemplate from "./contacttemplate";
import { useStateContext } from "context/ContextProvider";

export default function Contact(){
    const {contacts} = useStateContext();
    console.log(contacts)
    return<>
        {contacts && contacts.map(contact => {
            const date = new Date(contact.created_at);
            const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
            return <Contacttemplate key={contact.id} name={contact.name} email={contact.email} date={formattedDate} subject={contact.subject} phone={contact.phone} message={contact.message}/>
        })}
    </>
    
}