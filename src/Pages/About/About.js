import React from "react";
import "./About.css";
import myimage from "../../images/myimg.jpg";

const About = () => {
  return (
    <div className="container about">
      <img className="img-fluid w-50" src={myimage} alt="" />
      <div className="text-white details px-2">
        <h4 className="uppercase">Hi,</h4>
        <p className="lead">
          I am Jobayer. I am a student. I have been learning web development for
          5 months. I have made decision that i will be a web developer. This is
          my only hope. Even i have studied diploma in Textile Engineerin but i
          love to do coding. Technology specially computer programming always
          attracts me to play with it. It was really hard to change career path
          as a textitle engineering field to computer science. But i am
          determined and devoted that i have to be web developer. It is only
          hope and dream.
        </p>
      </div>
    </div>
  );
};

export default About;
