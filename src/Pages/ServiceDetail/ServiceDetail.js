import { Link, useParams } from "react-router-dom";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  return (
    <div>
      <h2 className="text-white">Welcome to detail: {serviceId}</h2>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-secondary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
