import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
let css = {
  ItemDes: {
    color: '#bbb',
    fontSize: '12px',
    textIndent: '10px',
    display: 'inline-block'
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultSelectedKeys:'',
      defaultOpenKeys:''
    }
  }
  render() {
    
    return (
      <antd.Menu
        style={{ width: 150 }}
        defaultSelectedKeys={[this.state.defaultSelectedKeys]}
        defaultOpenKeys={[this.state.defaultSelectedKeys]}
        mode="inline"
      >
        <antd.Menu.Item key="1"><antd.Icon type="profile" />概览</antd.Menu.Item>
        <antd.Menu.Item key="2"><antd.Icon type="bar-chart" />页面监控</antd.Menu.Item>
        <antd.Menu.Item key="3"><antd.Icon type="exclamation" />错误收集</antd.Menu.Item>
        <antd.Menu.Item key="4"><antd.Icon type="tool" />设置</antd.Menu.Item>

      </antd.Menu>
    )
  }
}


module.exports = Menu;