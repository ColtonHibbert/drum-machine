import React, { Component } from 'react';
import 'tachyons';
import  DrumPad from '../components/DrumPad.js';
import  DrumKeys from '../components/DrumKeys.js';
import  Controls from '../components/Controls.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: "",
      soundStrings: ["Punch", "Alien Machine Gun", "Atari", "Laser Cannon", "Mario Jump", "Metroid", "PacMan", "Power Up Ray", "Ray Gun"],
    }
    this.playQ = this.playQ.bind(this);
    this.playKeys = this.playKeys.bind(this);
  }

  
  playQ = () => {
    document.getElementById("Q").play();
    document.getElementById("display").textContent = "Punch";
  }
  playW = () => {
    document.getElementById("W").play();
    document.getElementById("display").textContent = "Alien Machine Gun";
  }
  playE = () => {
    document.getElementById("E").play();
    document.getElementById("display").textContent = "Atari";

  }
  playA = () => {
    document.getElementById("A").play();
    document.getElementById("display").textContent = "Laser Cannon";

  }
  playS = () => {
    document.getElementById("S").play();
    document.getElementById("display").textContent = "Mario Jump";
 
  }
  playD = () => {
    document.getElementById("D").play();
    document.getElementById("display").textContent = "Metroid";
  }
  playZ = () => {
    document.getElementById("Z").play();
    document.getElementById("display").textContent = "PacMan";
  }
  playX = () => {
    document.getElementById("X").play();
    document.getElementById("display").textContent = "Power Up Ray";
  }
  playC = () => {
    document.getElementById("C").play();
    document.getElementById("display").textContent = "Ray Gun";
  }

  playKeys = (event) => {
    if (event.key === "Q" || event.key === "q") {
      this.playQ();
    }
    if (event.key === "W" || event.key === "w") {
      this.playW();
    }
    if (event.key === "E" || event.key === "e") {
      this.playE();
    }
    if (event.key === "A" || event.key === "a") {
      this.playA();
    }
    if (event.key === "S" || event.key === "s") {
      this.playS();
    }
    if (event.key === "D" || event.key === "d") {
      this.playD();
    }
    if (event.key === "Z" || event.key === "z") {
      this.playZ();
    }
    if (event.key === "X" || event.key === "x") {
      this.playX();
    }
    if (event.key === "C" || event.key === "c") {
      this.playC();
    }
  }
  
  render() {
    return (
      <div 
        tabIndex="0"
        className="
        min-vh-100 w-100 bg-light-purple flex flex-column items-center justify-center"  
        onKeyPress={this.playKeys}  
      > <h1 class="f4 f3-l tc white">Gaming Drum Machine</h1>
        <h2 class="f5 f4-l tc white">Click or press a key to hear some cool gaming sounds!</h2>
        <DrumPad >
          <DrumKeys 
          playQ={this.playQ}
          playW={this.playW}
          playE={this.playE}
          playA={this.playA}
          playS={this.playS}
          playD={this.playD}
          playZ={this.playZ}
          playX={this.playX}
          playC={this.playC}
          playKeys={this.playKeys}
          />
          <Controls />
        </DrumPad>
      </div>
    );
  }
}

export default App;
