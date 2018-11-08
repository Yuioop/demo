
// 初始化图表宽度以防tab切换时宽度变窄
var parentWidthCommon =  $(".commonPadding").width();
$("#varietyTypeEchart").css('width',parentWidthCommon);
$("#summaryTypeEchart").css('width',parentWidthCommon);

var varietyTypeEchart = echarts.init(document.getElementById('varietyTypeEchart'));
var summaryTypeEchart = echarts.init(document.getElementById('summaryTypeEchart'));

// ajax封装函数
function getDataFromUrl(url,param){
    urlData = null;
    $.ajax({
        //提交数据的类型 POST GET
        type: "GET",
        //提交的接口地址
        url: url,//221.204.48.159:8081/appLogin http://10.52.47.91/appLogin
        headers: {
            'Content-Type': 'application/json'
        },
        //提交的数据格式
        contentType: "application/json;charset=utf-8",
        //异步调用方式
        async: false,
        //提交的数据
        data:param,
        //dataType:"json",
        ////超时时间设置为10秒；
        //timeout: 2000,
        //成功返回之后调用的函数
        success: function(data){
            //登录返回数据格式{"code":"0","msg":"","data":"{}}
            var code=data.code;
//				alert("111 code:"+ JSON.stringify(code));
            //alert("111 data:"+ JSON.stringify(data));
            if(data.code=="0"){
                urlData = data;
                console.log("aaaaa");


            }
            else{
                console.log("bbbbb");
                urlData = data;
                return data.code;
            }
        },
        error: function(xhr, type, errorThrown) {
            //alert("111 error");
            console.log("响应失败了！！！！");
            return -1;
        }
    });
    return urlData;
}
//传值1，请求第一页的数据
getDataFromUrlType();//煤种

function getDataFromUrlType() {
    console.log(11111);
    var param={};
    param=JSON.stringify(param);
    var dataTypeUrl="../../data/cocalPrice/typeData/typeData.json";
    var urldata=getDataFromUrl(dataTypeUrl,param);
    console.log(urldata);

    var html = "<ul id='typeAjax' class='infoList'>";
    $.each(urldata,function (i,p) {
        html += '<li>'
        html+=      '<span class="typeName">'+urldata[i].name+'</span>'
        html+=      '<span>'+urldata[i].product+'</span>'
        html+=      '<span>'+urldata[i].huifen+'</span>'
        html+=      '<span>'+urldata[i].huifafen+'</span>'
        html+=      '<span>'+urldata[i].liufen+'</span>'
        html+=      '<span>'+urldata[i].water+'</span>'
        html+=      '<span>'+urldata[i].nianjieshu+'</span>'
        html+=      '<span>'+urldata[i].fahot+'</span>'
        html+=      '<span class="cur">'+urldata[i].priceNow+'</span>'
        html+=      '<span>'+urldata[i].pricetype+'</span>'
        html+=      '<span>'+urldata[i].publicDate+'</span>'
        html+='</li>'
    });
    html+="</ul>"

    $("#typeGetData").html(html);
    var ulList = $(".infoList li").length;
    //console.log(ulList);
    if(ulList>=5){
        jQuery(".txtMarquee-top").slide({
            mainCell: ".bd ul",
            autoPlay: true,
            effect: "topMarquee",
            vis: 5,
            interTime: 50
        });
    }
    getTypeDetaillData();
}

// 选择煤种下拉框
$("#typeChouse").click(function (e) {
    e.preventDefault();
    $(this).siblings().slideToggle();
});
$(".kindsTypesWrap p").click(function (e) {
    e.preventDefault();
    var textType = $(this).text();
    //alert(textType);
    $("#typeChouse").html(textType);
    $(".kindsTypes").hide();
    $.ajax({
        type: 'GET',
        url: '../../data/cocalPrice/typeData/typeData.json',
        success: function(txt, msg, xhr){
            console.log(txt);
            // console.log(msg);
            var html = "<ul id='typeAjax' class='infoList'>";
            for(var i=0;i<txt.length;i++){
                if(txt[i].name == textType){
                    console.log(txt[i]);
                    html+='<li>'
                    html+=      '<span class="typeName">'+txt[i].name+'</span>'
                    html+=      '<span>'+txt[i].product+'</span>'
                    html+=      '<span>'+txt[i].huifen+'</span>'
                    html+=      '<span>'+txt[i].huifafen+'</span>'
                    html+=      '<span>'+txt[i].liufen+'</span>'
                    html+=      '<span>'+txt[i].water+'</span>'
                    html+=      '<span>'+txt[i].nianjieshu+'</span>'
                    html+=      '<span>'+txt[i].fahot+'</span>'
                    html+=      '<span class="cur">'+txt[i].priceNow+'</span>'
                    html+=      '<span>'+txt[i].pricetype+'</span>'
                    html+=      '<span>'+txt[i].publicDate+'</span>'
                    html+='</li>'
                }
            }
            html+="</ul>"
            $("#typeGetData").html(html);
            var ulList = $(".infoList li").length;
            //console.log(ulList);
            //alert(111)
            if(ulList>=5){
                //alert(222)
                jQuery(".txtMarquee-top").slide({
                    mainCell: ".bd ul",
                    autoPlay: true,
                    effect: "topMarquee",
                    vis: 5,
                    interTime: 50
                });
            }
            getTypeDetaillData();
        }
    });
});

// 选择煤种图表某一项时跟着联动
function getTypeDetaillData(){
    $(".infoList li").click(function (e) {
        e.preventDefault();
        console.log("进来了");
        var typeItemName = $(this).find(".typeName").html();
        $(this).addClass("blue").siblings(".blue").removeClass("blue");
        $.ajax({
            type: 'GET',
            url: '../../data/cocalPrice/typeData/typeItemData.json',
            success: function(txtType, msg, xhr){
                //console.log(txtType);
                var varietyTypeEchart = echarts.init(document.getElementById('varietyTypeEchart'));
                var varietyTypeOption = {
                    title:{
                        text:'',
                        left:'left',
                        top: 0,
                        padding: [
                            0,  // 上
                            0, // 右
                            35,  // 下
                            10, // 左
                        ],
                        textStyle: {
                            color: '#ebd647',
                            fontSize:16
                        }
                    },
                    grid:{
                        left:'6%',
                        right:'4%',
                        bottom:30
                    },
                    color:['#EA4335'],
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
                            data: [],
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
                    series: [
                        {
                            name: '平均价格',
                            type: 'line',
                            smooth: true,
                            data: [],
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgb(255, 158, 68)'
                                    }, {
                                        offset: 1,
                                        color: 'rgb(255, 70, 131)'
                                    }])
                                }
                            },

                        }
                    ]
                };
                varietyTypeEchart.setOption(varietyTypeOption);
                for(var i=0;i<txtType.length;i++){
                    if(txtType[i].nameType == typeItemName){
                        // 填入数据
                        varietyTypeEchart.setOption({
                            title:{
                                text:txtType[i].nameType + "在热门城市交易价格top6",
                                left:'left',
                                top: 0,
                                padding: [
                                    0,  // 上
                                    0, // 右
                                    35,  // 下
                                    10, // 左
                                ],
                                textStyle: {
                                    color: '#ebd647',
                                    fontSize:16
                                }
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    splitLine:{show:false},
                                    data: txtType[i].categories,
                                    axisLine:{
                                        lineStyle:{
                                            color:'#ebd647',
                                            fontSize: "14px"
                                        }
                                    }
                                }
                            ],
                            series: [
                                {
                                    name: '价格指数',
                                    type: 'line',
                                    smooth: true,
                                    data: txtType[i].data,
                                    areaStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                offset: 0,
                                                color: 'rgb(255, 158, 68)'
                                            }, {
                                                offset: 1,
                                                color: 'rgb(255, 70, 131)'
                                            }])
                                        }
                                    },

                                }
                            ]
                        });
                    }
                }
            }
        });
    });
};



// 各港口各煤种价格
$(function(){
    $.ajax({
        type: 'GET',
        url: '../../data/cocalPrice/typeData/compre.json',
        success: function(data, msg, xhr){
            var summaryTypeEchart = echarts.init(document.getElementById('summaryTypeEchart'));
            var summaryTypeOption = {
                title:{
                    left:'center',
                    top: 0,
                    padding: [
                        0,  // 上
                        0, // 右
                        35,  // 下
                        10, // 左
                    ],
                    textStyle: {
                        color: '#fff',
                        fontSize:18
                    }
                },
                color:['#E529FC','#3398DB', '#34A853', '#FBBC05', '#EA4335'],
                legend: {
                    data:data.legend,
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
                        data: ["动力煤", "炼焦煤", "无烟煤","喷吹煤", "焦煤","肥煤","气煤"],
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
                series:data.series
            };
            summaryTypeEchart.setOption(summaryTypeOption);
        }
    });
})

//默认做下方煤种显示第一条数据
$(function () {
    $.ajax({
        type: 'GET',
        url: '../../data/cocalPrice/typeData/typeItemData.json',
        success: function(txtType, msg, xhr){
            //console.log(txtType);
            var varietyTypeEchart = echarts.init(document.getElementById('varietyTypeEchart'));
            var varietyTypeOption = {
                title:{
                    text:'',
                    left:'left',
                    top: 0,
                    padding: [
                        0,  // 上
                        0, // 右
                        35,  // 下
                        10, // 左
                    ],
                    textStyle: {
                        color: '#ebd647',
                        fontSize:16
                    }
                },
                grid:{
                    left:'6%',
                    right:'4%',
                    bottom:30
                },
                color:['#EA4335'],
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
                        data: [],
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
                series: [
                    {
                        name: '平均价格',
                        type: 'line',
                        smooth: true,
                        data: [],
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgb(255, 158, 68)'
                                }, {
                                    offset: 1,
                                    color: 'rgb(255, 70, 131)'
                                }])
                            }
                        },

                    }
                ]
            };
            varietyTypeEchart.setOption(varietyTypeOption);
            for(var i=0;i<txtType.length;i++){
                // 填入数据
                varietyTypeEchart.setOption({
                    title:{
                        text:txtType[0].nameType + "在热门城市交易价格top6",
                        left:'left',
                        top: 0,
                        padding: [
                            0,  // 上
                            0, // 右
                            35,  // 下
                            10, // 左
                        ],
                        textStyle: {
                            color: '#ebd647',
                            fontSize:16
                        }
                    },
                    xAxis: [
                        {
                            type: 'category',
                            splitLine:{show:false},
                            data: txtType[0].categories,
                            axisLine:{
                                lineStyle:{
                                    color:'#ebd647',
                                    fontSize: "14px"
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            name: '价格指数',
                            type: 'line',
                            smooth: true,
                            data: txtType[0].data,
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgb(255, 158, 68)'
                                    }, {
                                        offset: 1,
                                        color: 'rgb(255, 70, 131)'
                                    }])
                                }
                            },

                        }
                    ]
                });
            }
        }
    });
})

window.onresize = function () {
    varietyTypeEchart.resize();
    summaryTypeEchart.resize();
};



