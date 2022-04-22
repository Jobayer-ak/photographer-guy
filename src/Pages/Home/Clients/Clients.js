import React from "react";
import "./Clients.css";
import client1 from "../../../images/client/client1.png";
import client2 from "../../../images/client/client2.png";

const Clients = () => {
  return (
    <div className="container-fluid client-parent">
      <div className="clients container">
        <div>
          <div className="for-contact text-center p-4">
            <h4 className="text-center pb-3">Lets Work Together</h4>
            <p className="fst-italic">
              Lorem ipsum sit amet consectetur adipisicing elit. Iure laudantium
              reiciendis perspiciatis sequi libero?
            </p>
            <button className="btn btn-secondary">LET'S CHAT</button>
          </div>
        </div>
        <div className="middle-img">
          <img src={client1} className="img-fluid" alt="" />
        </div>
        <div className="last-img">
          <img src={client2} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
