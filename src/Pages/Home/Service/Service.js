import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  console.log(name);
  return <div></div>;
};

export default Service;

// <div className="container service pb-5">
//   {/* <h2 className="text-center text-white">This is Service</h2> */}
//   <div className="row gx-5 ms-3 p-0">
//     <div className="col service-1 text-center">
//       <img src={service1} alt="" />
//       <h4 className="text-white text-center">Wedding Photography</h4>
//       <p className="text-white p-2 text-center">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//         Repudiandae quis qui impedit non ad commodi numquam reiciendis et
//         odio dolorum.
//       </p>
//       <button className="btn btn-secondary w-100 text-white fs-5">
//         Booking
//       </button>
//     </div>
//     <div className="col service-2">
//       <img src={service2} alt="" />
//       <h4 className="text-white text-center">Event Photography</h4>
//       <p className="text-white p-2 text-center">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//         Repudiandae quis qui impedit non ad commodi numquam reiciendis et
//         odio dolorum.
//       </p>
//       <button className="btn btn-secondary w-100 text-white fs-5">
//         Booking
//       </button>
//     </div>
//     <div className="col service-3">
//       <img src={service3} alt="" />
//       <h4 className="text-white text-center">Birthday Photography</h4>
//       <p className="text-white p-2 text-center">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//         Repudiandae quis qui impedit non ad commodi numquam reiciendis et
//         odio dolorum.
//       </p>
//       <button className="btn btn-secondary w-100 text-white fs-5">
//         Booking
//       </button>
//     </div>
//   </div>
// </div>
