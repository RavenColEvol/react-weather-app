import React from 'react'
import Navbar from '../components/Navbar'
import {Divider,message,Row,Col,BackTop,Input} from 'antd'
import ForecastCard from '../components/ForecastCard';

const {Search} = Input
let apiKey = 'c44a7818bbbd76364cf1077977f96c4d';

export default class extends React.Component{
    state={
        city:'Mumbai',
        res:[],
        name:null,
        country:null,
    }
    getForecast=()=>{
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city.split(' ').join('+')}&appid=${apiKey}&cnt=7&units=metric`;
        fetch(url)
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                res:res['list'],
                name:res.city.name,
                country:res.city.country
            })
        })
        .catch(err=>message.error('Please check the city name'))
    }
    componentDidMount(){
        this.getForecast()
    }
    handleChange=(e)=>{
        this.setState({
            city:e.target.value,
        })
    }
    render(){
        
        const ListWeather = this.state.res.map(day=><ForecastCard key={day.dt} iconType={day.weather[0].icon} city={this.state.name} country={this.state.country} timeline={day.dt_txt} temprature={day.main.temp} description={day.weather[0].description}/>)
        return(
            <>
                <Navbar/>
                <BackTop/>
                <Divider>Weather Forecast</Divider>
                <Row justify="center" type='flex' style={{margin:"5rem 0"}}>
                    <Col>
                    <Search placeholder="Enter City Name" onChange={this.handleChange} onSearch={this.getForecast} enterButton />
    <br />
                    {ListWeather}
                    </Col>
                </Row>
            </>
        )
    }
}