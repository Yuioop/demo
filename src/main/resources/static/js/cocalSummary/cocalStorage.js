/**
 * Created by wlp on 2018/10/22.
 */
var parentWidthStorage =  $(".commonPadding").width();
$("#chinaMapStorageEchart").css('width',parentWidthStorage);
// 国内煤炭分布存储示意图
var chinaMapStorageEchart = echarts.init(document.getElementById('chinaMapStorageEchart'));

initCocalChinaMap();

// 地图点击事件
chinaMapStorageEchart.on("click",function (params) {
    console.log(params.name);
})

function initCocalChinaMap() {
    chinaMapStorageEchart.showLoading();
    $.get('../../data/mapJson/china.json', function (chinaJson) {
        chinaMapStorageEchart.hideLoading();
        echarts.registerMap('china', chinaJson);
        chinaMapStorageEchart.setOption({
            title: {
                text: '国内煤炭存储分布示意图',
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
                    name:'煤炭库存(万吨)',
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
//各环节主要煤炭库存
var itemTacheStorageEchart = echarts.init(document.getElementById('itemTacheStorageEchart'));
var itemTacheStorageEchartOption = {
    title: {
        text: '各环节主要煤炭库存',
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
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line'
        }
    },
    legend: {
        data:[
            {
                name:'主要生产库存',
                textStyle:{
                    fontSize:14,
                },
                icon:'image://./img/icon01.png',//格式为'image://+icon文件地址'，其中image::后的//不能省略
                icon:"circle"
            },
            {
                name:'主要中转库存',
                textStyle:{
                    fontSize:14,
                },
                icon:'image://./img/icon02.png',//格式为'image://+icon文件地址'，其中image::后的//不能省略
                icon:"circle"
            },
            {
                name:'主要消费库存',
                textStyle:{
                    fontSize:14,
                },
                icon:'image://./img/icon03.png',//格式为'image://+icon文件地址'，其中image::后的//不能省略
                icon:"circle"
            },
        ],
        left:"right",
        textStyle:{
            fontSize:14,
            color: '#ebd647',
        }
    },
    grid:{
        left:'3%',
        right:'3%',
        bottom:30,
        containLabel: true
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
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
            name: '主要生产库存',
            type: 'bar',
            barGap: 0,
            // label: labelOption,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#f2c665'
                    }, {
                        offset: 1,
                        color: '#ff2f7e'
                    }]),
                }
            },
            data: [250, 400, 200,300, 200,320, 332, 301, 334, 390]
        },
        {
            name: '主要中转库存',
            type: 'bar',
            // label: labelOption,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#22edfc'
                    }, {
                        offset: 1,
                        color: '#234be8'
                    }]),
                }
            },
            data: [220, 182, 191,300, 200, 100, 205, 250, 234, 290]
        },
        {
            name: '主要消费库存',
            type: 'bar',
            // label: labelOption,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#e0f96a'
                    }, {
                        offset: 1,
                        color: '#0ae332'
                    }]),
                }
            },
            data: [150, 200, 250, 210, 300, 400, 210, 232, 201, 154]
        }
    ]
};
itemTacheStorageEchart.setOption(itemTacheStorageEchartOption);

//最近30天港口库存top5
var itemPortStorageEchart = echarts.init(document.getElementById('itemPortStorageEchart'));
var itemPortStorageEchartOption = {
    title:{
        text: '最近30天港口库存top5',
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
    color:['#f78121','#dc4665', '#33e73d', '#00d7d5', '#895efc'],
    legend: {
        data:[
            {
                name:'天津港',
                textStyle:{
                    fontSize:14,
                },
                icon:'image://./img/icon11.png',//格式为'image://+icon文件地址'，其中image::后的//不能省略
                icon:"circle"
            },
            {
                name:'镇江港',
                textStyle:{
                    fontSize:14,
                },
                icon:'image://./img/icon22.png',//格式为'image://+icon文件地址'，其中image::后的//不能省略
                icon:"circle"
            },
            {
                name:'日照港',
                textStyle:{
                    fontSize:14,
                },
                icon:'image://./img/icon33.png',//格式为'image://+icon文件地址'，其中image::后的//不能省略
                icon:"circle"
            },
            {
                name:'连云港',
                textStyle:{
                    fontSize:14,
                },
                icon:'image://./img/icon44.png',//格式为'image://+icon文件地址'，其中image::后的//不能省略
                icon:"circle"
            },
            {
                name:'京唐港',
                textStyle:{
                    fontSize:14,
                },
                icon:'image://./img/icon55.png',//格式为'image://+icon文件地址'，其中image::后的//不能省略
                icon:"circle"
            }
        ],
        left:"right",
        textStyle:{
            fontSize:14,
            color: '#ebd647',
        }
    },
    grid:{
        left:'3%',
        right:'3%',
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
            // boundaryGap: false,
            data: ["2018/10/17", "2018/10/18", "2018/10/19","2018/10/20", "2018/10/22","2018/10/23","2018/10/24"],
            axisLabel: {
                interval:0//显示全部文字
            },
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
            name: "万吨",
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
            name:"天津港",
            type: "line",
            stack: '总量',
            smooth: true,
            data:[1200, 1500, 1650, 990, 985, 1340, 1250],
            areaStyle: {normal: {}}
        },
        {
            name:"镇江港",
            type: "line",
            stack: '总量',
            smooth: true,
            data:[1220, 1682, 991, 1434, 990, 1330, 910],
            areaStyle: {normal: {}}
        },
        {
            name:"日照港",
            type: "line",
            stack: '总量',
            smooth: true,
            data:[1550, 1232, 1020, 1540, 1090, 1330, 1410],
            areaStyle: {normal: {}}
        },
        {
            name:"连云港",
            type: "line",
            stack: '总量',
            smooth: true,
            data:[1320, 1332, 1501, 1334, 1390, 1030, 1320],
            areaStyle: {
                normal: {
                }
            }
        },
        {
            name:"京唐港",
            type: "line",
            stack: '总量',
            smooth: true,
            data:[1520, 1032, 1010, 1450, 1290, 1330, 1360],
            areaStyle: {normal: {}},
        }
    ]
};
itemPortStorageEchart.setOption(itemPortStorageEchartOption);

//近10年煤炭存储情况
var tenYearsStorageEchart = echarts.init(document.getElementById('tenYearsStorageEchart'));
var tenYearsStorageEchartOption = {
    title: {
        text: "近10年煤炭存储情况",
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
    color: ['#1ed4fd'],
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
            name: '万吨',
            type: 'line',
            data: [750, 1020, 1300, 950, 1190, 1260,990,960,850,1000],
        }
    ]
};
tenYearsStorageEchart.setOption(tenYearsStorageEchartOption);
window.onresize = function () {
    chinaMapStorageEchart.resize();
    itemTacheStorageEchart.resize();
    itemPortStorageEchart.resize();
    tenYearsStorageEchart.resize();
};



