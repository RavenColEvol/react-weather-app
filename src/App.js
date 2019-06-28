import React from 'react';
import {Row,Col,Input,Typography,Icon,message} from 'antd';
import Navbar from './components/Navbar';
import WeatherCard from './components/WeatherCard';
import DetailModal from './components/DetailModal'

const {Search} = Input;
const {Title,Text} = Typography;


/***
 * API Details
 */
let apiKey = 'c44a7818bbbd76364cf1077977f96c4d';

class App extends React.Component{
  state = {
    city:'mumbai',
    description:'',
    temprature:'',
    iconType:'',
    country:'',
    coords:'',
    wind:'',
    humidity:null,
    pressure:null,
    isSearched:true,
    isTyping:false,
    modalVisible:false
  }
  componentDidMount(){
    this.getWeather();
    
  }

  getWeather=()=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city.split(' ').join('+')}&appid=${apiKey}&units=metric`
    fetch(url)
    .then(data=>data.json())
    .then(res=>{
      
      this.setState({
        description:res.weather[0].description,
        isSearched:true,
        isTyping:false,
        temprature:res.main.temp,
        iconType:res.weather[0].icon,
        country:res.sys.country,
        wind:res.wind,
        humidity:res.main.humidity,
        pressure:res.main.pressure,
        coords:res.coord
      })
    })
    .catch(error=>{
      message.warning('Please Enter a Valid City Name')
    })
  }

  setData=(e)=>{
    this.setState({
      city:e.target.value,
      isTyping:true
    })
  }

  modalToggle=(e)=>{
    this.setState({
      modalVisible:!this.state.modalVisible,
    })
  }
  render(){
    return (
      <>
        <Navbar/>
        
        <Row style={{height:'100vh'}} type="flex" justify="center" align="middle">
          <Col span={20}>
            <Title level={3} style={{textAlign:"center"}}><Text strong><Icon type="radar-chart" /> React Weather App</Text></Title>
            <Search size='large' onChange={this.setData} onSearch={this.getWeather} placeholder="Search by city, state etc." style={{width:'100%'}} enterButton/>
            {this.state.isSearched?
              <WeatherCard  modalToggle={()=>this.modalToggle()} isTyping={this.state.isTyping} iconType={this.state.iconType} city={this.state.city} country={this.state.country} temprature={this.state.temprature} description={this.state.description}/>:''
            }
          </Col>
        </Row>

        <DetailModal 
          title={`${this.state.city}'s Weather`} 
          modalToggle={()=>this.modalToggle()} 
          modalVisible={this.state.modalVisible} 
          humidity={this.state.humidity} 
          wind={`${this.state.wind['speed']} m/s in ${this.state.wind['deg']} deg`}
          pressure={this.state.pressure} 
          coords={`lat:${this.state.coords['lat']} and long:${this.state.coords['lon']}`}
        />
      </>
    );
  }
}

export default App;
