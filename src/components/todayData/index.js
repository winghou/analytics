import React, { Component } from 'react';
import ReactDOM from 'react-dom';
let css = {
  TodayData: {
    padding:"20px 20px 0",
    border:'1px solid #efefef',
    boxShadow:'0 0 5px #efefef',
   // borderImage:' -webkit-linear-gradient( red, blue) 30 30'
  },
  Icon:{
    marginLeft:'5px'
  },
  fund:{
    marginRight:'5px',
  },
  title:{
    fontSize:'20px',
    marginBottom:'20px'
  },
  main:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
  },
  Item:{
      width:'180px',
      marginBottom:'20px'
  },
  name:{
    color:'#999',
     marginBottom:'5px'
  },
  val:{
    fontSize:'18px',
    color:'rgb(63, 170, 240)'
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
  render() {
    let tip = () => {
        if(this.props.tips){
          return (
            <antd.Tooltip title={this.props.tips}>
             <antd.Icon type="question-circle" style={css.Icon} />
            </antd.Tooltip>
            )
          }
    }

    return (
      <div style={css.Item}>
         <div style={css.name}>{this.props.name}:
            {tip()}
          </div>
         <div style={css.val}>{this.props.val}</div>
      </div>
    )
  }
}

class TodayData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
  render() {
    
    return (
      <div style={css.TodayData}>
         <div style={css.title}>今日数据</div>
         <div style={css.main}>
            <Item name='白屏时间' val='2s' tips='所有页面的平均白屏时间' />
            <Item name='资源加载时间' val='2.9s' tips='所有页面的平均资源加载时间'/>
            <Item name='pv' val='200'/>
            <Item name='报错率' val='1/100'/>
            <Item name='错误数量' val='39'/>
         </div>
      </div>
    )
  }
}


module.exports = TodayData;