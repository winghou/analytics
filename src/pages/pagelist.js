import React, { Component } from 'react';
import ReactDOM from 'react-dom';
let css = {
    main:{
        
        marginLeft:'10px'
    },
    bar: {
        margin: '0px 0',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        background: '#f3f3f3',
        padding: '0 20px',
        height: '60px',
        lineHeight: '60px',
        alignItems: 'center',
        boxShadow: '0 2px 2px #efefef',
        width: '500px'
    },
    item: {
        marginRight: '10px',
        width: '50px',
        border: '1px solid #d5dbe0',
        height: '30px',
        lineHeight: '30px',
        background: '#fff',
        textAlign: 'center',
        borderRadius: '3px',
        cursor: 'pointer'
    },
    itemAct: {
        border: '1px solid rgb(63, 170, 240)',
    },
    List: {
        padding: '20px 0'
    },
    ListItem: {
        display: 'flex',
        height: '40px',
        lineHeight: '40px',
        flexDirection: 'row',
        flexWrap: 'nowrap',
       
        borderBottom: '1px solid #eee',
        padding: '0 0px',
        position: 'relative',
        marginBottom:'3px'
    },
    ListItemTitle: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        padding: '0 10px',
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex:10
    },
    ListItemUrl: {
        padding: '0 10px',
        width: '355px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
         position: 'absolute',
        left: '140px',
        top: 0
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        this.props.changeData(this.props.item,this.props._key);
    }
    render() {
        return (
            <div style={css.ListItem} className={['ListItem',(this.props._key==this.props.cur)?'ListItemCur':''].join(' ')} title={this.props.item._id} onClick={this.onClick}>
               <div style={css.ListItemTitle} className="ListItemTitle">{this.props.item.data[0].title}</div>
               <div style={css.ListItemUrl}>{this.props.item.data[0].host}{this.props.item._id}</div>
            </div>
        )
    }
}
class List extends React.Component {
    constructor(props) {
        super(props);
        this.changeData = this.changeData.bind(this);
    }
    changeData(data,_key){
        this.props.changeData(data,_key);
    }
    render() {
        let items = this.props.data.map((item,i) =>
          <Item key={i} _key={i}item={item} changeData={this.changeData} cur={this.props.cur}/>
        );
        return (
            <div style={css.List}>
                {items}
            </div>
        )
    }
}

class Pagelist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            showLoading:true,
            total:0,
            size:3,
            url:'',
            cur:0
        }
        this.onChangeDate = this.onChangeDate.bind(this);
        this.getData = this.getData.bind(this);
        this.onSearch = this.onSearch.bind(this);
         this.changeData = this.changeData.bind(this);

        this.getData(this.props.day,this.state.url);
    }
    onChangeDate(date, dateString) {
        let that = this;
        this.setState({
                    showLoading:true
        },function(){
            that.props.onChangeDate(dateString);
        })
        
    }
    onSearch(value){
         let that = this;
         this.setState({
                    showLoading:true,
                    url:value
        },function(){
            that.getData(that.props.day,value)
        })
        
    }
    componentWillReceiveProps(nextProps) {
        if(!this.state.showLoading){
            return false;
        }
        this.setState({
                    showLoading:true
        })
        this.getData(nextProps.day,this.state.url)
    }
    getData(day,url){
        var that = this;
        // that.setState({
        //             showLoading:true
        //         })
        fetch('/api/searchPages?day='+day+'&project='+this.props.project+'&url='+url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => response.json()).then(function(response){
            if(response.code==1){
                that.setState({
                    data:response.reslut,
                    showLoading:false,
                    total:Math.ceil(response.total/that.state.size),
                    cur:0
                })
                //
                that.props.setPageData(response.reslut[0]);
            }else{
                alert(response.msg)
            }
        });
    }
    changeData(data,key){
         this.setState({
                    cur:key
        })
        this.props.changePageDataData(data);
    }
    render() {
        let showLoading =  (this.state.showLoading)?<div style={{width: 500, height:100,lineHeight: '100px',textAlign: 'center'}}><antd.Spin /></div>:'';
        let list = (this.state.showLoading)?'': <List data={this.state.data} cur={this.state.cur} changeData={this.changeData} />;
        let page = (this.state.total<=1)?'':<div style={{textAlign:'right'}}><antd.Pagination size="small" total={this.state.total} /></div>;
        let meh = (this.state.data.length==0)?<div style={{width: 500,marginTop:'30px',textAlign: 'center',fontSize:'30px'}}><antd.Icon type="meh" theme="twoTone" /><p style={{fontSize:'14px'}}>没有相关数据</p></div>:'';
        return (
            <div style={css.main}>
                <div style={css.bar}>
                        <antd.DatePicker defaultValue={moment(this.props.day, 'YYYY-MM-DD')} onChange={ this.onChangeDate} style={{width:'200px',marginRight: '10px'}}/>
                        <antd.Input.Search
                              placeholder="输入url搜索"
                              onSearch={this.onSearch}
                              style={{width:'240px'}}
                        />
                </div>
                {showLoading}
                {meh}
                {list}
                {page}
            </div>
        )
    }
}

module.exports = Pagelist;