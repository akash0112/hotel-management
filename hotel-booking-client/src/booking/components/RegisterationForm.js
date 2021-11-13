import React from "react";

const RegisterationForm = ({
  handleSubmit,
  name,
  setname,
  email,
  setemail,
  password,
  setpassword
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter the Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        ></input>
      </div>
      <div className="form-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter the Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        ></input>
      </div>
      <div className="form-group mb-4">
        <input
          type="password"
          className="form-control"
          placeholder="Enter the Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        ></input>
      </div>
      <button disabled={!name||!email||!password} className="btn btn-success text-white">Submit</button>
    </form>
  );
};

export default RegisterationForm;
