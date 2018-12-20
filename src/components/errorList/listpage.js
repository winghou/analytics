import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Drawer from './Drawer.js';
let css = {
    title: {
        fontSize: '20px',
        marginBottom: '20px'
    },
    from:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'nowrap',
    },
    item:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'nowrap',
        lineHeight:'32px',
    },
    list:{
        margin:'40px 0'
    },

}


const columns = [{
  title: '时间',
  dataIndex: 'time',
  key: 'time',
  width:150,
  render: text => <span style={{width:'50px'}}>{text}</span>,
},{
  title: 'URL',
  dataIndex: 'url',
  width:500,
  render: text => <span style={{width:'50px'}}>{text}</span>,
}, {
  title: '内容',
  dataIndex: 'content',
}];

const data = [{
  time: '21:00',
  url:'123',
  content: '出错文件: https://qiniu-cdn7.jinxidao.com/dvb/frontv2/js/common.js?v=120181214112105; 错误说明: SecurityError: The operation is insecure.; 出错行:1'
}, {
  time: '21:01',
    url:'1g23',
  content: 'John Brown'
},{
  time: '21:02',
    url:'12d3',
  content: 'John Brown'
},{
  time: '21:40',
    url:'12s3',
  content: 'John Brown'
}];


const pagination = { position: 'bottom',total:50 };
class List extends React.Component {
     constructor(props) {
        super(props);
        this.clickRow = this.clickRow.bind(this)
    }
    clickRow(index){
        console.log(index)
        this.props.showDrawer()
    }
    render() {

        return (
            <antd.Table columns={columns} dataSource={data} size='small' pagination={pagination}
                onRow={(record,index) => {
                return {
                  onClick: () => {this.clickRow(index)}, 
                };
              }}
             />
        )
    }
}

class errorList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        this.showDrawer = this.showDrawer.bind(this);
        this.onClose = this.onClose.bind(this);
    }
    showDrawer(){
        this.setState({
          visible: true,
        });
    }
    onClose(){
        this.setState({
          visible: false,
        });
    }
    render() {

        return (
            <div>
                <div style={css.from}>
                    <div style={css.item}>
                        <span style={{width:'100px'}}>用户Id:</span><antd.Input placeholder="用户Id" style={{margin:'0 40px 0 10px'}} />
                    </div>
                    <div style={css.item}>
                        <span style={{width:'50px'}}>url:</span><antd.Input placeholder="url" style={{margin:'0 40px 0 10px'}} />
                    </div>
                    <div style={css.item}>
                         <span style={{width:'100px'}}>错误内容:</span><antd.Input placeholder="错误内容" style={{margin:'0 40px 0 10px'}} />
                    </div>
                    <antd.DatePicker onChange={ this.onChange} style={{width:'200px',margin:'0 40px 0 10px'}}/>
                    <div  style={css.item}>
                        <antd.Button type="primary" icon="search">搜索</antd.Button>
                    </div>
                </div>
                <div  style={css.list}>
                    <List showDrawer={this.showDrawer}/>
                </div>
                <Drawer onClose={this.onClose} visible={this.state.visible}/>
            </div>
        )
    }
}


module.exports = errorList;