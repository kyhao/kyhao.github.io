/*
* @Author: Jerry
* @Date:   2017-08-13 21:43:54
* @Last Modified by:   Jerry
* @Last Modified time: 2017-08-14 10:39:02
*/

'use strict';

    // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
var data1 = [Math.random() * 150,Math.random() * 150,Math.random() * 150,Math.random() * 150,Math.random() * 150,Math.random() * 150];
var data2 = ['0','1','2','3','4','5'];
var m_init = 1;
myChart.showLoading();
var n =5;
function m_Ele(){
    n++;
    var ele = Math.random() * 150;
	data1.shift();
	data1.push(ele);
	data2.shift();
	data2.push('' + n);

	$('#m_eTime').html('' + n);
	$('#m_eEle').html(ele + ' W');
    
	if(ele > 100)
	{
        $('#m_eSafe').attr('class', 'danger');
        $('#m_eSafe').html('Danger');
	}else{
        $('#m_eSafe').attr('class', 'success');
        $('#m_eSafe').html('Safe');
    }

    // 指定图表的配置项和数据
    var option = {
    title : {
        text: '电量变化',
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['电量'],
        icon:'circle'
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : data2
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} W'
            }
        }
    ],
    series : [
        {
            name:'电量',
            type:'line',
            data:data1
        }
    ]
};

    // 使用刚指定的配置项和数据显示图表。
    if(m_init){
    	 myChart.hideLoading();
    	 m_init = 0;
    }
   
    myChart.setOption(option);

}

setInterval("m_Ele()", 1000);