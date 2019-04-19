import React from 'react';

const Controls = (props) => {
    return (
        <div className="w-50 flex flex-column items-center pa2">
            <div 
                className="ma1"
                id="display"
            >
            display
            </div>
            <div className="ma1">volume</div>
            <div className="ma1">bank toggle</div>
            <div className="ma1">power toggle</div>
        </div>
    );
}

export default Controls;