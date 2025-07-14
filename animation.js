const accelamount = 0.2;

function setupScrollControlledVideo(videoId, viewId, videoSrc) {
  const video = document.getElementById(videoId);
  const view = document.getElementById(viewId);
  let progress = 0;
  let delay = 0;

  video.src = videoSrc;
  video.muted = true;
  video.setAttribute('playsinline', '');
  video.setAttribute('autoplay', '');

  video.load(); // ensures proper loading on iOS

  video.onloadedmetadata = () => {
    video.play().catch(() => {}); // Required by iOS to activate autoplay via user interaction

    const videoDuration = video.duration;
    const height = view.offsetHeight;

    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      duration: 4 * height,
      triggerElement: view,
      triggerHook: 0.5,
      offset: video.offsetHeight / 2
    })
      .setPin(view)
      .addTo(controller)
      // .addIndicators()
      .on("progress", e => {
        progress = Math.floor(100 * e.progress);
      });

    setInterval(() => {
      delay += (progress - delay) * accelamount;
      video.currentTime = videoDuration * delay / 100 - 0.01;
    }, 20);
  };
}

// Setup all videos
setupScrollControlledVideo("video1", "view2", "images/herospin2.mp4");
setupScrollControlledVideo("video2", "view3", "images/z_spin.mp4");
setupScrollControlledVideo("video3", "view4", "images/paralax2.mp4");
