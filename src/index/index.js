
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from 'components/head';
import Nav from 'components/nav';
import TodayData from 'components/todayData';
import LineCharts from 'components/LineCharts';
import ErrorPage from 'components/errorPage';
import SevenLineCharts from 'components/sevenLineCharts';
import SevenClien from 'components/sevenClien';
import Bar from './bar.js';

import util from '../../api/util';
const date = util.date;

let css = {
	main:{
        margin:'20px 0',
        display:'flex',
        flexDirection:'row',
        flexWrap:'nowrap',
        paddingTop:'80px'
    },
    indexMain:{
        minWidth:'1200px',
        flex:1,
        padding:'0px 50px'
    },
    daysAnalytics:{
        margin:'0px 0 20px',
        border: '1px solid #1071ad',
        boxShadow:'0 0 5px #efefef',
    },
    LineCharts:{
        
        borderRight:'1px solid #eee'
    },
    ErrorPage:{
       
        paddingLeft:'30px'
    },
    SevenLineCharts:{
         margin:'20px 0', 
        border:'1px solid #efefef',
        boxShadow:'0 0 5px #efefef',
        padding:'20px',
        display:'flex',flexDirection:'row', flexWrap:'nowrap'
    }
}
class App extends React.Component {
	constructor(props) {
        super(props);
       this.state = {
            day:date.formatTime(),
            project:'activity',
            _day:date.formatTime() //数据走势日期
        }
        this.onChangeDate = this.onChangeDate.bind(this);
    }
    onChangeDate(dateString){
        this.setState({
            _day:dateString
        })
    }
    render() {
         let c_width =(window.innerWidth-400)/2;
        c_width = (c_width<=500)?500:c_width;
     	return (
     		<div>
     			<Header />
                <div style={css.main}>
                    <Nav/>
                    <div style={css.indexMain}>
                        <div style={css.daysAnalytics}>
                            <Bar day={this.state._day} onChangeDate={this.onChangeDate}/>
                            <TodayData day={this.state._day} project={this.state.project} />
                            <div style={{padding:'20px',display:'flex',flexDirection:'row', flexWrap:'nowrap'}}>
                                <div style = {css.LineCharts}>
                                    <LineCharts c_width={c_width} day={this.state._day} project={this.state.project} />
                                </div>
                                <div style = {css.ErrorPage}>
                                     <ErrorPage day={this.state._day} project={this.state.project} />
                                </div>
                            </div>
                        </div>
                        <div style={css.SevenLineCharts}>
                            <div   style={{borderRight:'1px solid #eee'}}>
                            <SevenLineCharts c_width={c_width} day={this.state.day} project={this.state.project} />
                            </div>
                            <SevenClien day={this.state.day} project={this.state.project} />
                        </div>
                    </div>
                </div>
     		</div>
     	)
     }
}

ReactDOM.render(<App/>, document.getElementById('root'));
