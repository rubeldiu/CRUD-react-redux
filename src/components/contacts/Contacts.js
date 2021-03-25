import React ,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import Contact from "./Contact";
import {selectAllContact,clearAllContact,deleteSelectContact} from '../../actions/contactAction';

const Contacts = () => {
  const dispatch=useDispatch();
  const [selectAll,setSelectAll]=useState(false);
  const contacts = useSelector((state) => state.data.contacts);
  const selectedContacts = useSelector((state) => state.data.selectedContacts);

  useEffect(()=>{
    if(selectAll){
      dispatch(selectAllContact(contacts.map(contact => contact.id)))
    }else{
      dispatch(clearAllContact())
    }
  },[selectAll])
  console.log(contacts);
  return (
    <div>
      {
        selectedContacts.length >0 ?
          (<button className="btn btn-danger mb-3" onClick={()=>dispatch(deleteSelectContact())}> Delete All</button>)
          : null
        
      }
      <table className="table shadow">
        <thead className="bg-danger text-white">
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  name=""
                  id="selectAll"
                  className="custom-control-input"
                  value={selectAll}
                  onClick={()=>setSelectAll(!selectAll)}
                />
                <label htmlFor="selectAll" className="custom-control-label"></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(ct =>
          <Contact ct={ct} key={ct.id} selectAll={selectAll}/>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
