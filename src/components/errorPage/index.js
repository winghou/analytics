import React, { Component } from 'react';
import ReactDOM from 'react-dom';
let css = {
    title: {
        fontSize: '20px',
        marginBottom: '20px'
    }
}

class ErrorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                backgroundColor: '#153f5a',

                title: {
                    // text: 'Customized Pie',
                    left: 'center',
                    top: 20,
                    textStyle: {
                        color: '#ccc'
                    }
                },

                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },

                visualMap: {
                    show: false,
                    min: 80,
                    max: 600,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 274, name: '联盟广告' },
                        { value: 235, name: '视频广告' },
                        { value: 400, name: '搜索引擎' }
                    ].sort(function(a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function(idx) {
                        return Math.random() * 200;
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
        var myChart = echarts.init(document.getElementById('ErrorPage'));
        // 指定图表的配置项和数据
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(this.state.data);
    }
    render() {

        return (
            <div>
              <div style={css.title}>错误页面分布</div>
              <div id="ErrorPage" style={{width: 500, height:400}}></div>
            </div>
        )
    }
}


module.exports = ErrorPage;