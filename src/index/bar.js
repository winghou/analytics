
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
        boxShadow:'0 2px 2px #efefef',
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
        border:'1px solid rgb(63, 170, 240)',
    }
}

class Bar extends React.Component {
	constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
     onChange(date, dateString) {
      console.log(date, dateString);
    }
    render() {
        let actCss = Object.assign({},css.item,css.itemAct);
     	return (
     		<div style={css.main}>
     			<div style={actCss}>今天</div>
                <div style={css.item}>昨天</div>
                <antd.DatePicker onChange={ this.onChange} />
     		</div>
     	)
     }
}

module.exports = Bar;