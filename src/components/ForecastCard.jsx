import React from 'react';
import {Card,Row,Col,Typography,Avatar} from 'antd';
const {Text} = Typography;

export default props => {
    return(
        <>
            <Card style={{ marginTop: 16,padding:0 }} >
                <Row >
                <Col span={6}>
                  <Avatar size={64} src={`https://openweathermap.org/img/wn/${props.iconType}@2x.png`} />
                </Col>
                <Col span={18} type='flex'>
                  <Text strong style={{fontSize:"1rem",marginLeft:15,textTransform:"capitalize"}}>
                    {props.city},{props.country}<br/>
                    <Text style={{paddingLeft:12,fontSize:14}} >{props.timeline}</Text> <br></br>
                    <Text style={{paddingLeft:12}} code>{props.temprature}°C</Text>
                  </Text>
                  <br/>
                  <Text strong style={{paddingLeft:15,textTransform:"capitalize"}}>{props.description}</Text>
                  <br></br>
                </Col>
                </Row>
              </Card>
        </>
    )
}