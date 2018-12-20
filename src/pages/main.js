import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from 'components/head';
import Nav from 'components/nav';
import Pagelist from './pagelist.js';
import TodayData from 'components/todayData';
import LineCharts from 'components/LineCharts';
import SevenLineCharts from 'components/sevenLineCharts';
import ErrorList from 'components/errorList';
import Performance from 'components/performance';
import './index.scss';
let css = {
    main: {
        margin: '0px 0',
        padding: '0 30px',
        width:'1100px'
    },
    indexMain: {
        minWidth: '700px',
        flex: 1,
        padding: '0px 50px'
    },
    daysAnalytics: {
        margin: '20px 0',
        border: '1px solid #efefef',
        boxShadow: '0 0 5px #efefef',
    },
    LineCharts: {
        flex: 1
    }
}

class Main extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        let c_width = window.innerWidth - 1000;
        c_width = (c_width <= 700) ?700 : c_width;
        return (
            <div style={css.main}>
                   <TodayData/>
                   <div style={css.daysAnalytics}>
                       <antd.Tabs defaultActiveKey="1" >
                        <antd.Tabs.TabPane tab="资源分析" key="1">
                                <div style={{padding:'10px 20px'}}>
                                    <Performance />
                                </div>
                        </antd.Tabs.TabPane>
                       <antd.Tabs.TabPane tab="错误列表" key="2">
                                <div style={{padding:'20px'}}>
                                    <ErrorList />
                                </div>
                        </antd.Tabs.TabPane>
                        <antd.Tabs.TabPane tab="数据走势" key="3">
                                 <div style={{padding:'20px'}}>
                                    <div style = {css.LineCharts}>
                                        <LineCharts c_width={c_width}  hideTitle={true}/>
                                    </div>
                                </div>
                        </antd.Tabs.TabPane>
                        <antd.Tabs.TabPane tab="最近7天数据趋势" key="4">
                                <div style={{padding:'20px'}}>
                                    <div style = {css.LineCharts}>
                                        <SevenLineCharts c_width={c_width}  hideTitle={true}/>
                                    </div>
                                </div>
                        </antd.Tabs.TabPane>
                      </antd.Tabs>
                   </div>
            </div>
        )
    }
}


module.exports = Main;