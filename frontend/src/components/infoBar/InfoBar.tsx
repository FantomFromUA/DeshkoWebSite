import { Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import "./infoBar.css";

const InfoBar = () => {
  return (
    <div className="info-container">
      <Link to="/" className="info-link info-link-no-hover">
        <Typography variant="h5" sx={{ fontWeight: "500" }}>
          Deshko Company |
        </Typography>
      </Link>
      <Link to="/about" className="info-link">
        <Typography variant="h6">Про нас</Typography>
      </Link>
      <Link to="/faq" className="info-link">
        <Typography variant="h6">FAQ</Typography>
      </Link>
    </div>
  );
};

export default InfoBar;
