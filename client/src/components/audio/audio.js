// SOS button Audio onClick Sound Alert
import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import "./audio.css";

<ReactAudioPlayer
  src="my_audio_file.ogg"
  autoPlay
  controls
/>

function SoundButton (){
    return (
        <div><button className="sound">SOS</button></div>
    )
}

export default SoundButton;

















// import UIfx from 'uifx'; 
// import tickAudio from './my-sounds/tick.mp3';

// const tick = new UIfx({asset: tickAudio});

// export default class InputRange extends Component {
//   state = {
//     value: 0,
//   }
//   onChange = (event) => {
//     this.setState({ value: event.target.value });
//     tick.play();
//   }
//   render() {
//     return (
//       <div>
//         <div>{this.state.value}</div>
//         <input
//           type="range"
//           value={this.state.value}
//           onChange={this.onChange}
//         />
//       </div>
//     )
//   }
// }

//   //beep.setVolume(0.8).play();

//   const tick = new UIfx({
//     asset: tickMp3,
//     volume: 1.0
//   });
  
//   tick.play(1.0); // plays at 0.25 volume
//   tick.play(); // plays at 1.0 volume