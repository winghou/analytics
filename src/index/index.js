
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
        margin:'20px 0',
        border:'1px solid #efefef',
        boxShadow:'0 0 5px #efefef',
    },
    LineCharts:{
        flex:1,
        borderRight:'1px solid #eee'
    },
    ErrorPage:{
        flex:1,
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
                        <TodayData/>
                        <div style={css.daysAnalytics}>
                            <Bar/>
                            <div style={{padding:'20px',display:'flex',flexDirection:'row', flexWrap:'nowrap'}}>
                                <div style = {css.LineCharts}>
                                    <LineCharts c_width={c_width}/>
                                </div>
                                <div style = {css.ErrorPage}>
                                     <ErrorPage/>
                                </div>
                            </div>
                        </div>
                        <div style={css.SevenLineCharts}>
                            <div   style={{borderRight:'1px solid #eee'}}>
                            <SevenLineCharts c_width={c_width}/>
                            </div>
                            <SevenClien/>
                        </div>
                    </div>
                </div>
     		</div>
     	)
     }
}

ReactDOM.render(<App/>, document.getElementById('root'));
