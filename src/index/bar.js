
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import util from '../../api/util';
const date = util.date;

let css = {
	main:{
        margin:'0px 0',
        display:'flex',
        flexDirection:'row',
        flexWrap:'nowrap',
        background:'#fff',
        padding:'0 20px',
        height:'60px',
        lineHeight:'60px',
        alignItems:'center',
        //boxShadow:'0 2px 2px #efefef',
        background:'#0470ab'
    },
    item:{
        marginRight:'20px',
        width:'70px',
        border:'1px solid #ddd',
        height:'30px',
        lineHeight:'30px',
        background:'#fff',
        textAlign:'center',
        borderRadius:'3px',
        cursor: 'pointer'
    },
    itemAct:{
        border:'1px solid #a56f29',
        background:'#fd8f00',
        color: '#fff'
    }
}
let today = date.formatTime();
class Bar extends React.Component {
	constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.changeDateToday = this.changeDateToday.bind(this);
        this.changeYesterdayDate = this.changeYesterdayDate.bind(this);
    }
     onChange(date, dateString) {
      this.props.onChangeDate(dateString);
    }
    changeDateToday(){
        this.props.onChangeDate(today);
    }
    changeYesterdayDate(){
        this.props.onChangeDate(date.getAfterDate(today,-1));
    }
    render() {
        let actCss = Object.assign({},css.item,css.itemAct);
        
     	return (
     		<div style={css.main}>
     			<div style={(this.props.day == today)?actCss:css.item} onClick={this.changeDateToday}>今天</div>
                <div style={(this.props.day == date.getAfterDate(today,-1))?actCss:css.item} onClick={this.changeYesterdayDate}>昨天</div>
                <antd.DatePicker onChange={ this.onChange} value={moment(this.props.day, 'YYYY-MM-DD')} defaultValue={moment(this.props.day, 'YYYY-MM-DD')} Value  />
     		</div>
     	)
     }
}

module.exports = Bar;