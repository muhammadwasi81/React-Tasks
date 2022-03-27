import React, { createContext, useReducer } from 'react';

import Reducer from './Reducer';

const initialState = {
  employees: [
    {
      id: 1,
      name: 'Sammy',
      location: 'Lexington',
      designation: 'Developer',
    },
    {
      id: 2,
      name: 'Arnold',
      location: 'Texas',
      designation: 'Merchant',
    },
    {
      id: 3,
      name: 'Brad',
      location: 'Clifornia',
      designation: 'Mern stack',
    },
    {
      id: 4,
      name: 'Bassir',
      location: 'Lexington',
      designation: 'Blockchain',
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function addEmployee(employee) {
    dispatch({
      type: 'ADD_EMPLOYEE',
      payload: employee,
    });
  }

  function editEmployee(employee) {
    dispatch({
      type: 'EDIT_EMPLOYEE',
      payload: employee,
    });
  }

  function removeEmployee(id) {
    dispatch({
      type: 'REMOVE_EMPLOYEE',
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        addEmployee,
        editEmployee,
        removeEmployee,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
