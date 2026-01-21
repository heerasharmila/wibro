 function stopVideo() {
    var iframe = document.getElementById("videoFrame");
    iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
  }

  // Pause video when modal is closed
  var videoModal = document.getElementById('videoModal');
  videoModal.addEventListener('hidden.bs.modal', stopVideo);
  
    // video gal1 side when modal is closed
   function stopVideo1() {
    var iframe = document.getElementById("videoFrame1");
	console.log(iframe);
    iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
  }
  var videoModal = document.getElementById('videoModal1');
  videoModal.addEventListener('hidden.bs.modal', stopVideo1);
  
   function stopVideo2() {
    var iframe = document.getElementById("videoFrame2");
	console.log(iframe);
    iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
  }
  var videoModal = document.getElementById('videoModal2');
  videoModal.addEventListener('hidden.bs.modal', stopVideo1);
   
 function stopVideo3() {
    var iframe = document.getElementById("videoFrame3");
	console.log(iframe);
    iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
  }
  var videoModal = document.getElementById('videoModal3');
  videoModal.addEventListener('hidden.bs.modal', stopVideo1);