/*
* @Author: Jerry
* @Date:   2017-08-11 14:51:31
* @Last Modified by:   Jerry
* @Last Modified time: 2017-08-14 17:00:27
*/

'use strict';

/*******************初始化显示*************************/

$('#m_mAddNode').hide();
$('#m_mShowNode').hide();
$('#m_mShowData').hide();

function m_setDisplay(){
	//var wndw = $(window).width();
	/* Act on the event */
	var wndh = $(window).height();
	var headh = $('#m_head').height();
	$('#m_cnav').height(wndh-headh-4);
	$('#m_map').height(wndh-headh-2);
}

function m_init(){
	m_setDisplay();
	$("#m_sCity").load("data/city.txt");
	$("#m_sArea").load("data/cityArea.txt .m_a0");
	$("#m_sPos").load("data/cityPos.txt .m_a00");
}

m_init();

$(window).resize(function(event) {
	/* Act on the event */
	m_setDisplay();
});

/****************************************************************/
/***********************百度地图API功能**************************/
var m_map;
var m_point = new Array;
//var markers = [];
function loadJScript() {
	var script = document.createElement("script");
	//script.type = "text/javascript";
	script.src = "http://api.map.baidu.com/api?v=2.0&ak=3YrL81zIjUUnMuczCGQS2ZcM0XAsLTo4&s=1&callback=init";
	$('#m_main').append(script);
}
function init() {
	var map = new BMap.Map("allmap");            // 创建Map实例
	//var point = new BMap.Point(116.404, 39.915); // 创建点坐标
	map.centerAndZoom("重庆邮电大学",15);                 
	map.enableScrollWheelZoom();                 //启用滚轮放大缩小
	addMenu(map);								//添加右键菜单
	addListener(map);							//添加监听事件
	//var markerClusterer = new BMapLib.MarkerClusterer(map, {markers:markers});
	m_map = map;
}  
window.onload = loadJScript;  //异步加载地图

function addMenu(map){
	var menu = new BMap.ContextMenu();
	var txtMenuItem = [
		{
			text:'添加节点',
			callback:function(){addMark()}
		},
		{
			text:'缩小地图',
			callback:function(){map.zoomOut()}
		},
		{
			text:'放大地图',
			callback:function(){map.zoomIn()}
		}
	];
	for(var i=0; i < txtMenuItem.length; i++){
		menu.addItem(new BMap.MenuItem(txtMenuItem[i].text,txtMenuItem[i].callback,100));
	}
	map.addContextMenu(menu);
}

function addListener(map){
	map.addEventListener("rightclick",function(e){		//鼠标右击获取坐标
		m_point[0] = e.point.lng;
		m_point[1] = e.point.lat;
		console.log(m_point);
	});
}

/**************************************************************/
/******************头部导航栏功能******************************/

$('#m_sCity').change(function(event) {
	$('#m_sPos').load("data/cityPos.txt .m_a00");
	AreaC($('#m_sCity').val());
});

var m_navf = 0;
function AreaC(e){
	m_navf = e;
	var path = 'data/cityArea.txt .m_a';
	path = path + e;
	$('#m_sArea').load(path);
}

$('#m_sArea').change(function(event) {
	PosC($('#m_sArea').val())
});

function PosC(e){
	var path = "data/cityPos.txt .m_a";
	if(e == 0 || e == '0'){
		path = path + 0;
	}else{
		path = path + m_navf;
	}
	path = path + e;
	$('#m_sPos').load(path);
}

/**************************************************************/
/******************节点相关************************************/
function addMark(){
	if(m_map != undefined)
	{
		var m_nodeSF = 1;
		var marker = new BMap.Marker(new BMap.Point(m_point[0], m_point[1]));
		m_map.addOverlay(marker);
		//markers.push(marker);
		$('#m_hideNode').on('click',function(event){
			if(m_nodeSF){
				m_nodeSF = 0;
				marker.hide();
			}else{
				m_nodeSF = 1;
				marker.show();
			}
		})
	}
}

/**************************************************************/
/***********************登入***********************************/

$('#m_blogin').click(function(event) {
	var tmp = $('#m_mlogin').serializeArray();
	if(tmp[0].value == "adm" && tmp[1].value == "123456"){
		$("#my_login").modal('hide');
		$('#m_name').val('');
		$('#m_pass').val('');
	}else{
		$("#my_login label").css('color', 'red');
		alert('密码错误');
	}
});

$('#m_bclose').click(function(event) {
	$("#my_login").modal('hide');
	document.write("<strong>You are too Young</strong>");
});

$('#m_quit').click(function(event) {
	$("#my_login").modal('show');
});

/**************************************************************/


$('#m_addNode').click(function(event) {
	$('#allmap').hide('fast');
	$('#m_mAddNode').show('fast');
	$('#m_mShowNode').hide();
	$('#m_mShowData').hide();
});

$('.m_nmain').click(function(event) {
	$('#allmap').show('fast');
	$('#m_mAddNode').hide('fast');
	$('#m_mShowNode').hide();
	$('#m_mShowData').hide();
});

$('#m_SenorShow').click(function(event) {
	$('#allmap').hide();
	$('#m_mAddNode').hide();
	$('#m_mShowNode').show('fast');
	$('#m_mShowData').hide();
});

$('#m_bAddNode').click(function(event) {
	var tmp = $('#m_mform').serializeArray();
	console.log(tmp[0].value);
	m_point[0] = tmp[0].value;
	m_point[1] = tmp[1].value;
	addMark();
});

$('#m_nchat').click(function(event) {
	window.open ('chat.html', 'newwindow', 'height=600, width=850, top=200, left=200, toolbar=no, menubar=no,resizable=yes, location=no ,status=yes');
});

$('#m_textDis').click(function(event) {
	alert('message');
	if(m_map != undefined)
	{

	}
});