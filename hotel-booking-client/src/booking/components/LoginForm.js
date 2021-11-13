import React from "react";

const LoginForm = ({
  handleSubmit,
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
      <button disabled={!email||!password} className="btn btn-success text-white">Submit</button>
    </form>
  );
};

export default LoginForm;
