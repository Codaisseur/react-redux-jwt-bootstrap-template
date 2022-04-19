import React from "react";
import { useState, useEffect } from "react";
import Sketch from "react-p5";
import "p5/lib/addons/p5.sound";
import * as Tone from "tone";

import "./style.css";

//COMPONENTS
import SeqSelComp from "../../components/SequenseSelector/SeqSelComp";
import SeqSoundComp from "../../components/SeqSoundSelector/SeqSoundComp";
import SeqComp from "../../components/SequencerComponent/SeqComp";

export default function Canvas5try(props) {
  let hh, clap, bass; //INSTRUMENT. will serve as a container that holds a sound source
  let hPat, cPat, bPat; //INSTRUMENT PATTERN. it will be an array of numbers that we can manipulate to make beats
  let hPhrase, cPhrase, bPhrase; //INSTRUMENT PHRASE. which defines how the instrument pattern is interpreted.
  let drums; //PART. we will attach the phrase to the part, which will serve as our transport to drive the phrase
  let bpmCTRL;
  let beatLength;
  let cellWidth;
  let cnv, playPause;
  let sPat;
  let cursorPos;

  const setup = (p5, canvasParentRef) => {
    const cnv = p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.frameRate(60);
    cnv.mousePressed("canvasPressed");

    beatLength = 16;
    cellWidth = p5.width / beatLength;
    cursorPos = 0;

    // DIT GAAT SOWIESO NIET WERKEN
    hh = p5.loadSound("assets/hh_sample.mp3", () => {});
    clap = p5.loadSound("assets/clap_sample.mp3", () => {});
    bass = p5.loadSound("assets/bass_sample.mp3", () => {});

    hPat = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    cPat = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
    bPat = [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0];
    sPat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    hPhrase = new p5.Phrase(
      "hh",
      (time) => {
        hh.play(time);
      },
      hPat
    );
    cPhrase = new p5.Phrase(
      "clap",
      (time) => {
        clap.play(time);
      },
      cPat
    );
    bPhrase = new p5.Phrase(
      "bass",
      (time) => {
        bass.play(time);
      },
      bPat
    );

    playPause = p5.constructor
      .createButton("play")
      .position(250, 70)
      .mouseClicked(() => {
        if (hh.isLoaded() && clap.isLoaded() && bass.isLoaded()) {
          if (!drums.isPlaying) {
            // drums.metro.metroTicks = 0;
            drums.loop();
            playPause.html("pause");
          } else {
            drums.pause();
            playPause.html("play");
          }
        } else {
          console.log("oops, be patient as the drums load...");
        }
      });

    drums = new p5.Part();

    drums.addPhrase(hPhrase);
    drums.addPhrase(cPhrase);
    drums.addPhrase(bPhrase);
    drums.addPhrase("seq", "sequence", sPat);

    bpmCTRL = p5.constructor.createSlider(30, 600, 80, 1);
    bpmCTRL.position(10, 70);
    bpmCTRL.input(() => {
      drums.setBPM(bpmCTRL.value());
    });
    drums.setBPM("80");

    p5.drawMatrix();
  };

  // function keyPressed() {
  //   if (key === " ") {
  //     if (hh.isLoaded() && clap.isLoaded() && bass.isLoaded()) {
  //       if (!drums.isPlaying) {
  //         // drums.metro.metroTicks = 0;
  //         drums.loop();
  //       } else {
  //         drums.pause();
  //       }
  //     } else {
  //       console.log("oops, be patient as the drums load...");
  //     }
  //   }
  // }

  // function canvasPressed() {
  //   let rowClicked = floor((3 * mouseY) / height);
  //   let indexClicked = floor((16 * mouseX) / width);
  //   if (rowClicked === 0) {
  //     console.log("first row " + indexClicked);
  //     hPat[indexClicked] = +!hPat[indexClicked];
  //   } else if (rowClicked === 1) {
  //     console.log("second row");
  //     cPat[indexClicked] = +!cPat[indexClicked];
  //   } else if (rowClicked === 2) {
  //     console.log("third row");
  //     bPat[indexClicked] = +!bPat[indexClicked];
  //   }

  //   drawMatrix();
  // }

  // const drawMatrix = () => {
  //   background(80);
  //   stroke("gray");
  //   strokeWeight(2);
  //   fill("white");
  //   for (let i = 0; i < beatLength + 1; i++) {
  //     //startx, starty, endx, endy
  //     line(i * cellWidth, 0, i * cellWidth, height);
  //   }
  //   for (let i = 0; i < 4; i++) {
  //     line(0, (i * height) / 3, width, (i * height) / 3);
  //   }
  //   noStroke();
  //   for (let i = 0; i < beatLength; i++) {
  //     if (hPat[i] === 1) {
  //       ellipse(i * cellWidth + 0.5 * cellWidth, height / 6, 10);
  //     }
  //     if (cPat[i] === 1) {
  //       ellipse(i * cellWidth + 0.5 * cellWidth, height / 2, 10);
  //     }
  //     if (bPat[i] === 1) {
  //       ellipse(i * cellWidth + 0.5 * cellWidth, (height * 5) / 6, 10);
  //     }
  //   }
  // };

  // const sequence = (time, beatIndex) => {
  //   // console.log(beatIndex);
  //   setTimeout(() => {
  //     drawMatrix();
  //     drawPlayhead(beatIndex);
  //   }, time * 1000);
  // };

  // const drawPlayhead = (beatIndex) => {
  //   stroke("red");
  //   fill(255, 0, 0, 30);
  //   rect((beatIndex - 1) * cellWidth, 0, cellWidth, height);
  // };

  // const touchStarted = () => {
  //   if (getAudioContext().state !== "running") {
  //     getAudioContext().resume();
  //   }
  // };

  const draw = (p5) => {
    p5.background(0);
    p5.fill(10, 202, 153);
    p5.text("hoi", 240, 30);
  };

  return (
    <div>
      <div className="sequencerblock-style">
        <SeqSoundComp />

        <Sketch
          // preload={preload}
          // playOscillator={playOscillator}
          // mouseReleased={mouseReleased}
          setup={setup}
          draw={draw}
        />

        <SeqSelComp />
      </div>

      {/* <img style={{ borderColor: "red", height: `${amp}px` }} src={speaker} /> */}
    </div>
  );
}
