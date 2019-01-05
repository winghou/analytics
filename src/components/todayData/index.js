import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import util from '../../../api/util';
import './index.scss';
const date = util.date;

let css = {
  TodayData: {
    padding:"20px 20px 0",
    borderBottom: '1px solid #dcdcdc',
    position:'relative'
    // boxShadow:'0 0 5px #efefef',
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
  title2:{
    lineHeight:'30px',
    color:'#3faaf0'
  },
  url:{
    lineHeight:'30px',
    color:'#3faaf0',
    marginBottom:'15px'
  },
  titleSpan:{
    display:'inline-block',
    width:'40px'
  },
  Item:{
      width:'180px',
      marginBottom:'20px'
  },
  name:{
     marginBottom:'5px'
  },
  val:{
    fontSize:'18px',
    color:'rgb(63, 170, 240)'
  },
  newPage:{
     position:'absolute',
     right:'20px',
     top:'20px',
     cursor:'pointer',
     color:"#fff"

  }
}

const today = date.formatTime();

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
         <div style={css.name} className='todayItemName'>{this.props.name}:
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
     domready:0,
     responseStart:0,
     pv:0,
     error:0
    }
    this.getData = this.getData.bind(this);
    this.getData(this.props.day,this.props.url);
  }
   getData(day,url){
        var that = this,_url=url;
        if(url == undefined){
            _url = ''
        }
        fetch('/api/getDayInfo?day='+day+'&project='+this.props.project+'&url='+_url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => response.json()).then(function(response){
            if(response.code==1){
              that.setState({
                domready:response.reslut.domready,
                responseStart:response.reslut.responseStart,
                pv:response.reslut.pv,
                error:response.reslut.error
              })
            }else{
                alert(response.msg)
            }
        });
    }
  componentWillReceiveProps(nextProps) {
       
       this.getData(nextProps.day,nextProps.url);
    }
  render() {
    let newPage = (this.props.showNwePage&&window.location.pathname!='/pagecontent')? <a  style={css.newPage} href={'/pagecontent?day='+this.props.day+'&project='+this.props.project+'&url='+this.props.url+'&title='+encodeURIComponent(this.props.title)} target="_blank" ><antd.Icon type="file-add"/></a>:'';
    let day = (this.props.day==undefined||today == this.props.day)?'今日':this.props.day+'  ' ;
    let title = (this.props.url)? <div style={css.title2}><span className='titleSpan' style={css.titleSpan}>title:</span>{this.props.title}</div>:'';
    let url = (this.props.url)? <div style={css.url}><span className='titleSpan' style={css.titleSpan}>url:</span>{this.props.url}</div>:'';
    return (
      <div style={css.TodayData}>
         <div style={css.title}>{day}数据
         {newPage}
         </div>
         {title}
         {url}
         <div style={css.main}>
            <Item name='白屏时间' val={Math.floor(this.state.responseStart) +'ms'} tips='页面的平均白屏时间' />
            <Item name='资源加载时间' val={Math.floor(this.state.domready) +'ms'} tips='页面的平均资源加载时间'/>
            <Item name='pv' val={Math.floor(this.state.pv)}/>
         {/*   <Item name='报错率' val='1/100'/>*/}
            <Item name='错误数量' val={Math.floor(this.state.error)}/>
         </div>
      </div>
    )
  }
}


module.exports = TodayData;