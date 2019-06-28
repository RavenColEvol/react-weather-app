import React from 'react';
import {Icon,Layout,Drawer,Typography} from 'antd';
import {Link} from  'react-router-dom';

const {Header} = Layout;
const {Text,Title} = Typography;

class Navbar extends React.Component{

    state = {
        collapsed:false,
    }
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    };
    
    render(){
        return(
            <>
            <Layout style={{background:'transparent',position:"fixed",width:"100%",zIndex:50}}>
                <Header style={{background:'transparent',padding:0,margin:0,textAlign:'right'}}>
                    <Icon
                    style={{margin:"1rem",fontSize:'2rem',background:'#fff',padding:5,borderRadius:2}}
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                    />
                </Header>
                <Drawer
                    
                    placement="right"
                    closable={true}
                    onClose={this.toggle}
                    visible={this.state.collapsed}
                    style={{paddingTop:0}}
                    >
                    <Title level={4} style={{padding:0,margin:0}}>React Weather</Title>

                    <div style={{marginTop:"3rem"}}>
                        <Link to="/"><Text strong style={{display:"inline-block",marginBottom:10,fontSize:"1.2rem"}}>Home</Text></Link><br></br>
                        <Link to="/forecast"><Text strong style={{display:"inline-block",marginBottom:10,fontSize:"1.2rem"}}>Forecast</Text></Link><br></br>
                        <Link to="/about"><Text strong style={{display:"inline-block",marginBottom:10,fontSize:"1.2rem"}}>About Me</Text></Link><br></br>
                    </div>
                </Drawer>
            </Layout>
            </>
        )
    }
}

export default Navbar;