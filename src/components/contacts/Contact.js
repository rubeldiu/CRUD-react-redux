import React from 'react';
import Avatar from 'react-avatar';
const Contact = ({ct}) => {
    const {name,phone,email}=ct;
    return (
       
             <tr>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="custom-control-input"
                  />
                  <label className="custom-control-label"></label>
                </div>
              </td>
              <td><Avatar name={name} size="45" round={true} className="mr-2"/>{name}</td>
              <td>{phone}</td>
              <td>{email}</td>
              <td className="actions">
                  <a href="">
                  <span className="material-icons mr-2 ">edit</span>
                  </a>
                  <a href="">
                  <span className="material-icons mr-2 text-danger">remove_circle</span>
                  </a>
              </td>
            </tr>
            
       
    );
};

export default Contact;