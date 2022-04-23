import React from "react";
import Banner from "../Banner/Banner";
import Clients from "../Clients/Clients";
import Compliments from "../Compliments/Compliments";
import FollowMe from "../FollowMe/FollowMe";
import Service from "../Service/Service";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Clients></Clients>
      <Compliments></Compliments>
      <FollowMe></FollowMe>
    </div>
  );
};

export default Home;
