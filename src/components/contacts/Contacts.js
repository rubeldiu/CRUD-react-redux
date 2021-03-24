import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";

const Contacts = () => {
  const contacts = useSelector((state) => state.data.contacts);
  console.log(contacts);
  return (
    <div>
      <table className="table shadow">
        <thead className="bg-danger text-white">
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="custom-control-input"
                />
                <label className="custom-control-label"></label>
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
          <Contact ct={ct} key={ct.id}/>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
