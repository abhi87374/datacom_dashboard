import React from "react";
import PageSubHeaderLeft from "./PageSubHeaderLeft";
import PageSubHeaderRight from "./PageSubHeaderRight";

const PageSubHeader = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-5">
      {/* Left Section */}
      <PageSubHeaderLeft />
      
      {/* Right Section */}
      <PageSubHeaderRight />
    </div>
  );
};

export default PageSubHeader;
