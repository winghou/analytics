import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Drawer from './Drawer.js';
import util from '../../../api/util';

const date = util.date;

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
  dataIndex: 'timestamp',
  key: 'timestamp',
  width:150,
  render: text => <span style={{width:'50px'}}>{date.getFormatTime(text,1)}</span>,
},{
  title: 'userID',
  dataIndex: 'userId',
  width:100,
  render: text => <span style={{width:'50px'}}>{text}</span>,
}, {
  title: '内容',
  dataIndex: 'errorContent',
}];


const pagination = {total:50 };
class List extends React.Component {
     constructor(props) {
        super(props);
        this.clickRow = this.clickRow.bind(this)
    }
    clickRow(index){
        this.props.showDrawer(index)
    }
    render() {

        return (
            <antd.Table columns={columns} dataSource={this.props.listData} size='small' pagination={this.props.pagination}
                rowKey='timestamp'
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
            visible: false,
            listData:[],
            showLoading:true,
            total:0,
            size:3,
            pagination:{total:0},
            uid:'',
            errorContent:'',
            errorData:{}
        }
        this.showDrawer = this.showDrawer.bind(this);
        this.onClose = this.onClose.bind(this);
        this.getData = this.getData.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.changeErrorContent = this.changeErrorContent.bind(this);
        this.changeUid = this.changeUid.bind(this);
        this.getData(this.props.day,this.props.url);
    }
    changeErrorContent(e){
      this.setState({ errorContent:  e.target.value })
     }
     changeUid(e){
      this.setState({ uid:  e.target.value })
     }
    onSearch(){
        this.getData(this.props.day,this.props.url);
    }
    showDrawer(index){
        this.setState({
          visible: true,
          errorData:this.state.listData[index]
        });
    }
    onClose(){
        this.setState({
          visible: false,
        });
    }
     getData(day,url){
        var that = this;
        fetch('/api/pageErrorList?day='+day+'&project='+this.props.project+'&url='+url+'&uid='+this.state.uid+'&errorContent='+this.state.errorContent, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => response.json()).then(function(response){
            if(response.code==1){

                // let ChartData = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                //     data =  Object.assign({},that.state.data);
                // response.reslut.map(function(item,index){
                //     ChartData[item._id-1] = item.num
                // })
                // data.series[0].data = ChartData;
                that.setState({
                    listData:response.reslut,
                     showLoading:false,
                      pagination:{total:response.total}
                })
            }else{
                alert(response.msg)
            }
        });
    }
    componentWillReceiveProps(nextProps) {
       
        this.setState({
                    showLoading:true
        })
       this.getData(nextProps.day,nextProps.url);
    }
    render() {
        let showLoading =  (this.state.showLoading)?<div style={{width: '100%', height:100,lineHeight: '100px',textAlign: 'center'}}><antd.Spin /></div>:'';
        let list =  (!this.state.showLoading)?<List showDrawer={this.showDrawer} listData={this.state.listData} pagination={this.state.pagination} />:'';
        return (
            <div>
                <div style={css.from}>
                    <div style={css.item}>
                        <span style={{width:'100px'}}>用户Id:</span><antd.Input onChange={this.changeUid} placeholder="用户Id" style={{margin:'0 40px 0 10px'}} />
                    </div>
                    <div style={css.item}>
                         <span style={{width:'100px'}}>错误内容:</span><antd.Input  onChange={this.changeErrorContent} placeholder="错误内容" style={{margin:'0 40px 0 10px'}} />
                    </div>
                    <div  style={css.item}>
                        <antd.Button type="primary" icon="search" onClick={this.onSearch}>搜索</antd.Button>
                    </div>
                </div>
                <div  style={css.list}>
                    {showLoading}
                    {list}
                </div>
                <Drawer onClose={this.onClose} visible={this.state.visible} data={this.state.errorData} project={this.props.project}  day={this.props.day}/>
            </div>
        )
    }
}


module.exports = errorList;