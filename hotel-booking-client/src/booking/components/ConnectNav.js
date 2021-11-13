import { Card, Avatar } from "antd";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
const { Meta } = Card;
const ConnectNav = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { user } = auth;
  return (
    <div className="d-flex justify-content-around">
      <Card>
        <Meta
          avatar={user.name[0]}
          title={user.name}
          description={`joined ${moment(user.cratedAt).fromNow()}`}
        />
      </Card>
      {auth && auth.user && auth.user.stripe_seller && auth.user.stripe_seller.charges_enabled &&(
      <>
      <div>Pending Balance</div>
      <div>Pending settings</div>
      </>)}
    </div>
  );
};

export default ConnectNav;
