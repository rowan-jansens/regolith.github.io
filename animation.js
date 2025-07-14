// ============ animation.js (Fixed) ============

window.onload = function () {
  setTimeout(() => {
    document.getElementById('view1')?.classList.add('fade-in');
  }, 100);
};

const accelAmount = 0.2;

function setupScrollVideo({ videoId, containerId, src, durationMultiplier }) {
  const video = document.getElementById(videoId);
  const container = document.getElementById(containerId);

  if (!video || !container) return;

  video.setAttribute('muted', true);
  video.setAttribute('playsinline', true);
  video.src = src;

  const $video = $(video);
  const duration = $video.height();
  let progress = 0;
  let delay = 0;

  video.onloadedmetadata = function () {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      duration: durationMultiplier * duration,
      triggerElement: container,
      triggerHook: 0.5,
      offset: video.offsetHeight / 2
    })
      .setPin(container)
      .addTo(controller)
      // .addIndicators()
      .on("progress", function (e) {
        progress = Math.floor(100 * e.progress);
      });

    setInterval(() => {
      delay += (progress - delay) * accelAmount;
      video.currentTime = (video.duration * delay / 100) - 0.01;
    }, 20);
  };
}

setupScrollVideo({
  videoId: 'video1',
  containerId: 'view2',
  src: 'images/herospin2.mp4',
  durationMultiplier: 4
});

setupScrollVideo({
  videoId: 'video2',
  containerId: 'view3',
  src: 'images/z_spin.mp4',
  durationMultiplier: 4
});

setupScrollVideo({
  videoId: 'video3',
  containerId: 'view4',
  src: 'images/paralax2.mp4',
  durationMultiplier: 4
});
