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
    }
    componentDidMount() {
        this.showChart();
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
    render() {
       let tit = (this.props.hideTitle)?'': <div style={css.title}>最近7天数据趋势</div>;
        return (
            <div>
              {tit}
              <antd.Radio.Group value={'1'} >
                  <antd.Radio.Button value="1">js错误</antd.Radio.Button>
                  <antd.Radio.Button value="2">资源加载时间</antd.Radio.Button>
                  <antd.Radio.Button value="3">白屏时间</antd.Radio.Button>
                  <antd.Radio.Button value="4">pv</antd.Radio.Button>
                </antd.Radio.Group>
              <div id="sevenLineCharts"  style={{width: this.props.c_width, height:300}}></div>
            </div>
        )
    }
}


module.exports = sevenLineCharts;