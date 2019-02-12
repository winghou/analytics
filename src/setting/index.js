
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from 'components/head';
import Nav from 'components/nav';
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
    InputNumber:{
        lineHeight:'30px'
    },
    con:{
        width:'1100px',
        padding:'15px 30px',
        border:'1px solid #e8e8e8'
    },
    TextArea:{
        width:'1000px'
    }
}

class App extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            day:getParam('day')||date.formatTime(),
            project:getParam('project'),
            checked:true,
            limit:1,
            errornumber:50,
            urlRule:'',
            errorRule:''
        }
        this.onChangelimit = this.onChangelimit.bind(this);
        this.onChangeChecked = this.onChangeChecked.bind(this);
        this.onChangeErrornumber = this.onChangeErrornumber.bind(this);
        this.onChangeUrlRule = this.onChangeUrlRule.bind(this);
        this.onChangeErrorRule = this.onChangeErrorRule.bind(this);
        this.getdata = this.getdata.bind(this);
        this.submit = this.submit.bind(this);
        this.getdata();
    }
    getdata(){ 
        let that = this;
        let postData = {
            project:this.state.project
        };
        fetch('/api/getSetting?project='+this.state.project, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => response.json()).then(function(response){
            let data = response.data;
            that.setState({
                errorRule:data.errorRule,
                errornumber:data.errornumber,
                limit:data.limit,
                checked:data.robot,
                urlRule:data.urlRule
            })
        });
    }
    onChangelimit(value){
        this.setState({
            limit:value
        })
    }
    onChangeChecked(value){
        console.log(value)
        this.setState({
            checked:value
        })
    }
    onChangeErrornumber(value){
        this.setState({
            errornumber:value
        })
    }
    onChangeUrlRule(e){
        this.setState({
            urlRule:e.target.value
        })
    }
    onChangeErrorRule(e){
        this.setState({
            errorRule:e.target.value
        })
    }
    submit(){
        let postData = {
            project:this.state.project,
            robot:this.state.checked,
            limit:this.state.limit,
            errornumber:this.state.errornumber,
            urlRule:this.state.urlRule,
            errorRule:this.state.errorRule
        };
        fetch('/api/setting', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        }).then(response => response.json()).then(function(response){
            if(response.code==1){
                 alert(response.msg)
            }else{
                alert(response.msg)
            }
        });
    }
    render() {
     	return (
     		<div>
     			<Header />
                <div style={css.main}>
                    <Nav/>
                    <div style={css.con}>
                        <h4>项目设置</h4>
                        <antd.List>
                            <antd.List.Item>
                                <div style={css.InputNumber}>同一个IP,在同一个页面，<antd.InputNumber min={1} max={10} value={this.state.limit} onChange={this.onChangelimit} /> 分钟内,只收集一次报错信息</div>
                            </antd.List.Item>
                            <antd.List.Item>
                                <div style={css.InputNumber}>
                                <div style={css.InputNumber}>机器人错误提示: <antd.Switch checked={this.state.checked} onChange={this.onChangeChecked} /></div>
                                同一个页面,一分钟内报错超过 <antd.InputNumber min={1} max={1000} value={this.state.errornumber}  onChange={this.onChangeErrornumber} /> 次,触发钉钉机器人提醒
                                </div>
                            </antd.List.Item>
                            <antd.List.Item>
                                <div style={css.InputNumber}>
                                <div style={css.InputNumber}>不监听的URL:</div>
                                <antd.Input.TextArea rows={4} style={css.TextArea} value={this.state.urlRule}  onChange={this.onChangeUrlRule}  placeholder="http://pgyer.com/或/^https:\/\/www\.pgyer\.com\/.*/"/>
                                </div>
                            </antd.List.Item>
                            <antd.List.Item>
                                <div style={css.InputNumber}>
                                <div style={css.InputNumber}>不监听的错误:</div>
                                <antd.Input.TextArea rows={4} style={css.TextArea}  value={this.state.errorRule} onChange={this.onChangeErrorRule}   placeholder="http://pgyer.com/或/^https:\/\/www\.pgyer\.com\/.*/"/>
                                </div>
                            </antd.List.Item>
                        </antd.List>
                        <antd.Button type="primary" onClick={this.submit}>确定</antd.Button>
                       {/* <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />,*/}
                    </div>
                </div>
     		</div>
     	)
     }
}

ReactDOM.render(<App/>, document.getElementById('root'));
