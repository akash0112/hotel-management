import React, { useState } from "react";
import { toast } from "react-toastify";
import { register } from "../actions/auth";
import RegisterationForm from "../booking/components/RegisterationForm";
const Register = ({history}) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    await register({name,email,password})
    toast.success("successfully registered")
    history.push("/login")
    }
    catch(err)
    {
       toast.success(err.response.data)
    }
  };
  return (
    <div className="container-fluid text-white p-5 text-center">
      <h1 className="rounded p-5 bg-success mb-5">Register</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <RegisterationForm 
            name={name} 
            setname={setname} 
            password={password}
            setpassword={setpassword}
            email={email}
            setemail={setemail}
            handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
