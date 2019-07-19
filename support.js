// just call window.upsideDown.start() and enjoy!
// call window.upsideDown.stop() to reset

// eslint-disable-next-line func-names
window.upsideDown = (function () {
    let music = {};
    let body = {};
    let originalBody = {};
    let status = '';
  
    const start = () => {
      music = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/161676/music.mp3');
      music.play();
      status = 'started';
  
      body = document.getElementsByTagName('body')[0];
      originalBody = { ...body };
  
      body.style.background = 'radial-gradient(transparent, black), #C11B1F';
  
      const fadeMusic = () => {
        setTimeout(() => {
          music.volume = Math.round(music.volume) > 0 ? music.volume - 0.1 : 0;
          if (music.volume > 0) {
            fadeMusic();
          } else {
            status = 'done';
          }
        }, 400);
      };
  
      window.setTimeout(() => {
        status = 'running';
        body.style.transition = 'all 10s ease 0s, transform 12s';
        body.style.transform = 'rotate(180deg) scale(.9)';
        body.style.filter = 'invert(1)';
  
        window.setTimeout(() => {
          fadeMusic();
        }, 10500);
      }, 1000);
    };
  
    const stop = () => {
      music.pause();
      music = null;
      body.style = originalBody.style;
      status = '';
    };
  
    const getStatus = () => {
      return status;
    };
  
    return {
      start,
      stop,
      getStatus
    };
  }());