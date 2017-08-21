/*
* @Author: Jerry
* @Date:   2017-07-30 16:24:21
* @Last Modified by:   Jerry
* @Last Modified time: 2017-07-30 17:10:21
*/

'use strict';


if(window.FileReader)
{
	var file = new File([],"F:\\me.txt",{type: "text/plain",});
	let f = new FileReader(); 
	f.readAsText(file);
	f.onload = function() {  
    	alert(this.result);  
	}; 
}
else
{
	alert("mess");
}
