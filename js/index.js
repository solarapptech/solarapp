// document.addEventListener('deviceready', onDeviceReady, false);

// function onDeviceReady() {
	
// 	var url;
// 	url = "https://stompblocks.wordpress.com/";
	
// 	showHelp(url);

// 	function showHelp(url) {

// 		var target = "_blank";

// 		var options = "location=yes,hidden=yes";

// 		inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);

// 		inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);

// 		inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);

// 		inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);

// 	}

// 	function loadStartCallBack() {
	
// 		$('#status-message').text("plaese wait ...");
	
// 	}

// 	function loadStopCallBack() {
	
// 		if (inAppBrowserRef != undefined) {
			
// 			// inAppBrowserRef.insertCSS({ code: "body{font-size: 25px;}" });
		
// 			$('#status-message').text("");
		
// 			inAppBrowserRef.show();
		
// 		}

// 	}

// 	function loadErrorCallBack(params) {
		
// 		$('#status-message').text("");
		
// 		var scriptErrorMesssage =
// 		   "alert('problem in loading');"
		
// 		inAppBrowserRef.executeScript({ code: scriptErrorMesssage }, executeScriptCallBack);
		
// 		inAppBrowserRef.close();
		
// 		inAppBrowserRef = undefined;
		
// 	}

// 	function executeScriptCallBack(params) {
		
// 		if (params[0] == null) {
// 			$('#status-message').text("problem in loading");
// 		}
		
// 	}

// }

var refresh = document.getElementById('refrescar');

refresh.addEventListener('click',function (){
    location.replace(location.href);
})

function getInfo1 (message){
    const getbcv = document.getElementById ('bcvr')
    getbcv.textContent = message
}

const eventSource = new EventSource(`http://192.168.1.108:8000/info1`);
eventSource.onmessage = function (event){
    getInfo1(event.data)
}

function getInfo2 (message2){
    const getmonitor = document.getElementById ('monitorr')
    getmonitor.textContent = message2
}

const eventSource2 = new EventSource(`http://192.168.1.108:8000/info2`);
eventSource2.onmessage = function (event2){
    getInfo2(event2.data)
}



function getInfo3 (message3){
    const getfecha = document.getElementById ('fecha')
    getfecha.textContent = message3
}



const eventSource3 = new EventSource(`http://192.168.1.108:8000/info3`);
eventSource3.onmessage = function (event3){
    getInfo3(event3.data)
}




let count = 1000;

function errorMessage (ermessage){
    const e404 = document.getElementById('err')
    const item = document.createElement('p')
    item.textContent = ermessage
    e404.appendChild(item)
}



eventSource.onerror = function(){
    errorMessage ('Error, no se pudo establecer conexión con el servidor')
     const timer = setInterval(function(){
     count--;
     if(count == 0){
         location.replace(location.href);
     }
 })
    eventSource.close()
}