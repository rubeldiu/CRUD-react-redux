import React, { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getContact,updateContact } from '../../actions/contactAction';
import shortid from 'shortid';
import {useHistory,useParams} from 'react-router-dom';


const EditContact = () => {
    const dispatch=useDispatch();
    const contact =useSelector(state =>state.data.contact);
    let {id}=useParams();    
    let history =useHistory();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');

  

    useEffect(()=>{
        if(contact!=null){
            setName(contact.name)
            setEmail(contact.email)
            setPhone(contact.phone)
        }
        dispatch(getContact(id));
    },[contact])
    const onUpdateContact=(e)=>{
        e.preventDefault();

        const update_contact =Object.assign(contact,{name:name,phone:phone,email:email})
        dispatch(updateContact(update_contact));
        history.push("/");
    }
    return (
        <div className="card border-0 shadow">
            <div className="card-header">
                Edit a Contact
            </div>
            <div className="card-body">
                <form  onSubmit={(e)=>onUpdateContact(e)}>
                   <div className="form-group">
                       <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter your Name"/>
                   </div>
                   <div className="form-group">
                       <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" placeholder="Enter your Phone Number"/>
                   </div>
                   <div className="form-group">
                       <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter your Email Address"/>
                   </div>
                   <button className="btn btn-warning" type="submit">Edit Contact</button>
                </form>
            </div>
        </div>
    );
};

export default EditContact;