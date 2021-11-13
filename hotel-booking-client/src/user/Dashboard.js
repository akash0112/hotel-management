import React from "react";
import { Link } from "react-router-dom";
import ConnectNav from "../booking/components/ConnectNav";
import DashboardNav from "../booking/components/DashboardNav";
const Dashboard = () => {
  return (
    <>
      <div className="container-fluid  p-5 text-center">
        <div className="rounded p-5 bg-success mb-5">
          <ConnectNav />
        </div>
      </div>
      <div className="container-fluid p-4">
        <DashboardNav />
      </div>
      <div className="conatiner-fluid">
        <div className="row">
          <div className="col-md-10">
            <h1>show all booking</h1>
          </div>
          <div className="col-md-2">
            <Link to="/" className="btn btn-primary ">
              Browse Hotels
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
