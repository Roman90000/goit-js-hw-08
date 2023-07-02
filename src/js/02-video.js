import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(timeSave, 1000));

function timeSave(e) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(e));
}

const time = JSON.parse(localStorage.getItem(STORAGE_KEY)).seconds;

player.setCurrentTime(time).then(function(seconds) {
});
