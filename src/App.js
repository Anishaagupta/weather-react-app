/* eslint-disable*/
import React from 'react';
import './App.css';
import 'weather-icons/css/weather-icons.css'
import Weather from './app_component/weather.component'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.css'
import Form from './app_component/form.component'

//https://api.openweathermap.org/data/2.5/weather?q=Agra,india
const SECRET_KEY = "429736441cf3572838aa10530929f7cd"

class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
      city : undefined,
      country :undefined,
      icon:undefined,
      main:undefined,
      temp:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:"",
      humidity:undefined,
      speed:undefined,
      error:false
    }

    this.wIcon = {
      Thunderstorm : "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere:"wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }

  }
  calTemp(temperature){
    let cal = Math.floor(temperature-273.15);
    return cal
  }
  
  get_weatherIcon(icon,rangeId){

    switch(true){
      case rangeId>=200 && rangeId<=232:
        this.setState({icon: this.wIcon.Thunderstorm})
        break;
      
      case rangeId>=300 && rangeId<=321:
        this.setState({icon: this.wIcon.Drizzle})
        break;
        
      case rangeId>=500 && rangeId<=531:
        this.setState({icon: this.wIcon.Rain})
        break; 
        
      case rangeId>=600 && rangeId<=622:
        this.setState({icon: this.wIcon.Snow})
        break;

      case rangeId===800:
        this.setState({icon: this.wIcon.Clear})
        break;
        
      case rangeId>=801 && rangeId<=804:
        this.setState({icon: this.wIcon.Clouds})
        break;

      case rangeId>=701 && rangeId<=781:
        this.setState({icon: this.wIcon.Atmosphere})
        break;        
        
      default:
        this.setState({icon: this.wIcon.Clear})

    }

  }


  getWeather = async(e)=>{

    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if(city && country){
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${SECRET_KEY}`);
      const res = await api_call.json();
    console.log(res)
    this.setState(
      {
        city : `${res.name},${res.sys.country}`,
        main: res.main,
        temp: this.calTemp(res.main.temp),
        temp_max: this.calTemp(res.main.temp_min),
        temp_min: this.calTemp(res.main.temp_max),
        description: res.weather[0].description,
        humidity: res.main.humidity,
        speed: res.wind.speed,
        error:false
      }
    )

    this.get_weatherIcon(this.wIcon, res.weather[0].id)
    }
    else{
      this.setState({error:true})
    }
  }

  render(){
    return(
      <div className="App">

    <Form loadweather = {this.getWeather} error={this.state.error}/>

    <Weather city={this.state.city}
     country={this.state.country}
     temp ={this.state.temp}
     temp_max = {this.state.temp_max}
     temp_min = {this.state.temp_min} 
     description = {this.state.description}
     humidity = {this.state.humidity}
     speed = {this.state.speed}
     wIcon = {this.state.icon}
     />      
    </div>
    )
       
  }
 
}


export default App;
