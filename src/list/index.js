
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from 'components/head';
import Nav from 'components/nav';
import ErrorList from 'components/errorList/listpage';
import util from '../../api/util';
const date = util.date;

import './index.scss';
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
        this.state = {
            day:date.formatTime(),
            url:'',
            project:'activity'
        }
       
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
                        <ErrorList  day={this.state.day} url={this.state.url} project={this.state.project}/>
                    </div>
                </div>
     		</div>
     	)
     }
}

ReactDOM.render(<App/>, document.getElementById('root'));
