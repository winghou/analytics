import React, { Component } from 'react';
import ReactDOM from 'react-dom';
let css = {
    title: {
        fontSize: '20px',
        marginBottom: '20px'
    } 
}

class SevenClien extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                title: {
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    // data: ['2011年', '2012年']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    top: '7%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['巴西', '印尼', '美国', '印度', '中国','chrome','weixin']
                },
                series: [{
                        name: '',
                        type: 'bar',
                        data: [18203, 23489, 29034, 104970, 131744,155500,24433],
                        color:"#143c56"
                    }
                ]
            }
        }
        

        this.showChart = this.showChart.bind(this);
        this.getData = this.getData.bind(this);
        this.getData(this.props.day,this.props.url);
    }
    componentDidMount() {
        this.showChart();
        var that = this;
    }
    componentDidUpdate() {
        this.showChart();
    }
    getData(day,url){
         var that = this,_url=url;
        if(url == undefined){
            _url = ''
        }
        fetch('/api/getBrowser?day='+day+'&project='+this.props.project+'&url='+_url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => response.json()).then(function(response){
            if(response.code==1){

                let data =  Object.assign({},that.state.data),days = [],seriesData = [];
                response.reslut.map(function(item,index){
                    console.log(item._id)
                   days.push(item._id);
                   seriesData.push(item.num);
                })
                data.series[0].data = seriesData;
                data.yAxis.data = days;
                that.setState({
                    data:data,
                    showLoading:false
                },function(){
                    that.showChart();
                })
            }else{
                alert(response.msg)
            }
        });
    }

    showChart() {
        var myChart = echarts.init(document.getElementById('SevenClien'));
        // 指定图表的配置项和数据
        // 使用刚指定的配置项和数据显示图表。
        console.log(this.state.data)
        myChart.setOption(this.state.data);
    }
    render() {

        return (
            <div  style={{ flex:1,paddingLeft:'30px'}}>
             <div style={css.title}>最近7天浏览器统计</div>
              <div id="SevenClien" style={{width: 500, height:350}}></div>
            </div>
        )
    }
}


module.exports = SevenClien;