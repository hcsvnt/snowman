// Import Tonic from '@socketsupply/tonic';
import Tonic from 'https://cdn.skypack.dev/@optoolco/tonic';
import './audio-player.css';
import podcast from '/src/podcast_final.mp3';


class AudioPlayer extends Tonic {

    constructor() {
        super();

        this.selectors = {
            playToggle:'.js-play-toggle',
            muteToggle:'.js-mute-toggle',
            seek:'.js-seek',
            volume:'.js-volume',
            timeCurrent:'.js-time-current',
            timeDuration:'.js-time-duration',
        }

        this.media = this.querySelector('.audio');

    }


    togglePlay() {
        this.media.play();
    }

    toggleMute() {
        console.log(this.media.volume)
        this.media.volume = 0;
        console.log(this.media.volume)
    }


    connected() {
        this.ui = Object.keys(this.selectors).reduce((acc, cur) => {
            return {...acc, [cur]: this.querySelector(this.selectors[cur])}
        }, {})

        this.media = this.querySelector('.audio')
        console.log(this.ui);
    }

    click(e) {

        switch (e.target) {
            case Tonic.match(e.target, this.selectors.playToggle):
                this.togglePlay();
                break;

            case Tonic.match(e.target, this.selectors.muteToggle):
                this.toggleMute()
                break;

            case Tonic.match(e.target, this.selectors.seek):
                console.log('lets seek', this.ui.seek.value);
                break;

            default:
                break;
        }
    }


    render() {
        return this.html`
        <div class="container">
        <audio class="audio" src="${podcast}"></audio>
        <h1>${podcast}</h1>
        <button class="play-toggle js-play-toggle" id="play-toggle">play/pause</button>
        <button class="mute js-mute-toggle" id="mute">mute me</button>
        <input type="range" class="seek js-seek" id="seek" max="100" value="0">
        <input type="range" class="volume js-volume" id="volume" max="100" value="100">

        <span class="time-current js-time-current" id="time-current">0:00</span>
        <span class="time-slash">/</span>
        <span class="time-duration js-time-duration" id="time-duration">0:00</span>
        </div>
        `;
    }
}



const initialState = {
    play: false,
    progress: 0,
    volume: 1,
    muted: false,
    loaded: false,
}


function bind() {

}


function view() {

}






Tonic.add(AudioPlayer);
console.log('AudioPlayer?', podcast);




// Nesting

// class MyPage {
//   renderHeader () {
//     return this.html`<h1>Header</h1>`
//   }
//   render () {
//     return this.html`
//       ${this.renderHeader()}
//       <main>My page</main>
//     `
//   }
// }
