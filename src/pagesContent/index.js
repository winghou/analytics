
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from 'components/head';
import Nav from 'components/nav';
import Main from '../pages/main.js';
import util from '../../api/util';

import './index.scss';


const date = util.date;
const getParam = util.getParam;

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
            day:getParam('day')||date.formatTime(),
            project:getParam('project'),
            pageData:{_id: getParam('url'),data:[{title: getParam('title')}]}
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
        let main = (this.state.pageData!=undefined)?<Main day={this.state.day} project={this.state.project} pageData={this.state.pageData} />:'';
     	return (
     		<div>
     			<Header />
                <div style={css.main}>
                    <Nav/>
                    <div style={{width:'1100px'}}>
                    {main}
                    </div>
                </div>
     		</div>
     	)
     }
}

ReactDOM.render(<App/>, document.getElementById('root'));
