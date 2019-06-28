import React from 'react'
import {Row,Col,Avatar,Card,Divider,BackTop} from 'antd';
import Navbar from './../components/Navbar';
import profile from '../static/profile.jpg'
import frontEnd from '../static/frontEnd.png';
import reactMovie from '../static/react_movie-min.png';
import asilverse from '../static/asilverse.png';
const {Meta} = Card;



export default props=>{
    return(
        <>
        <BackTop />
        <Navbar />
            <Divider orientation="center">About Me</Divider>
            <Row type='flex' justify='center' style={{marginTop:'1rem'}}>
                <Col>
                <Card style={{ margin:"5px 10px" }} >
                    <Meta
                        avatar={
                        <Avatar src={profile} size={80}/>
                        }
                        title="Ravi Daleep Lamkoti"
                        description="Hey there I'm Full Stack Web Developer"
                    />
                </Card>
                </Col>
                <Divider orientation='left'>Other Projects</Divider>
                <Col style={{textAlign:"center"}}>
                    <Card
                        hoverable
                        style={{ width: 280 ,marginBottom:20}}
                        cover={<img alt="React Movie App" src={reactMovie} />}
                    >
                        <Meta title="React Movie App" description="https://hardcore-fermi-6ad7d1.netlify.com/" />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 280,marginBottom:20 }}
                        cover={<img alt="Site for Asilverse" src={asilverse} />}
                    >
                        <Meta title="Asilverse Site" description="ravencolevol.github.io/internshala" />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 280,marginBottom:20 }}
                        cover={<img alt="front End " src={frontEnd} />}
                    >
                        <Meta title="React Front End" description="https://quirky-benz-623058.netlify.com/" />
                    </Card>
                </Col>
            </Row>
        </>
    )
}