import React, { useState } from "react";
import useForm from "./useForm";

const Input = () => {
  const [inputState, handleChange] = useForm({
    email: "",
    account: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputState);
  };

  // const handleChange = (e) => {
  //   setInputState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="email" onChange={handleChange} />
        <input type="text" name="account" placeholder="account" onChange={handleChange} />
        <input type="text" name="password" placeholder="password" onChange={handleChange} />
        <input type="text" name="confirmPassword" placeholder="confirm password" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Input;
