import React from "react";

import "./indexCard.css";

const IndexCard = () => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src="https://w7.pngwing.com/pngs/108/860/png-transparent-weighing-scale-weight-loss-weight-scales-s-measurement-weight-management-weight.png" />
        <label>Lorem.</label> {/* need to reposition the label on the pic */}
      </div>
    </div>
  );
};

export default IndexCard;
