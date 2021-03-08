import React from "react";

import "./indexCard.css";

import { Link } from "react-router-dom";

const IndexCard = ({ data: { cat_url, cat_name } }) => {

  return (
    <Link to={cat_url}>
      <div className="col-md-4 mb-4">
        <div className="card">
          <img src="https://w7.pngwing.com/pngs/108/860/png-transparent-weighing-scale-weight-loss-weight-scales-s-measurement-weight-management-weight.png" />
          <label>{cat_name}</label>
          {/* need to reposition the label on the pic */}
        </div>
      </div>
    </Link>
  );
};

export default IndexCard;
