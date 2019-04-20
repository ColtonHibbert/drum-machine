import React from 'react';
import StrongPunch from './StrongPunch.mp3';
import AlienMachineGun from './AlienMachineGun.mp3';
import Atari from './Atari.mp3';
import LaserCannon from './LaserCannon.mp3';
import MarioJump from './MarioJump.mp3';
import Metroid from './Metroid.mp3';
import Pacman from './Pacman.mp3';
import PowerUpRay from './PowerUpRay.mp3';
import RayGun from './RayGun.mp3';


const DrumKeys = ({ playQ, playW, playE, playA, playS, playD, playZ, playX, playC, playKeys }) => {
    return (
        <div className="h-100 w-100 flex flex-column items-center pa1
        w-50-l
        ">
            <div className="flex flex-row">  
                <div
                    id="playQ"
                    className="h3 w3 drum-pad bg-light-purple ma1 br2 flex justify-center items-center pointer grow
                    "
                    onClick={playQ}
                    onKeyDown={(event) => playKeys(event)}
                >Q
                    <audio
                        id="Q"
                        className="clip"
                        src={StrongPunch} 
                        type="audio/mp3"  
                    >
                    
                    Your browser doesn't support this audio</audio>
                </div>
                <div
                    id="playW"
                    className="h3 w3 drum-pad bg-light-purple ma1 br2 flex justify-center items-center pointer grow
                    "
                    onClick={playW}
                >W
                    <audio  
                        id="W"
                        className="clip"
                        src={AlienMachineGun} 
                        type="audio/mp3"
                    >
                    </audio>
                </div>
                <div
                    id="playE"
                    className="h3 w3 drum-pad bg-light-purple ma1 br2 flex justify-center items-center pointer grow 
                    "
                    onClick={playE}
                >E
                    <audio  
                        id="E"
                        className="clip"
                        src={Atari} 
                        type="audio/mp3"
                    >
                    </audio>
                </div>
            </div>
            <div className="flex flex-row">
                <div
                    id="playA"
                    className="h3 w3 drum-pad bg-light-purple ma1 br2 flex justify-center items-center pointer grow
                    "
                    onClick={playA}
                >A
                    <audio  
                        id="A"
                        className="clip"
                        src={LaserCannon} 
                        type="audio/mp3"
                    >
                    </audio>
                </div>
                <div
                    id="playS"
                    className="h3 w3 drum-pad bg-light-purple ma1 br2 flex justify-center items-center pointer grow
                    "
                    onClick={playS}
                >S
                    <audio  
                        id="S"
                        className="clip"
                        src={MarioJump} 
                        type="audio/mp3"
                        >
                    </audio>
                </div>
                <div
                    id="playD"
                    className="h3 w3 drum-pad bg-light-purple ma1 br2 flex justify-center items-center pointer grow
                    "
                    onClick={playD}
                >D
                    <audio  
                        id="D"
                        className="clip"
                        src={Metroid} 
                        type="audio/mp3"
                        >
                    </audio>
                </div>
            </div>
            <div className="flex flex-row">
                <div
                    id="playZ"
                    className="h3 w3 drum-pad bg-light-purple ma1 br2 flex justify-center items-center pointer grow
                    "
                    onClick={playZ}
                >Z
                    <audio  
                        id="Z"
                        className="clip"
                        src={Pacman} 
                        type="audio/mp3"
                    >
                    </audio>
                </div>
                <div
                    id="playX"
                    className="h3 w3 drum-pad bg-light-purple ma1 br2 flex justify-center items-center pointer grow 
                    "
                    onClick={playX}
                >X
                    <audio  
                        id="X"
                        className="clip"
                        src={PowerUpRay} 
                        type="audio/mp3"
                    >
                    </audio>
                </div>
                <div
                    id="playC"
                    className="h3 w3 drum-pad bg-light-purple ma1 br2 flex justify-center items-center pointer grow 
                    "
                    onClick={playC}
                >C
                    <audio  
                        id="C"
                        className="clip"
                        src={RayGun} 
                        type="audio/mp3"
                    >
                    </audio>
                </div> 
            </div> 
        </div>
    );
}

export default DrumKeys;