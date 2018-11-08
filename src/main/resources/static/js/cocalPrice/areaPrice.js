/**
 * Created by wlp on 2018/10/17.
 */
var parentWidth0 =  $(".commonPadding").width();
$("#varietyAreaEchart").css('width',parentWidth0);
$("#summaryAreaEchart").css('width',parentWidth0);

var city_str = '';
for (var i = 0; i < provinceArr.length; i++) {
    city_str += '<li class="index_mask_li" selectedIndex=' + i + '>' + provinceArr[i] + '</li>';
}
//放到相应的位置
$(".index_mask_list_city").html(city_str);

//省
$("#index_mask_select_city").on("click", function (e) {
    $(".index_mask_list_city").css({"display": "block"});
    $(".index_mask_list_area").css({"display": "none"});
    //阻止默认事件
    stopPropagation(e);
});
//市
$("#index_mask_select_area").on("click", function (e) {
    $(".index_mask_list_area").css({"display": "block"});
    $(".index_mask_list_city").css({"display": "none"});
    stopPropagation(e);
});

//省份点击select时进行选择(同时进行模拟,select的onchange事件)
$(".index_mask_list_city li").on("click", function () {
    $("#index_mask_select_area").html("请选择");
    var key_value = $(this).attr("selectedindex");
    console.log($(this).html());//获取选择的省
    $("#index_mask_select_city").html($(this).html());
    $(".index_mask_list_city").css({"display": "none"});
    var html = '';
    $.each(cityArr[key_value], function (i, n) {
        html += '<li class="index_mask_li" selectedIndex=' + i + '>' + n + '</li>';

    })
    $(".index_mask_list_area").html(html);

});
//市点击，赋值到相应位置，同时进行显示隐藏操作（li是新生成元素，需要使用事件委托进行书写）
$(".index_mask_list_area").on("click", "li", function () {
    $("#index_mask_select_area").html($(this).html());
     console.log($(this).html());//获取选择的市
    $(".index_mask_list_area").css({"display": "none"});

});

//点击空白处，下拉框收起
$(document).bind("click", function () {
    $(".index_mask_list").css({"display": "none"});
});

//阻止默认事件
function stopPropagation(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }
}


var varietyAreaEchart = echarts.init(document.getElementById('varietyAreaEchart'));
var varietyAreaOption = {
    title: {
        text: '北京市-主焦煤历史交易价格',
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
    grid: {
        left: '6%',
        right: '4%',
        bottom: 30
    },
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
            data: ['2018年4月', '2018年5月', '2018年6月', '2018年7月', '2018年8月', '2018年9月', '2018年10月'],
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
            name:"元/吨",
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
            name: '平均价格',
            type: 'line',
            data: [600, 680, 580, 700, 490, 510, 500],
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(30, 212, 253)'
                    }, {
                        offset: 1,
                        color: 'rgb(15, 49, 111)'
                    }])
                }
            }

        }
    ]
};
varietyAreaEchart.setOption(varietyAreaOption);


// 综合交易价格指数
var summaryAreaEchart = echarts.init(document.getElementById('summaryAreaEchart'));
var summaryAreaOption = {
    title: {
        text: '煤炭综合交易价格指数',
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
    grid: {
        left: '6%',
        right: '4%',
        bottom: 30
    },
    color: ['#6D42A2'],
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
            data: ['2018年4月', '2018年5月', '2018年6月', '2018年7月', '2018年8月', '2018年9月', '2018年10月'],
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
            name: '平均价格',
            type: 'line',
            smooth: true,
            data: [680, 710, 650, 600, 930, 640,700],
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(150, 82, 203)'
                    }, {
                        offset: 1,
                        color: 'rgb(67, 56, 136)'
                    }])
                }
            }

        }
    ]
};
summaryAreaEchart.setOption(summaryAreaOption);

$(".infoList li").click(function (e) {
    e.preventDefault();
    console.log("进来了");
    var areaItemName = $(this).find(".areaName").html();
    var areaItemType = $(this).find(".areaType").html();
    alert(areaItemName + areaItemType);
    $(this).addClass("blue").siblings(".blue").removeClass("blue");
});

jQuery(".txtMarquee-top").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "topMarquee",
    vis: 5,
    interTime: 50
});
window.onresize = function () {
    summaryAreaEchart.resize();
    varietyAreaEchart.resize();
};
