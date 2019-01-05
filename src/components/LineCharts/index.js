import React, { Component } from 'react';
import ReactDOM from 'react-dom';
let css = {
    title: {
        fontSize: '20px',
        marginBottom: '20px'
    }
}

class LineCharts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoading:true,
            type:'getErrorLine',
            data: {
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00',
                        '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
                    ],
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
                    data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901,
                        934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330,
                        1320, 932, 901, 934,
                    ],
                    type: 'line',
                    itemStyle: {
                        borderColor: "#226fa2"
                    },
                    smooth: true,
                    lineStyle:{
                        color:'#349fe6'
                    },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#349fe6' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#fff' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
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
                let ChartData = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    data =  Object.assign({},that.state.data);
                response.reslut.map(function(item,index){
                    ChartData[item._id] = item.num
                })
                data.series[0].data = ChartData;
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
        // this.showChart();
        // var that = this;
    }
    componentDidUpdate() {
        this.showChart();
    }

    showChart() {
        var myChart = echarts.init(document.getElementById('LineCharts'));
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
        let tit = (this.props.hideTitle)?'':<div style={css.title}>数据走势</div>;
        let main =  (this.state.showLoading)?<div style={{width: this.props.c_width, height:400,lineHeight: '400px',textAlign: 'center'}}><antd.Spin /></div>:<div id="LineCharts" style={{width: this.props.c_width, height:400}}></div>
        return (
            <div>
             {tit}
              <antd.Radio.Group value={this.state.type} onChange={this.onChange} >
                  <antd.Radio.Button value="getErrorLine">js错误</antd.Radio.Button>
                  <antd.Radio.Button value="getPerformanceLine">资源加载时间</antd.Radio.Button>
                  <antd.Radio.Button value="getResponseStartLine">白屏时间</antd.Radio.Button>
                  <antd.Radio.Button value="getPvLine">pv</antd.Radio.Button>
                </antd.Radio.Group>
              {main}
            </div>
        )
    }
}


module.exports = LineCharts;