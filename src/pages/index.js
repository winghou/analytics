
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from 'components/head';
import Nav from 'components/nav';
import Pagelist from './pagelist.js';
import Main from './main.js';
import './index.scss';
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
    }
    render() {
     	return (
     		<div>
     			<Header />
                <div style={css.main}>
                    <Nav/>
                    <Pagelist/>
                    <div style={{width:'1100px'}}>
                    <Main/>
                    </div>
                </div>
     		</div>
     	)
     }
}

ReactDOM.render(<App/>, document.getElementById('root'));
