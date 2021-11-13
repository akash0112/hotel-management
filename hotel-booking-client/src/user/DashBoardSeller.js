import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ConnectNav from "../booking/components/ConnectNav";
import DashboardNav from "../booking/components/DashboardNav";
import { HomeOutlined } from "@ant-design/icons";
import { createConnectAccount } from "../actions/stripe";
import { toast } from "react-toastify";
const DashboardSeller = () => {
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    try {
      let res = await createConnectAccount(auth.token);
      console.log(res);
    } catch (err) {
      console.log(err);
      toast("stripe failed");
      setLoading(false);
    }
  };
  const { auth } = useSelector((state) => ({ ...state }));
  const connected = () => {
    return (
      <div className="conatiner-fluid">
        <div className="row">
          <div className="col-md-10">
            <h1>show all hotels</h1>
          </div>
          <div className="col-md-2">
            <Link to="/hotels/new" className="btn btn-primary ">
              + Add New
            </Link>
          </div>
        </div>
      </div>
    );
  };
  const notConnected = () => {
    return (
      <div className="conatiner-fluid">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="p-5 pointer">
              <HomeOutlined className="h5" />
              <h4>setup payouts to post hotel rooms</h4>
              <button
                disabled={loading}
                onClick={handleClick}
                className="btn btn-primary mb-3"
              >
                {loading ? "Processing..." : "Setup Payout"}
              </button>
              <p className="text-muted">
                <small>you will be directing on boarding process</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
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
      {auth &&
      auth.user &&
      auth.user.stripe_seller &&
      auth.user.stripe_seller.charges_enabled
        ? connected()
        : notConnected()}
    </>
  );
};

export default DashboardSeller;
