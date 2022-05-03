// import React from "react";
// import Sketch from "react-p5";
// import "p5/lib/addons/p5.sound";

// import * as Tone from "tone";

// export default function Sequencos(p5, canvasParentRef) {
//   let sequence1, simpSynth;
//   let bgMelody = [
//     "C3",
//     ["E3", "G3", "D3", "C3"],
//     "A3",
//     "B2",
//     "C2",
//     "E3",
//     ["A2", "G2"],
//     "C4",
//   ]; //each indexed element is one beat of musical time. Nested arrays are subdivisions of those beats

//   function setup(p5, canvasParentRef) {
//     const cnv = p5.createCanvas(500, 500).parent(canvasParentRef);

//     simpSynth = new Tone.Synth({
//       oscillator: {
//         type: "square",
//         envelope: {
//           attack: 0.05,
//           decay: 0.5,
//           sustain: 1,
//           release: 5,
//         },
//       },
//     });

//     sequence1 = new Tone.Sequence(
//       function (time, note) {
//         simpSynth.triggerAttackRelease(note, 0.5);
//         console.log(note);
//       },
//       bgMelody,
//       "4n"
//     ); //after making the function, you have to specify what the notes you want to feed into it are, and how you are defining the beat. In this case, notes come from the bgMelody array, and each element is one quarter note

//     Tone.Transport.bpm.value = 80; //how many beats(quarter notes) per minute
//     Tone.Transport.start(); //starts the transport
//     Tone.Transport.loop = true; //loops the sound
//     Tone.Transport.loopStart = 0; //sets parameters for the loop
//     Tone.Transport.loopEnd = "2:0:0";

//     bgMusic();
//   }

//   function draw() {
//     p5.background(220);
//     p5.textAlign("CENTER");
//     p5.textFont("futura");
//     p5.text(
//       "This synthesizer will play a melody automatically",
//       p5.width / 2,
//       p5.height / 2
//     );
//   }

//   function bgMusic() {
//     sequence1.start();
//   }

//   return (
//     <div>
//       <div className="sequencerblock-style">
//         <Sketch setup={setup} draw={draw} bgMusic={bgMusic} />
//       </div>
//     </div>
//   );
// }
