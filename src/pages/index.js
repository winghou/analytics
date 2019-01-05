
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from 'components/head';
import Nav from 'components/nav';
import Pagelist from './pagelist.js';
import Main from './main.js';
import util from '../../api/util';

import './index.scss';

import dance from './dance.gif'

const date = util.date;

let css = {
	main:{
        margin:'20px 0',
        display:'flex',
        flexDirection:'row',
        flexWrap:'nowrap',
        paddingTop:'80px',
        minWidth:'1400px'
    },
    indexMain:{
        minWidth:'700px',
        flex:1,
        padding:'0px 50px'
    },
}
 
class App extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            day:date.formatTime(),
            project:'activity',
            pageData:undefined
        }
        this.onChangeDate = this.onChangeDate.bind(this);
        this.setPageData = this.setPageData.bind(this);
         this.changePageDataData = this.changePageDataData.bind(this);
    }
    onChangeDate(day){
        this.setState({
            day:day
        })
    }
    setPageData(pageData){
        this.setState({
            pageData:pageData
        })
    }
    changePageDataData(data){
        this.setState({
            pageData:data
        })
    }
    render() {
        let main = (this.state.pageData!=undefined)?<Main day={this.state.day} project={this.state.project} pageData={this.state.pageData} />:<div style={{width:'700',textAlign:'center',marginTop:'100px'}}><img src={dance}/><p style={{fontSize:'14px',lineHeight:'50px',color:'#59839a'}}>没有数据</p></div>;
     	return (
     		<div>
     			<Header />
                <div style={css.main}>
                    <Nav/>
                    <Pagelist day={this.state.day} project={this.state.project} onChangeDate={this.onChangeDate} setPageData={this.setPageData} changePageDataData={this.changePageDataData}/>
                    <div style={{width:'1100px'}}>
                    {main}
                    </div>
                </div>
     		</div>
     	)
     }
}

ReactDOM.render(<App/>, document.getElementById('root'));
