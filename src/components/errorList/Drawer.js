import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import util from '../../../api/util';

const date = util.date;
let css = {
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


class Drawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    render() {
        let _d = this.props.data;
        return (
            <antd.Drawer
                      title="错误详情"
                      placement="left"
                      closable={true}
                      onClose={this.props.onClose}
                      visible={this.props.visible}
                      width={1000}
                    >
                      <p style={css.item}><span style={css.itemSpan}>上报时间:</span>{date.formatTime(_d.timestamp,1)}</p>
                      <p style={css.item}><span style={css.itemSpan}>页面标题:</span>{_d.title}</p>
                      <p style={css.item}><span style={css.itemSpan}>用户id:</span>{_d.userId}</p>
                      <p style={css.item}><span style={css.itemSpan}>用户信息:</span>{_d.userInfo||'无'}</p>
                      <p style={css.item}><span style={css.itemSpan}>当前页面:</span>{_d.url}</p>
                      <p style={css.item}><span style={css.itemSpan}>来源页面:</span>{_d.referrer||'无'}</p>
                      <p style={css.item}><span style={css.itemSpan}>IP:</span>{_d.ip}</p>
                      <div>
                      <p style={css.AgentTit}>js错误:</p>
                      <div style={css.Agent}>
                        <div><span style={css.itemSpan}>出错文件:</span>
                        {_d.errorurl||'未知'}</div>
                        <div ><span style={css.itemSpan}>错误说明:</span> 
                        {_d.errorContent}</div>
                        <div ><span style={css.itemSpan}>错误行:</span> 
                        {_d.errorline||1}</div>
                      </div>
                      </div>
                      <div>
                      <p style={css.AgentTit}>User Agent:</p>
                      <p style={css.Agent}>{_d.ua}</p>
                      </div>
                      <div style={css.Agentinfo}>
                        <div style={css.AgentinfoItem}>
                          <p>浏览器类型:</p>
                          <p>{(_d.nv&&_d.nv.shell)?_d.nv.shell:'未知'}</p>
                        </div>
                        <div style={css.AgentinfoItem}>
                          <p>浏览器内核:</p>
                          <p>{(_d.nv&&_d.nv.core)?_d.nv.core:'未知'}</p>
                        </div>
                        <div style={css.AgentinfoItem}>
                          <p>操作系统:</p>
                          <p>{(_d.nv&&_d.nv.platform)?_d.nv.platform:'未知'}</p>
                        </div>
                        <div style={css.AgentinfoItem}>
                          <p>是否app打开:</p>
                           <p>{(_d.nv&&_d.nv.app)?_d.nv.app:'未知'}</p>
                        </div>
                      </div>
                      <div style={{textAlign:'right',marginTop:'150px'}}>
                      <a target='_blank' 
                         href={'/content?day='+this.props.day+'&project='+this.props.project+'&id='+this.props.data._id} >
                        新页面打开--》
                      </a></div>
                    </antd.Drawer>
        )
    }
}


module.exports = Drawer;