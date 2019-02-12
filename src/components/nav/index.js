import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import util from '../../../api/util';

const getParam = util.getParam;
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
      defaultOpenKeys:'',
       project:getParam('project')||'activity',
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
        <antd.Menu.Item key="1"><a href={'/?project='+this.state.project}><antd.Icon type="profile" />概览</a></antd.Menu.Item>
        <antd.Menu.Item key="2"><a href={'/pages?project='+this.state.project}><antd.Icon type="bar-chart" />页面监控</a></antd.Menu.Item>
        <antd.Menu.Item key="3"><a href={'/list?project='+this.state.project}><antd.Icon type="exclamation" />错误收集</a></antd.Menu.Item>
        <antd.Menu.Item key="4"><a href={'/setting?project='+this.state.project}><antd.Icon type="tool" />设置</a></antd.Menu.Item>
      </antd.Menu>
    )
  }
}


module.exports = Menu;