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
  }

  
  playQ = () => {
    document.getElementById("Q").play();
    console.log('should play');
  }

  playW = () => {
    document.getElementById("W").play();
    console.log('should play');
  }
  
  playE = () => {
    document.getElementById("E").play();
    console.log('should play');
  }

  playA = () => {
    document.getElementById("A").play();
    console.log('should play');
  }
  playS = () => {
    document.getElementById("S").play();
    console.log('should play');
  }
  playD = () => {
    document.getElementById("D").play();
    console.log('should play');
  }
  playZ = () => {
    document.getElementById("Z").play();
    console.log('should play');
  }
  playX = () => {
    document.getElementById("X").play();
    console.log('should play');
  }
  playC = () => {
    document.getElementById("C").play();
    console.log('should play');
  }

  playKeys = (event) => {
    if (event.key === "q" || event.key === "Q") {
      this.playQ();
      console.log('should key play q')
    }
  }

  render() {
    return (
      <div 
        className="
        min-vh-100 w-100 bg-light-purple flex flex-column items-center justify-center"
      >
        <DrumPad>
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
