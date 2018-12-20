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
    }
    componentDidMount() {
        this.showChart();
        var that = this;
    }
    componentDidUpdate() {
        this.showChart();
    }

    showChart() {
        var myChart = echarts.init(document.getElementById('SevenClien'));
        // 指定图表的配置项和数据
        // 使用刚指定的配置项和数据显示图表。
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