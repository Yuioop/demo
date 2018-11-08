/**功能点 页面加载完成后，异步请求产品列表待接口完善后修改*****接口如下：
 $pager=[
 'recordCount'=>0,//总记录数
 'pageSize'=>12,//页面大小
 'pageCount'=>0,//总页数
 'pageNum'=>intval($pageNum),//当前页号
 'data'=>null
 ];
 ******************************************************************************/
// 初始化图表宽度以防tab切换时宽度变窄
var parentWidthCommon =  $(".commonPadding").width();
$("#varietyPortEchart").css('width',parentWidthCommon);
$("#summaryPortEchart").css('width',parentWidthCommon);

var varietyPortEchart = echarts.init(document.getElementById('varietyPortEchart'));
var summaryPortEchart = echarts.init(document.getElementById('summaryPortEchart'));

// ajax封装函数
function getDataFromUrl(url,param){
    urlData = null;
    $.ajax({
        //提交数据的类型 POST GET
        type: "POST",
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
            if(data.code=="200"){
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
getDataFromUrlPort();//港口

function getDataFromUrlPort() {
    //console.log(11111);
    var param={"id":1};
    // param=JSON.stringify(param);
    var dataPortUrl="http://192.168.43.136:8080/getSituation";
    var urldata=getDataFromUrl(dataPortUrl,param);
     console.log(urldata);

    var html = "<ul id='portAjax' class='infoList'>";
    $.each(urldata,function (i,p) {
        html+='<li>'
        html+=      '<span class="portName">'+urldata[i].port+'</span>'
        html+=      '<span class="portType">'+urldata[i].name+'</span>'
        html+=      '<span>'+urldata[i].product+'</span>'
        html+=      '<span>'+urldata[i].huifen+'</span>'
        html+=      '<span>'+urldata[i].huifafen+'</span>'
        html+=      '<span>'+urldata[i].liufen+'</span>'
        html+=      '<span>'+urldata[i].water+'</span>'
        html+=      '<span>'+urldata[i].nianjieshu+'</span>'
        html+=      '<span>'+urldata[i].fahot+'</span>'
        html+=      '<span class="cur">'+urldata[i].priceNow+'</span>'
        html+=      '<span>'+urldata[i].pricetype+'</span>'
        html+=       '<span>'+urldata[i].publicDate+'</span>'
        html+='</li>'

    });
    html+="</ul>"
    $("#portGetData").html(html);
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
    getPortDetaillData();
}

// 选择港口下拉框
// $("#portChouse").click(function (e) {
//     e.preventDefault();
//     $(this).siblings().slideToggle();
// });

// $(".portsTypesWrap p").click(function (e) {
//     e.preventDefault();
//     var textPort = $(this).text();
//     alert(textPort);
//     $("#portChouse").html(textPort);
//     $(".portsTypes").hide();
//     $.ajax({
//         type: 'GET',
//         url: '../../data/cocalPrice/portData/portData.json',
//         data: textPort,
//         success: function(txt, msg, xhr){
//             console.log(txt);
//             // console.log(msg);
//             var html = "<ul id='portAjax' class='infoList'>";
//             for(var i=0;i<txt.length;i++){
//                 if(txt[i].port == textPort){
//                     console.log(txt[i]);
//                     html+='<li>'
//                     html+=      '<span class="portName">'+txt[i].port+'</span>'
//                     html+=      '<span class="portType">'+txt[i].name+'</span>'
//                     html+=      '<span>'+txt[i].product+'</span>'
//                     html+=      '<span>'+txt[i].huifen+'</span>'
//                     html+=      '<span>'+txt[i].huifafen+'</span>'
//                     html+=      '<span>'+txt[i].liufen+'</span>'
//                     html+=      '<span>'+txt[i].water+'</span>'
//                     html+=      '<span>'+txt[i].nianjieshu+'</span>'
//                     html+=      '<span>'+txt[i].fahot+'</span>'
//                     html+=      '<span class="cur">'+txt[i].priceNow+'</span>'
//                     html+=      '<span>'+txt[i].pricetype+'</span>'
//                     html+=       '<span>'+txt[i].publicDate+'</span>'
//                     html+='</li>'
//                 }
//             }
//             html+="</ul>"
//             $("#portGetData").html(html);
//             var ulList = $(".infoList li").length;
//             //console.log(ulList);
//             //alert(111)
//             if(ulList>=5){
//                 //alert(222)
//                 jQuery(".txtMarquee-top").slide({
//                     mainCell: ".bd ul",
//                     autoPlay: true,
//                     effect: "topMarquee",
//                     vis: 5,
//                     interTime: 50
//                 });
//             }
//             getPortDetaillData();
//         }
//     });
// });


// // 选择港口图表某一项时跟着联动
// function getPortDetaillData(){
//     $(".infoList li").click(function (e) {
//         e.preventDefault();
//         console.log("进来了");
//         var portItemName = $(this).find(".portName").html();
//         var portItemType = $(this).find(".portType").html();
//         alert(portItemName + portItemType);
//         $(this).addClass("blue").siblings(".blue").removeClass("blue");
//         $.ajax({
//             type: 'GET',
//             url: '../../data/cocalPrice/portData/portItemData.json',
//             success: function(data, msg, xhr){
//                 // console.log(data);
//                 var varietyPortEchart = echarts.init(document.getElementById('varietyPortEchart'));
//                 var varietyPortOption = {
//                     title: {
//                         text: '',
//                         left: 'left',
//                         top: 0,
//                         padding: [
//                             0,  // 上
//                             0, // 右
//                             35,  // 下
//                             10, // 左
//                         ],
//                         textStyle: {
//                             color: '#ebd647',
//                             fontSize: 16
//                         }
//                     },
//                     grid: {
//                         left: '6%',
//                         right: '4%',
//                         bottom: 30
//                     },
//                     color: ['#1ed4fd'],
//                     tooltip: {
//                         trigger: 'axis',
//                         axisPointer: {
//                             type: 'line'
//                         }
//                     },
//                     xAxis: [
//                         {
//                             type: 'category',
//                             splitLine: {show: false},
//                             data: [],
//                             axisLine: {
//                                 lineStyle: {
//                                     color: '#ebd647',
//                                     fontSize: "14px"
//                                 }
//                             }
//                         }
//                     ],
//                     yAxis: [
//                         {
//                             name: "元/吨",
//                             type: 'value',
//                             axisLine: {
//                                 lineStyle: {
//                                     color: '#ebd647',
//                                     fontSize: "14px"
//                                 }
//                             },
//                             splitLine: {
//                                 show: true,
//                                 lineStyle: {
//                                     type: 'dashed',
//                                     color: '#aaa'
//                                 }
//                             }
//                         }
//                     ],
//                     series: [
//                         {
//                             name: '平均价格',
//                             type: 'line',
//                             data: [],
//                         }
//                     ]
//                 };
//                 varietyPortEchart.setOption(varietyPortOption);
//                 for(var i= 0;i<data.length;i++){
//                     // 填入数据
//                     varietyPortEchart.setOption({
//                         title: {
//                             text: portItemName + "--"+ portItemType + "历史交易价格",
//                             left: 'left',
//                             top: 0,
//                             padding: [
//                                 0,  // 上
//                                 0, // 右
//                                 25,  // 下
//                                 10, // 左
//                             ],
//                             textStyle: {
//                                 color: '#ebd647',
//                                 fontSize: 16
//                             }
//                         },
//                         xAxis: {
//                             data: data[i].categories
//                         },
//                         series: [{
//                             // 根据名字对应到相应的系列
//                             name: '平均价格',
//                             data: data[i].data
//                         }]
//                     });
//                 }
//             }
//         });
//     });
// }

// // 港口综合交易价格指数
// $(function(){
//     $.ajax({
//         type: 'GET',
//         url: '../../data/cocalPrice/portData/comprehensive.json',
//         success: function(data, msg, xhr){
//             //console.log(data);
//             var summaryPortEchart = echarts.init(document.getElementById('summaryPortEchart'));
//             var summaryPortOption = {
//                 title: {
//                     text: '煤炭综合交易价格指数',
//                     left: 'left',
//                     top: 0,
//                     padding: [
//                         0,  // 上
//                         0, // 右
//                         35,  // 下
//                         10, // 左
//                     ],
//                     textStyle: {
//                         color: '#ebd647',
//                         fontSize: 16
//                     }
//                 },
//                 grid: {
//                     left: '6%',
//                     right: '4%',
//                     bottom: 30
//                 },
//                 color: ['#6D42A2'],
//                 tooltip: {
//                     trigger: 'axis',
//                     axisPointer: {
//                         type: 'line'
//                     }
//                 },
//                 xAxis: [
//                     {
//                         type: 'category',
//                         splitLine: {show: false},
//                         data: data.categories,
//                         axisLine: {
//                             lineStyle: {
//                                 color: '#ebd647',
//                                 fontSize: "14px"
//                             }
//                         }
//                     }
//                 ],
//                 yAxis: [
//                     {
//                         type: 'value',
//                         axisLine: {
//                             lineStyle: {
//                                 color: '#ebd647',
//                                 fontSize: "14px"
//                             }
//                         },
//                         splitLine: {
//                             show: true,
//                             lineStyle: {
//                                 type: 'dashed',
//                                 color: '#aaa'
//                             }
//                         }
//                     }
//                 ],
//                 series: [
//                     {
//                         name: '价格指数',
//                         type: 'line',
//                         smooth: true,
//                         data: data.data,
//                         areaStyle: {
//                             normal: {
//                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                                     offset: 0,
//                                     color: 'rgb(150, 82, 203)'
//                                 }, {
//                                     offset: 1,
//                                     color: 'rgb(67, 56, 136)'
//                                 }])
//                             }
//                         }

//                     }
//                 ]
//             };
//             summaryPortEchart.setOption(summaryPortOption);
//         }
//     });
// })



// //默认左下方港口 显示第一条数据
// $(function () {
//     $.ajax({
//         type: 'POST',
//         url: 'http://192.168.43.136:8080/getSituation?id=1',
//         success: function(data, msg, xhr){
//             console.log(data);
//             var varietyPortEchart = echarts.init(document.getElementById('varietyPortEchart'));
//             var varietyPortOption = {
//                 title: {
//                     text: '',
//                     left: 'left',
//                     top: 0,
//                     padding: [
//                         0,  // 上
//                         0, // 右
//                         35,  // 下
//                         10, // 左
//                     ],
//                     textStyle: {
//                         color: '#ebd647',
//                         fontSize: 16
//                     }
//                 },
//                 grid: {
//                     left: '6%',
//                     right: '4%',
//                     bottom: 30
//                 },
//                 color: ['#1ed4fd'],
//                 tooltip: {
//                     trigger: 'axis',
//                     axisPointer: {
//                         type: 'line'
//                     }
//                 },
//                 xAxis: [
//                     {
//                         type: 'category',
//                         splitLine: {show: false},
//                         data: [],
//                         axisLine: {
//                             lineStyle: {
//                                 color: '#ebd647',
//                                 fontSize: "14px"
//                             }
//                         }
//                     }
//                 ],
//                 yAxis: [
//                     {
//                         name: "元/吨",
//                         type: 'value',
//                         axisLine: {
//                             lineStyle: {
//                                 color: '#ebd647',
//                                 fontSize: "14px"
//                             }
//                         },
//                         splitLine: {
//                             show: true,
//                             lineStyle: {
//                                 type: 'dashed',
//                                 color: '#aaa'
//                             }
//                         }
//                     }
//                 ],
//                 series: [
//                     {
//                         name: '平均价格',
//                         type: 'line',
//                         data: [],
//                     }
//                 ]
//             };
//             varietyPortEchart.setOption(varietyPortOption);
//             for(var i= 0;i<data.length;i++){
//                 // 填入数据
//                 varietyPortEchart.setOption({
//                     title: {
//                         text: "天津港--主焦煤历史交易价格",
//                         left: 'left',
//                         top: 0,
//                         padding: [
//                             0,  // 上
//                             0, // 右
//                             25,  // 下
//                             10, // 左
//                         ],
//                         textStyle: {
//                             color: '#ebd647',
//                             fontSize: 16
//                         }
//                     },
//                     xAxis: {
//                         data: data[0].categories
//                     },
//                     series: [{
//                         // 根据名字对应到相应的系列
//                         name: '平均价格',
//                         data: data[0].data
//                     }]
//                 });
//             }
//         }
//     });
// })

// // 港口图表无缝滚动


// window.onresize = function () {
//     varietyPortEchart.resize();
//     summaryPortEchart.resize();
// };






