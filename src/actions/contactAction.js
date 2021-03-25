import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_SELECTED_CONTACT
} from "../constants/type";
//actions
export const addContact = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: contact,
  };
};

//get a contact rxa
export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id,
});
//Update Contact
export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

//Delete a Contact
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

//Select all Contact
export const selectAllContact = (id) => ({
  type: SELECT_CONTACT,
  payload: id,
});

//Clear Selected Contacts

export const clearAllContact = () => ({
  type: CLEAR_CONTACT,
});

//Delete Selected Contact

export const deleteSelectContact = () => ({
  type: DELETE_SELECTED_CONTACT,
  
});
