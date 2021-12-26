import { Button } from "@mui/material";
import React from "react";
import Style from "./Card.module.css";

const Card = ({ temp, description, icon, setTemp }) => {
  return (
    <div className={Style.Card}>
      <h1> temp : {temp}°C</h1>
      <p>description : {description}</p>
      <img src={icon} alt="logo" />
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setTemp("");
        }}
      >
        Back
      </Button>
    </div>
  );
};

export default Card;
