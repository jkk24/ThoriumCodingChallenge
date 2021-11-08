import React from "react";
import HeroImageOne from "../FigmaResources/hero-image-1.png";
import HeroImageTwo from "../FigmaResources/hero-image-2.png";
import HeroImageThree from "../FigmaResources/hero-image-3.png";

const HeroSectionOne = () => {
  return (
    <div className="heroSectionOne">
      <h1 className="heroSectionOneHeader">
        To bringing people <em>together</em>.
      </h1>
      <p className="heroSectionOneBody">
        Lorem Ipsum is simply dummy text of the printing and
        <br />
        typesetting industry. Lorem Ipsum has been the industry's
        <br />
        standard dummy text ever since the 1500s, when an
        <br />
        unknown printer took a galley of type and scrambled it to
        <br />
        make a type specimen book.
      </p>
      <br />
      <button type="submit" className="heroSectionOneButton" />
      <img src={HeroImageOne} alt="one" className="heroImageOne" />
      <img src={HeroImageTwo} alt="two" className="heroImageTwo" />
      <img src={HeroImageThree} alt="three" className="heroImageThree" />
    </div>
  );
};

export default HeroSectionOne;
