import React, { Component } from 'react';
import ReactDOM from 'react-dom';
let css = {
    title: {
        fontSize: '20px', 
        marginBottom: '20px'
    }
}

class sevenLineCharts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoading:true,
            type:'sevenErrorLine',
            data: {
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00'],
                    axisLabel: {
                        color: "#999"
                    },
                    axisTick: {
                        lineStyle: {
                            color: "#999"
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        color: "#999"
                    },
                    axisTick: {
                        lineStyle: {
                            color: "#999"
                        }
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} <br/>数值:{c}"
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    itemStyle: {
                        borderColor: "#226fa2"
                    },
                    smooth: true,
                    lineStyle:{
                        color:'#349fe6'
                    },
                    
                }]
            }
        } 

        this.showChart = this.showChart.bind(this);
         this.getData = this.getData.bind(this);
         this.onChange = this.onChange.bind(this);
        this.getData(this.props.day,this.props.url);
    }
     getData(day,url){
         var that = this,_url=url;
        if(url == undefined){
            _url = ''
        }
        fetch('/api/'+this.state.type+'?day='+day+'&project='+this.props.project+'&url='+_url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => response.json()).then(function(response){
            if(response.code==1){

                let data =  Object.assign({},that.state.data),days = [],seriesData = [];
                response.reslut.map(function(item,index){
                   days.push(item.date);
                   seriesData.push(item.num);
                })
                data.series[0].data = seriesData;
                data.xAxis.data = days;
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
    componentWillReceiveProps(nextProps) {
       this.getData(nextProps.day,nextProps.url);
    }
    componentDidMount() {
        //this.showChart();
        var that = this;
    }
    componentDidUpdate() {
        this.showChart();
    }

    showChart() {
        var myChart = echarts.init(document.getElementById('sevenLineCharts'));
        // 指定图表的配置项和数据
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(this.state.data);
    }
    onChange(e){
        var that = this;
         this.setState({
                   type:e.target.value
                },function(){
                      that.getData(that.props.day,that.props.url);
                })
    }
    render() {
       let tit = (this.props.hideTitle)?'': <div style={css.title}>最近7天数据趋势</div>;
       let main =  (this.state.showLoading)?<div style={{width: this.props.c_width, height:300,lineHeight: '300px',textAlign: 'center'}}><antd.Spin /></div>:<div id="sevenLineCharts"  style={{width: this.props.c_width, height:300}}></div>
        return (
            <div>
              {tit}
              <antd.Radio.Group value={this.state.type} onChange={this.onChange} >
                  <antd.Radio.Button value="sevenErrorLine">js错误</antd.Radio.Button>
                  <antd.Radio.Button value="getSevenPerformanceLine">资源加载时间</antd.Radio.Button>
                  <antd.Radio.Button value="getSevenResponseLine">白屏时间</antd.Radio.Button>
                  <antd.Radio.Button value="getSevenPvLine">pv</antd.Radio.Button>
                </antd.Radio.Group>
              {main}
            </div>
        )
    }
}


module.exports = sevenLineCharts;