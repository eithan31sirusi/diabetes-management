import React from "react";

import IndexCard from "../indexcard/indexCard.component";

const Index = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row mt-4">
          <IndexCard />
          <IndexCard />
          <IndexCard />
          <IndexCard />
          <IndexCard />
          <IndexCard />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
