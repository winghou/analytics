import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from 'components/head';
import Nav from 'components/nav';
import './index.scss';
let css = {
    main: {
        margin: '20px 0',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        paddingTop: '80px'
    },
    indexMain: {
        minWidth: '1200px',
        flex: 1,
        padding: '0px 50px'
    },
    item: {
        borderLeft: '5px solid #5aa7fd',
        paddingLeft: '10px',
        marginBottom: '20px'
    },
    itemSpan: {
        display: 'inline-block',
        marginRight: '10px',
        color: '#666'
    },
    Agent: {
        background: '#eee',
        padding: '10px',
        marginBottom: '30px'
    },
    AgentTit: {
        marginTop: '30px',
        marginBottom: '10px'
    },
    Agentinfo: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    AgentinfoItem: {
        marginRight: '50px',
        paddingRight: '50px',
        borderLeft: '3px solid #ff7d6c',
        paddingLeft: '10px'
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        let c_width = (window.innerWidth - 400) / 2;
        c_width = (c_width <= 500) ? 500 : c_width;
        return (
            <div>
                <Header />
                <div style={css.main}>
                    <Nav/>
                    <div style={css.indexMain}>
                             <p style={css.item}><span style={css.itemSpan}>上报时间:</span>2018-12-18 10:20:12</p>
                      <p style={css.item}><span style={css.itemSpan}>页面标题:</span>自助在线预约</p>
                      <p style={css.item}><span style={css.itemSpan}>用户信息:</span>userId=&openId=&ykzUserId=&ykzOpenId=</p>
                      <p style={css.item}><span style={css.itemSpan}>当前页面:</span>https://analytics-test.yaochufa.com/#/Error_Details?id=5c1866a2afc09f17b39da588&project=yunke&date=2018-12-18</p>
                      <p style={css.item}><span style={css.itemSpan}>来源页面:</span>https://analytics-test.yaochufa.com/#/Error_Details?id=5c1866a2afc09f17b39da588&project=yunke&date=2018-12-18</p>
                      <p style={css.item}><span style={css.itemSpan}>IP:</span>2018-12-18 10:20:12</p>
                      <div>
                      <p style={css.AgentTit}>js错误:</p>
                      <div style={css.Agent}>
                        <div><span style={css.itemSpan}>出错文件:</span>
                        https://qiniu-cdn7.jinxidao.com/dvb/frontv2/js/common.js?v=120181214112105; </div>
                        <div ><span style={css.itemSpan}>错误说明:</span> 
                        SecurityError: The operation is insecure.; 出错行:1</div>
                      </div>
                      </div>
                      <div>
                      <p style={css.AgentTit}>User Agent:</p>
                      <p style={css.Agent}>Mozilla/5.0 (iPhone; CPU iPhone OS 12_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1</p>
                      </div>
                      <div style={css.Agentinfo}>
                        <div style={css.AgentinfoItem}>
                          <p>浏览器类型:</p>
                          <p>chrome浏览器-63.0.3239.132</p>
                        </div>
                        <div style={css.AgentinfoItem}>
                          <p>浏览器内核:</p>
                          <p>webkit-63.0.3239.132</p>
                        </div>
                        <div style={css.AgentinfoItem}>
                          <p>操作系统:</p>
                          <p>Win10</p>
                        </div>
                        <div style={css.AgentinfoItem}>
                          <p>是否app打开:</p>
                          <p>false</p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));