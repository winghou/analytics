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
            showLoading:true,
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
                    name: '页面',
                    type: 'pie',
                    radius:  ['40%', '60%'],
                    center: ['50%', '50%'],
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 274, name: '联盟广告' },
                        { value: 235, name: '视频广告' },
                        { value: 400, name: '搜索引擎' }
                    ].sort(function(a, b) { return a.value - b.value; }),
                    // roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.8)'
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
                    // itemStyle: {
                    //     normal: {
                    //         color: '#c23531',
                    //         shadowBlur: 200,
                    //         shadowColor: 'rgba(0, 0, 0, 0.5)'
                    //     }
                    // },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function(idx) {
                        return Math.random() * 200;
                    }
                }]
            }
        }

        this.showChart = this.showChart.bind(this);
        this.getData = this.getData.bind(this);
        
        this.getData(this.props.day,this.props.url);
    }
    getData(day,url){
        
        var that = this,_url=url;
        if(url == undefined){
            _url = ''
        }
        fetch('/api/getErrorDistributed?day='+day+'&project='+this.props.project, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => response.json()).then(function(response){
            if(response.code==1){
                let ChartData = [],data =  Object.assign({},that.state.data);
                response.reslut.map(function(item,index){
                    ChartData.push({ value: item.num, name: item.list[0],url:item._id })
                })
                data.series[0].data = ChartData.sort(function(a, b) { return a.value - b.value; });
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
    // componentDidUpdate() {
    //     this.showChart();
    // }

    showChart() {
         var that = this;
        document.getElementById('ErrorPage').innerHTML = '';
        document.getElementById('ErrorPage').removeAttribute('_echarts_instance_')
        setTimeout(function(){
             let myChart = echarts.init(document.getElementById('ErrorPage'));
        // 指定图表的配置项和数据
        // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(that.state.data);
            myChart.on('click', function (e) {console.log(e.data)});
        },300);
       
    }
    render() {
        let main =  (this.state.showLoading)?<div style={{width: 500, height:400,lineHeight: '400px',textAlign: 'center'}}><antd.Spin /></div>:<div id="ErrorPage" style={{width: 500, height:400,backgroundColor:'#153f5a'}}></div>
        return (
            <div>
              <div style={css.title}>错误页面分布</div>
              {main}
            </div>
        )
    }
}


module.exports = ErrorPage;