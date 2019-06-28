import React from 'react'
import { Modal,Descriptions} from 'antd';

export default props =>{
    return(
        <>
            <Modal
              title={props.title}
              visible={props.modalVisible}
              onOk={props.modalToggle}
              onCancel={props.modalToggle}
            >
              <Descriptions bordered border size='middle'>
                <Descriptions.Item label='Wind'>{props.wind}</Descriptions.Item>
                <Descriptions.Item label='Pressure'>{props.pressure} hpa</Descriptions.Item>
                <Descriptions.Item label='Humidity'>{props.humidity} %</Descriptions.Item>
                <Descriptions.Item label='Geo Cordinates'>{props.coords}</Descriptions.Item>
              </Descriptions>
        </Modal>
        </>
    )
}