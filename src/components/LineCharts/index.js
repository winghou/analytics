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
    }
    componentDidMount() {
        this.showChart();
        var that = this;
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
    render() {
        let tit = (this.props.hideTitle)?'':<div style={css.title}>数据走势</div>;
        return (
            <div>
             {tit}
              <antd.Radio.Group value={'1'} >
                  <antd.Radio.Button value="1">js错误</antd.Radio.Button>
                  <antd.Radio.Button value="2">资源加载时间</antd.Radio.Button>
                  <antd.Radio.Button value="3">白屏时间</antd.Radio.Button>
                  <antd.Radio.Button value="4">pv</antd.Radio.Button>
                </antd.Radio.Group>
              <div id="LineCharts" style={{width: this.props.c_width, height:400}}></div>
            </div>
        )
    }
}


module.exports = LineCharts;