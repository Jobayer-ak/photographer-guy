import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="container mt-5 mb-3">
      <div className="qa">
        <h4 className="text-center">
          What are the difference between "authoriazation" and "authentication"?
        </h4>
        <p className="lead">
          <span className="bg-warning fs-5 me-2">Answer: </span>
          Authentication is used to verify that users really are who they
          represent themselves to be. I mean it verifies who the user is. It is
          the first step of a good identity and access management process.
          Authentication is visible to and partially changeable by the user.
          Authorization determines what resources a user can access.
          Authorization works through settings that are the mantained and
          implemented by the organization.
        </p>
      </div>
      <div className="qa my-3">
        <h4 className="text-center">
          Why are you using `firebase`? What other options do you have to
          implement authentication?
        </h4>
        <p className="lead">
          <span className="bg-warning fs-5 me-2">Answer: </span>
          The reason is that firebase helps me to authenticate users. By using
          this i can mantain user authentication in my website. It is a third
          party authentication system and well mantained secure authentication
          system. There are few authentication platforms like firebase. Such as
          Auth0, Ory, STYTCH, Supabase, Okta PingIdentity, Keycloak etc.
        </p>
      </div>
      <div className="qa">
        <h4 className="text-center">
          What other services does "firebase" provide other than authentication?
        </h4>
        <p className="lead">
          <span className="bg-warning fs-5 me-2">Answer: </span>
          Beside providing authentication firebase also provides some extra
          facilities. It has online hosting system. If we need to solve problems
          with machine learning, we can use it from firebase. Also, pre-packaged
          solutions what helps us to save our time, storage as well as realtime
          Database.
        </p>
      </div>
    </div>
  );
};

export default Blog;
