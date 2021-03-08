import React from "react";

import IndexCard from "../indexcard/indexCard.component";

import DATA from "../../data";

const Index = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row mt-4">
          {DATA.map((data) => (
            <IndexCard data={data} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
