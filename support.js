// just call window.upsideDown() and enjoy!

window.upsideDown = () => {
    const music = new Audio('https://raw.githubusercontent.com/DavidLozzi/Stranger-Things-Easter-Egg/master/music.mp3');
    music.play();

    const body = document.getElementsByTagName('body')[0];
    body.style.background = "radial-gradient(transparent, black), #C11B1F";

    window.setTimeout(() => {
        body.style.transition = 'all 10s ease 0s, transform 12s';
        body.style.transform = 'rotate(180deg) scale(.9)';
        body.style.filter = 'invert(1)';

        window.setTimeout(() => {
            fadeMusic();
        }, 10500);
    }, 1000);

    const fadeMusic = () => {
        setTimeout(() => {
            music.volume = music.volumne !== 0 ? music.volume - 0.1 : 0;
            if(music.volume > 0) {
                fadeMusic();
            }
        }, 400);
    }
};