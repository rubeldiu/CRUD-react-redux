import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addContact } from '../../actions/contactAction';
import shortid from 'shortid';
import {useHistory} from 'react-router-dom';

const AddContact = () => {
    const dispatch=useDispatch();
    let history =useHistory();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');

    const createContact=(e)=>{
        e.preventDefault();
        //console.log(name,phone,email);
        const new_Contact ={id:shortid.generate(),name:name,email:email,phone:phone}
        dispatch(addContact(new_Contact));
        history.push("/");
    }
    return (
        <div className="card border-0 shadow">
            <div className="card-header">
                Add a Contact
            </div>
            <div className="card-body">
                <form onSubmit={(e)=>createContact(e)} >
                   <div className="form-group">
                       <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter your Name"/>
                   </div>
                   <div className="form-group">
                       <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" placeholder="Enter your Phone Number"/>
                   </div>
                   <div className="form-group">
                       <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter your Email Address"/>
                   </div>
                   <button className="btn btn-primary" type="submit">Create Contact</button>
                </form>
            </div>
        </div>
    );
};

export default AddContact;