import React from "react";
import "./SOS.css";

function SOS (){
    return(
        <button className="sosButton">S.O.S</button>
    )
}
class App extends SOS {
    render() {
  
      var audio = new Audio("/Users/victoriasorone/Desktop/codehw/solid-computing-machine/client/src/components/SOS/Emergency Air Raid Siren Alarm.mp3")
  
      return (
        <button>
              <img src={SOS} onClick={ audio.play() }/>
        </button>
      );
    }
  }

export default SOS;

// class App extends Component {
//     render() {
  
//       var audio = new Audio("../public/sound.mp3")
  
//       return (
//         <Container>
//               <img src={dwight} onClick={ audio.play() }/>
//         </Container>
//       );
//     }
//   }