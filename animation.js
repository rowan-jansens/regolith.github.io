
var duration1 = $('#video1').height();
var video1 = $('#video1').get(0);
var progressvalue1 = 0; //tracks the position of the scroll
video1.src = "images/herospin2.mp4";


video1.onloadedmetadata = function () {
  console.log('metadata loaded!');
  const view2 = document.getElementById("view2");
  const main = document.getElementById("main");
  var controller = new ScrollMagic.Controller();

  // create a scene
  var scene1 = new ScrollMagic.Scene({
    duration: 6 * duration1,
    triggerElement: view2,
    triggerHook: 0.5,
    offset: video1.offsetHeight / 2
  })
    .setPin(view2)
    .addTo(controller)
    // .addIndicators()
    .on("progress", function (e) {
      progressvalue1 = Math.floor(100 * e.progress);
    });

};


// update video position
let accelamount = 0.2;
let delay1 = 0;
setInterval(() => {
  delay1 += (progressvalue1 - delay1) * accelamount;
  // console.log(progressvalue, delay);
  video1.currentTime = video1.duration * delay1 / 100 - 0.01;
}, 20);



// =============== second video ============



var duration2 = $('#video2').height();
var video2 = $('#video2').get(0);
var progressvalue2 = 0; //tracks the position of the scroll
video2.src = "images/z_spin.mp4";


video2.onloadedmetadata = function () {
  console.log('metadata loaded!');
  const view3 = document.getElementById("view3");
  const main = document.getElementById("main");
  var controller2 = new ScrollMagic.Controller();

  // create a scene
  var scene2 = new ScrollMagic.Scene({
    duration: 6 * duration2,
    triggerElement: view3,
    triggerHook: 0.5,
    offset: video2.offsetHeight / 2
  })
    .setPin(view3)
    .addTo(controller2)
    // .addIndicators()
    .on("progress", function (e) {
      progressvalue2 = Math.floor(100 * e.progress);
    });

};


let delay2 = 0;
setInterval(() => {
  delay2 += (progressvalue2 - delay2) * accelamount;
  // console.log(progressvalue, delay);
  video2.currentTime = video2.duration * delay2 / 100 - 0.01;
}, 20);

// =============== third video ============



var duration3 = $('#video3').height();
var video3 = $('#video3').get(0);
var progressvalue3 = 0; //tracks the position of the scroll
video3.src = "images/paralax2.mp4";


video3.onloadedmetadata = function () {
  console.log('metadata loaded!');
  const view4 = document.getElementById("view4");
  const main = document.getElementById("main");
  var controller3 = new ScrollMagic.Controller();

  // create a scene
  var scene3 = new ScrollMagic.Scene({
    duration: 6 * duration3,
    triggerElement: view4,
    triggerHook: 0.5,
    offset: video3.offsetHeight / 2
  })
    .setPin(view4)
    .addTo(controller3)
    // .addIndicators()
    .on("progress", function (e) {
      progressvalue3 = Math.floor(100 * e.progress);
    });

};


let delay3 = 0;
setInterval(() => {
  delay3 += (progressvalue3 - delay3) * accelamount;
  // console.log(progressvalue, delay);
  video3.currentTime = video3.duration * delay3 / 100 - 0.01;
}, 20);



