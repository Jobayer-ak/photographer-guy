import React from "react";
import Banner from "../Banner/Banner";
import Clients from "../Clients/Clients";
import Compliments from "../Compliments/Compliments";
import FollowMe from "../FollowMe/FollowMe";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <Clients></Clients>
      <Compliments></Compliments>
      <FollowMe></FollowMe>
    </div>
  );
};

export default Home;
