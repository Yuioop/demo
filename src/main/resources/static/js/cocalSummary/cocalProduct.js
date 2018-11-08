/**
 * Created by wlp on 2018/10/23.
 */
var parentWidthProduct =  $(".commonPadding").width();
$("#chinaMapProductEchart").css('width',parentWidthProduct);

// 国内煤炭分布存储示意图
var chinaMapProductEchart = echarts.init(document.getElementById('chinaMapProductEchart'));

initProductChinaMap();

// 地图点击事件
chinaMapProductEchart.on("click",function (params) {
    console.log(params.name);
})

function initProductChinaMap() {
    chinaMapProductEchart.showLoading();
    $.get('../../data/mapJson/china.json', function (chinaJson) {
        chinaMapProductEchart.hideLoading();
        echarts.registerMap('china', chinaJson);
        chinaMapProductEchart.setOption({
            title: {
                text: '国内煤炭分布生产示意图',
                left: 'left',
                top: 0,
                padding: [
                    0,  // 上
                    0, // 右
                    35,  // 下
                    10, // 左
                ],
                textStyle: {
                    color: '#ebd647',
                    fontSize: 16
                }
            },
            tooltip : {
                trigger: 'item'
            },
            visualMap:{
                min:0,
                max:1000,
                left:'5%',
                bottom:'bottom',
                text:['高', '低'],
                textStyle: {
                    color:'#fff'
                },
                calculable:true,
                inRange:{
                    color: ['#254fd7', '#3ba8fb'],
                }
            },
            series:[
                {
                    name:'煤炭生产(万吨)',
                    type:'map',
                    map:'china',
                    label:{
                        normal:{
                            show:true,
                            color:'#FFF',
                            fontSize: '10'
                        }
                    },
                    data:[
                        {name: '北京',value: Math.round(Math.random()*1000)},
                        {name: '天津',value: Math.round(Math.random()*1000)},
                        {name: '上海',value: Math.round(Math.random()*1000)},
                        {name: '重庆',value: Math.round(Math.random()*1000)},
                        {name: '河北',value: Math.round(Math.random()*1000)},
                        {name: '河南',value: Math.round(Math.random()*1000)},
                        {name: '云南',value: Math.round(Math.random()*1000)},
                        {name: '辽宁',value: Math.round(Math.random()*1000)},
                        {name: '黑龙江',value: Math.round(Math.random()*1000)},
                        {name: '湖南',value: Math.round(Math.random()*1000)},
                        {name: '安徽',value: Math.round(Math.random()*1000)},
                        {name: '山东',value: Math.round(Math.random()*1000)},
                        {name: '新疆',value: Math.round(Math.random()*1000)},
                        {name: '江苏',value: Math.round(Math.random()*1000)},
                        {name: '浙江',value: Math.round(Math.random()*1000)},
                        {name: '江西',value: Math.round(Math.random()*1000)},
                        {name: '湖北',value: Math.round(Math.random()*1000)},
                        {name: '广西',value: Math.round(Math.random()*1000)},
                        {name: '甘肃',value: Math.round(Math.random()*1000)},
                        {name: '山西',value: Math.round(Math.random()*1000)},
                        {name: '内蒙古',value: Math.round(Math.random()*1000)},
                        {name: '陕西',value: Math.round(Math.random()*1000)},
                        {name: '吉林',value: Math.round(Math.random()*1000)},
                        {name: '福建',value: Math.round(Math.random()*1000)},
                        {name: '贵州',value: Math.round(Math.random()*1000)},
                        {name: '广东',value: Math.round(Math.random()*1000)},
                        {name: '青海',value: Math.round(Math.random()*1000)},
                        {name: '西藏',value: Math.round(Math.random()*1000)},
                        {name: '四川',value: Math.round(Math.random()*1000)},
                        {name: '宁夏',value: Math.round(Math.random()*1000)},
                        {name: '海南',value: Math.round(Math.random()*1000)},
                        {name: '台湾',value: Math.round(Math.random()*1000)},
                        {name: '香港',value: Math.round(Math.random()*1000)},
                        {name: '澳门',value: Math.round(Math.random()*1000)}
                    ]

                }
            ]
        });
    });
}

// 煤炭生产
var rateProductEchart = echarts.init(document.getElementById('rateProductEchart'));
var rateProductEchartOption = {
    title: {
        text: "全国生产分布比重图",
        left: 'left',
        top: 0,
        padding: [
            0,  // 上
            0, // 右
            35,  // 下
            10, // 左
        ],
        textStyle: {
            color: '#ebd647',
            fontSize: 16
        }
    },
    grid:{
        left:'3%',
        right:'3%',
        bottom:30,
        containLabel: true
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color: ['#8b72f4','#f85f62', '#ff9109', '#e2fd17', '#00ef76', '#FF314A'],
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        textStyle:{
            fontSize:14,
            color:'#ebd647'
        },
        data: ["山西省","内蒙古","陕西省","辽宁省","其他"]
    },
    series : [
        {
            name: '煤炭生产比重（万吨）',
            type: 'pie',
            radius : '50%',
            center: ['50%', '50%'],
            selectedMode:'single',
            data: [
                {value:300, name:'山西省'},
                {value:200, name:'内蒙古'},
                {value:180, name:'陕西省'},
                {value:550, name:'辽宁省'},
                {value:291, name:'其他'}
            ],
            roseType: 'radius',
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
rateProductEchart.setOption(rateProductEchartOption);
//近10年煤炭生产情况
var tenYearsProductEchart = echarts.init(document.getElementById('tenYearsProductEchart'));
var tenYearsProductEchartOption = {
    title: {
        text: "近10年煤炭生产情况",
        left: 'left',
        top: 0,
        padding: [
            0,  // 上
            0, // 右
            35,  // 下
            10, // 左
        ],
        textStyle: {
            color: '#ebd647',
            fontSize: 16
        }
    },
    grid:{
        left:'3%',
        right:'3%',
        bottom:30,
        containLabel: true
    },
    calculable: true,
    color: ['#1c4fcf'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line'
        }
    },
    xAxis: [
        {
            type: 'category',
            splitLine: {show: false},
            data: ["2009","2010","2011","2012","2013","2014","2015","2016","2017","2018"],
            axisLine: {
                lineStyle: {
                    color: '#ebd647',
                    fontSize: "14px"
                }
            }
        }
    ],
    yAxis: [
        {
            name: "万吨",
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#ebd647',
                    fontSize: "14px"
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#aaa'
                }
            }
        }
    ],
    series: [
        {
            barWidth: 30,
            barBorderRadius: 20,
            name: '万吨',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#0099b9'
                    }, {
                        offset: 1,
                        color: '#1c4fcf'
                    }]),
                }
            },
            data: [750, 1020, 1300, 950, 1190, 1260, 990, 960, 850, 1000]
        }

    ]
};
tenYearsProductEchart.setOption(tenYearsProductEchartOption);
window.onresize = function () {
    chinaMapProductEchart.resize();
    tenYearsProductEchart.resize();
    rateProductEchart.resize();
};