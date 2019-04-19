import React from 'react';

const DrumPad = (props) => {
    return (
        <div 
            id="drum-machine"
            className="
            w-80 h-auto flex flex-column items-center bg-white pa2
            w-60-l pa2-l flex flex-row-l justify-center-l
            "
        >
            {props.children}
        </div>
    );
}

export default DrumPad;
