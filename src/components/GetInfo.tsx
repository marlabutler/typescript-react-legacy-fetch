import React from "react";

var position: object;
var coords: string;
const apiKey: string = 'd8ee7f7512aa84c1f319e4a9b36b15c6';

class GetInfo extends React.Component <{}, {latitude: string, longitude: string}>{
    constructor(props: {}){
        super(props)
        this.state = {
            latitude: '',
            longitude: ''
        }
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(function(position){
        console.log(position.coords)
        })
        this.updateCoords()
        this.fetchWeather()
    }

    async updateCoords(){
            this.setState({
                    latitude: await position.coords.latitude,
                    longitude: await position.coords.longitude
                });
    }

    fetchWeather(){
        fetch(`api.openweathermap.org/data/2.5/weather?lat=${this.latitude}}&lon=${this.longitude}&appid=${apiKey}`)
            .then(res => res.json())
            .then(res => this.displayWeather)
    }

    displayWeather(){

    }
    
    render(){
        return(
            <div>My Current Weather</div>
        )
    }
}

export default GetInfo;