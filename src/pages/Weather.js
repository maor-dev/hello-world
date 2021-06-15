

import React from 'react';
const apiKey = "29a47c04033693644e1953af6af5d8f8";

function Weather() {
  const [input, setInput] = React.useState('');
  const [wheater, setWeather] = React.useState(null);
  const onChangInput = (e) => 
  setInput(e.currentTarget.value);
  const onClickSubmitButton = async () => {
    const urlWeather = `http://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${apiKey}`
    try{
      const response = await fetch(urlWeather,{
        method: 'GET'
      } );
      const responseJson = await response.json();
      setWeather(responseJson)
      console.log(responseJson)
    }catch(error){
      console.log(error);
    }
  };

  return (
    <div>
      <div style={{display:"flex", margin:"0 auto", justifyContent:"center", paddingTop:"10rem"}}>
          <input onChange={onChangInput} type="text" id="lname" name="lname"/> 
          <button onClick={onClickSubmitButton}>Submit</button>

      </div> 
      {wheater &&
        <>
          <div style={{display:"flex", margin:"0 auto", justifyContent:"center"}}>{input}</div>
          <div style={{display:"flex", margin:"0 auto", justifyContent:"center"}}>{wheater.main.temp
          }</div>
          <div style={{display:"flex", margin:"0 auto", justifyContent:"center"}}>{wheater.weather[0].main}</div>
          <div style={{display:"flex", margin:"0 auto", justifyContent:"center"}}>Feels like {wheater.main.feels_like}</div>
        </>
      }
    </div>
    );
}

export default Weather;

