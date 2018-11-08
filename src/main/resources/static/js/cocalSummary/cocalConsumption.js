/**
 * Created by wlp on 2018/10/23.
 */
var parentWidthProduct =  $(".commonPadding").width();
$("#chinaMapProductEchart").css('width',parentWidthProduct);

// 国内各省煤炭消费量
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
                text: '国内各省煤炭消费量',
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
                    name:'煤炭消费(万吨)',
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

// 全国主要煤耗比重图
var rateConsumptionEchart = echarts.init(document.getElementById('rateConsumptionEchart'));
var rateConsumptionEchartOption = {
    title: {
        text: "全国主要煤耗比重图",
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
        data: ["钢铁","建材","电力","其他"]
    },
    series : [
        {
            name: '煤耗比重（万吨）',
            type: 'pie',
            radius : '50%',
            center: ['50%', '50%'],
            selectedMode:'single',
            data: [
                {value:300, name:'钢铁'},
                {value:200, name:'建材'},
                {value:180, name:'电力'},
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
rateConsumptionEchart.setOption(rateConsumptionEchartOption);


// 全国主要煤耗十年消耗折线图
var tenYearsConsumptionEchart = echarts.init(document.getElementById('tenYearsConsumptionEchart'));
var tenYearsConsumptionEchartOption = {
    title: {
        text: "全国主要煤耗十年消耗折线图",
        left: 'left',
        top: 0,
        padding: [
            0,  // 上
            0, // 右
            55,  // 下
            10, // 左
        ],
        textStyle: {
            color: '#ebd647',
            fontSize: 16
        }
    },
    color:['#E529FC','#3398DB', '#34A853', '#FBBC05'],
    legend: {
        right: 10,
        top: 20,
        bottom: 20,
        data:["钢铁","建材","电力","化工"],
        textStyle:{
            fontSize:12,
            color:'#fff'
        }
    },
    grid:{
        left:'6%',
        right:'4%',
        bottom:30
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
        }
    },
    xAxis: [
        {
            type: 'category',
            splitLine:{show:false},
            boundaryGap: false,
            data: ["2009","2010","2011","2012", "2013", "2014","2015", "2016","2017","2018"],
            axisLine:{
                lineStyle:{
                    color:'#ebd647',
                    fontSize: "14px"
                }
            }
        }
    ],
    yAxis : [
        {
            name: "元/吨",
            type : 'value',
            axisLine:{
                lineStyle:{
                    color:'#ebd647',
                    fontSize: "14px"
                }
            },
            splitLine:{
                show:true,
                lineStyle: {
                    type: 'dashed',
                    color: '#aaa'
                }
            }
        }
    ],
    series:[
        {
            "name":"钢铁",
            "type": "line",
            "stack": "总量",
            "data":[1200, 1500, 1650, 990, 985, 1340, 1250,1200,2300,996]
        },
        {
            "name":"建材",
            "type": "line",
            "stack": "总量",
            "data":[1220, 1682, 991, 1434, 990, 1330, 910,1200,1320,1500]
        },
        {
            "name":"电力",
            "type": "line",
            "stack": "总量",
            "data":[1550, 1232, 1020, 1540, 1090, 1330, 1410,1500,1300,990]
        },
        {
            "name":"化工",
            "type": "line",
            "stack": "总量",
            "data":[1320, 1332, 1501, 1334, 1390, 1030, 1320,1100,1200,1420]
        }

    ]
};
tenYearsConsumptionEchart.setOption(tenYearsConsumptionEchartOption);
window.onresize = function () {
    chinaMapProductEchart.resize();
    tenYearsConsumptionEchart.resize();
    rateProductEchart.resize();
};