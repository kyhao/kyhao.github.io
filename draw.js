/*
* @Author: Jerry
* @Date:   2017-07-30 08:57:32
* @Last Modified by:   Jerry
* @Last Modified time: 2017-07-30 14:50:59
*/

'use strict';

var px = 0;
var py = 0;
var flag = new Boolean(false);
var d = document.getElementById("mdraw");
var s = document.getElementById("show");
var dc = d.getContext("2d");
var f = 0;

function drawbegin(e)
{
	flag=false;
	px = e.clientX - 10;
	py = e.clientY - 30;
}

function drawstop(e)
{
	flag=true;
	var pen = new Path2D();
	switch(f)
	{
		case 1:
		{
			pen.moveTo(px, py);
			pen.lineTo(e.clientX - 10, e.clientY - 30);break;
		}
		case 2:
		{
			pen.rect(px, py, e.clientX - px - 10, e.clientY - py - 30);break;
		}
		case 3:
		{
			dc.clearRect(px, py, e.clientX - px - 10, e.clientY - py - 30);break;
		}
	}
	dc.stroke(pen);
}

function draw(e)
{	
	var x = e.clientX - 10;
	var y = e.clientY - 30;
	s.innerHTML="坐标(" + x + "," + y + ")";
	if(!flag)
	{
		if(f==0)
		{
			var pen = new Path2D();//Object about painter
			pen.moveTo(px, py);
			pen.lineTo(x, y);
			px=x;py=y;
			dc.stroke(pen);
		}
		
	}
}

function pencil()
{
	f = 0;
}
function line()
{
	f = 1;
}
function rect()
{
	f = 2;
}
function clearr()
{
	f = 3;
}