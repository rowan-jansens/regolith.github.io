
var videoTarget = $('#video2');
var duration = videoTarget.height();
var video = $('#video2').get(0);
var progressvalue = 0;
var vid_height = 0;
var currentTime = 0;
var videoLength;



  const view3 = document.getElementById("view3");
  const main = document.getElementById("main");



  


  var video = $('#video2').get(0);
  
  video.onloadedmetadata = function() {




    console.log('metadata loaded!');


    videoheight = video.offsetHeight;
    videoLength = video.duration;
    offsetTop = view2.scrollTop;
    
    console.log(videoheight, videoLength);


    var controller = new ScrollMagic.Controller();
  
  
        // create a scene
        var scene = new ScrollMagic.Scene({
          duration: 6*duration,
          triggerElement: view3, 
          triggerHook: 0.5,
          offset: videoheight/2
        })
        .setPin(view3)
        .addTo(controller)
        .addIndicators()
        .on("progress", function(e) {
        progressvalue = Math.floor(100 * e.progress);
        });
    

        };


        let accelamount = 0.2;
  let delay = 0;

  setInterval(() => {
  delay += (progressvalue -delay) * accelamount;
  console.log(progressvalue, delay, vid_height);
  
  video.currentTime = videoLength * delay/100 - 0.01;
  },20);
      
  
    video.src="images/z_spin.mp4";
  
  