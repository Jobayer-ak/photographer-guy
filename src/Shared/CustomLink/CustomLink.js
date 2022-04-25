import React from "react";
import { Link, useLocation, useMatch, useResolvedPath } from "react-router-dom";
import "./CustomLink.css";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const location = useLocation();
  // console.log(location.pathname);
  const pathN = location.pathname;

  let customLink = {
    position: "relative",
    color: "orange",
    textDecoration: "none",
  };

  let customLinkN = {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "orange",
    },
  };

  return (
    <div>
      <Link style={match ? customLink : customLinkN} to={to} {...props}>
        {children}
      </Link>
      {/* {match && " (active)"} */}
    </div>
  );
}

export default CustomLink;
