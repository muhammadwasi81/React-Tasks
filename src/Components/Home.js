import React from 'react';
import { EmployeeList } from './Employeelist';
import { Header } from './Header';

export const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <h3 className="text-center text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">
          CRUD Operation
        </h3>
        <Header />
        <EmployeeList />
      </div>
    </>
  );
};
