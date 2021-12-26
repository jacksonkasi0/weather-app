import React from "react";
import { Button, Input } from "@mui/material";
import Style from "./Search.module.css";

const Search = ({ input, setInput, findWeather }) => {
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className={Style.container}>
      <Input
        placeholder="Enter the city name"
        value={input}
        onChange={handleChange}
        autoFocus
        onKeyUp={(e) => e.code === "Enter" && findWeather()}
      />

      <Button variant="contained" onClick={findWeather}>
        <i className="fas fa-arrow-right fa-2x"></i>
      </Button>
    </div>
  );
};

export default Search;
