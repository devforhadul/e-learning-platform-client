import React from "react";
import microsoft from "../../assets/BrandLogo/microsoft_logo-CJCILJpU.svg";
import walmart from "../../assets/BrandLogo/walmart_logo-DFg_e5_v.svg";
import accenture from "../../assets/BrandLogo/accenture_logo-C2wm6fZ5.svg";
import adobe from "../../assets/BrandLogo/adobe_logo-C7DVnuZE.svg";
import paypal from "../../assets/BrandLogo/paypal_logo-Y0aMXISO.svg";

const CollaboratorSection = () => {
  const logos = [microsoft, walmart, accenture, adobe, paypal];

  return (
    <div className="py-10 md:py-16 lg:py-20">
      <h3 className="text-xl md:3xl mb-4 md:mb-8 font-bold text-center text-gray-700 dark:text-white ">
        Our Trusted Partners
      </h3>
      <div className="flex justify-center items-center gap-10 flex-wrap">
        {logos.map((logo, idx) => (
          <img key={idx} src={logo} alt="" className="grayscale dark:grayscale-0" />
        ))}
      </div>
    </div>
  );
};

export default CollaboratorSection;
