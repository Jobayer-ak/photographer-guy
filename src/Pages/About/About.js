import React from "react";
import "./About.css";
import myimage from "../../images/myimg.jpg";

const About = () => {
  return (
    <div className="container about">
      <img className="img-fluid w-50" src={myimage} alt="" />
      <div className="text-white details px-2">
        <h4 className="uppercase">I am jobayer</h4>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          officia rerum suscipit laboriosam velit? Dignissimos dolor quam
          tempore, delectus dolorum sint blanditiis est doloremque alias magni
          accusantium temporibus facere beatae repudiandae sapiente quasi,
          laboriosam debitis veritatis corrupti repellat exercitationem eaque
          assumenda rem! Quo autem sit quibusdam, cum aliquid nulla laborum
          doloremque magnam, perferendis nam ullam voluptate quia omnis quaerat
          voluptatibus adipisci expedita impedit, modi amet dolores repellendus
          suscipit earum distinctio. Natus, beatae quo consequatur sint
          blanditiis nobis et corrupti eius sequi ut id quia repellat assumenda
          voluptates eos culpa error quod reprehenderit reiciendis maiores.
          Magnam provident a quos voluptate sapiente?
        </p>
      </div>
    </div>
  );
};

export default About;
