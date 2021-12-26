import React, { useState } from "react";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";
import axios from "axios";
import Snowfall from "react-snowfall";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const [temp, setTemp] = useState("");

  const [description, setDescription] = useState("");

  const [icon, setIcon] = useState("");

  const findWeather = async () => {
    let Url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=18ed9304b49a8e002f660c3a960811b3&units=metric`;
    const responce = await axios.get(Url);
    const temp = await responce.data.main.temp;
    const weather = await responce.data.weather[0].description;
    const icon = `http://openweathermap.org/img/wn/${await responce.data
      .weather[0].icon}@2x.png`;

    setTemp(temp);
    setDescription(weather);
    setIcon(icon);
    setInputValue("");
  };

  return (
    <div>
      <Snowfall snowflakeCount={70} />
      {temp === "" ? (
        <Search
          input={inputValue}
          setInput={setInputValue}
          findWeather={findWeather}
        />
      ) : (
        <Card
          temp={temp}
          description={description}
          icon={icon}
          setTemp={setTemp}
        />
      )}
    </div>
  );
};

export default App;
