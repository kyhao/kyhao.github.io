/*
* @Author: Jerry
* @Date:   2017-07-30 23:16:13
* @Last Modified by:   Jerry
* @Last Modified time: 2017-07-31 08:33:21
*/

'use strict';

function test(e)
{
	var s = e.elements[0].value;
	var pat = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]+$");
	var t = pat.test(s);
	alert(t);
	return t;
}
