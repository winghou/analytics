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
        width: '500px',

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
        position: 'relative'
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
    }
    render() {
        return (
            <div style={css.ListItem} className="ListItem">
               <div style={css.ListItemTitle} className="ListItemTitle" title='云客赞ddd前端监控'>云客赞-云客赞ddd前端监控</div>
               <div style={css.ListItemUrl} title='云客赞ddd前端监控'>https://www.runoob.com/w3cnote/flex-grammar.html</div>
            </div>
        )
    }
}
class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={css.List}>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        )
    }
}

class Pagelist extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(date, dateString) {}
    render() {
        let actCss = Object.assign({}, css.item, css.itemAct);
        return (
            <div style={css.main}>
                <div style={css.bar}>
                        <div style={actCss}>错误</div>
                        <div style={css.item}>pv</div>
                        <antd.DatePicker onChange={ this.onChange} style={{width:'200px',marginRight: '10px'}}/>
                        <antd.Input.Search
                              placeholder="输入url搜索"
                              onSearch={value => console.log(value)}
                              style={{width:'240px'}}
                        />
                </div>
               <List/>
                <div style={{textAlign:'right'}}>
                    <antd.Pagination size="small" total={50} />
                </div>
            </div>
        )
    }
}

module.exports = Pagelist;