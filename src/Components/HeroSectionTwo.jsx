import React from "react";
import HeroImageFour from "../FigmaResources/hero-image-4.png";
import Rectangle45 from "../FigmaResources/Rectangle-45.png";
import Customers from "../FigmaResources/customers.png";
import Suppliers from "../FigmaResources/suppliers.png";
import Team from "../FigmaResources/team.png";
import Arrow from "../FigmaResources/arrow.svg";

const HeroSectionTwo = () => {
  return (
    <div className="heroSectionTwo">
      <img src={HeroImageFour} alt="four" className="heroImageFour" />
      <img src={Rectangle45} alt="rectangle45" className="rectangle45" />
      <h1 className="heroSectionTwoHeader">
        Knowing the numbers is never <em>enough</em>.
      </h1>
      <p className="heroSectionTwoBody">
        It's about understanding the opportunities and challenges behind
        <br />
        the numbers — and planning for a stronger future. What's the right
        <br />
        product selection for your customers? Which tools and information
        <br />
        could make your business even more successful? At Southern
        <br />
        Glazer's, we tailor our services for each and every one of our
        <br />
        customers. Because we know that when we come together, there's
        <br />
        always something to celebrate.
      </p>
      <img src={Customers} alt="customers" className="customers" />
      <img src={Suppliers} alt="suppliers" className="suppliers" />
      <img src={Team} alt="team" className="team" />
      <h2 className="customersHeader"> Customers </h2>
      <h2 className="suppliersHeader"> Suppliers </h2>
      <h2 className="teamHeader"> Team </h2>
      <a href="#customers" className="customersLink">
        See our portfolio <img src={Arrow} alt="arrow" />
      </a>
      <a href="#suppliers" className="suppliersLink">
        Work with us <img src={Arrow} alt="arrow" />
      </a>
      <a href="#team" className="teamLink">
        Sign in or apply <img src={Arrow} alt="arrow" />
      </a>
    </div>
  );
};

export default HeroSectionTwo;
